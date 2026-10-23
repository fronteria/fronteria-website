const exerciseKey = `fronteria-course:${window.location.pathname}`;
let savedExercise = {};

try {
  savedExercise = JSON.parse(window.localStorage.getItem(exerciseKey) || '{}');
} catch (_) {
  savedExercise = {};
}

const saveExercise = () => {
  try {
    window.localStorage.setItem(exerciseKey, JSON.stringify(savedExercise));
  } catch (_) {
    document.querySelectorAll('.reflection-status').forEach((status) => {
      status.textContent = 'No se pudo guardar. Puedes continuar y conservar tus respuestas en otra parte.';
    });
  }
};

document.querySelectorAll('[data-step-complete]').forEach((checkbox) => {
  const step = checkbox.closest('[data-step]');
  const stepKey = step.dataset.step;
  checkbox.checked = Boolean(savedExercise.steps && savedExercise.steps[stepKey]);
  step.classList.toggle('is-complete', checkbox.checked);
  checkbox.addEventListener('change', () => {
    savedExercise.steps = savedExercise.steps || {};
    savedExercise.steps[stepKey] = checkbox.checked;
    step.classList.toggle('is-complete', checkbox.checked);
    saveExercise();
  });
});

const updateCourseProgress = () => {
  const progress = document.querySelector('[data-course-progress]');
  if (!progress) return;
  const exercises = [...document.querySelectorAll('.exercise-nav a')];
  const activityCount = exercises.length;
  const completedActivities = exercises.filter((link) => {
    try {
      const key = `fronteria-course:${new URL(link.href).pathname}`;
      const state = JSON.parse(window.localStorage.getItem(key) || '{}');
      const page = link.pathname.endsWith(window.location.pathname)
        ? document
        : null;
      if (page) {
        const requiredSteps = [...page.querySelectorAll('[data-step][data-optional="false"]')];
        return requiredSteps.length > 0 && requiredSteps.every((step) => state.steps && state.steps[step.dataset.step]);
      }
      return false;
    } catch (_) {
      return false;
    }
  }).length;
  const stepNodes = [...document.querySelectorAll('[data-step][data-optional="false"]')];
  const requiredCount = stepNodes.length;
  const completedSteps = stepNodes.filter((step) => {
    const input = step.querySelector('[data-step-complete]');
    return input && input.checked;
  }).length;
  const percent = requiredCount ? Math.round(completedSteps / requiredCount * 100) : 0;
  const bar = progress.querySelector('[data-course-progress-bar]');
  bar.value = percent;
  bar.textContent = `${percent}%`;
  progress.querySelector('[data-course-progress-label]').textContent = `${completedActivities} de ${activityCount} actividades completas`;
  progress.querySelector('[data-current-activity]').textContent = `Actividad actual: ${document.querySelector('.page-hero h1')?.textContent || ''} · ${percent}% de pasos esenciales completados`;
};

document.querySelectorAll('[data-step-complete]').forEach((checkbox) => checkbox.addEventListener('change', updateCourseProgress));
updateCourseProgress();

document.querySelectorAll('[data-learning-check]').forEach((check) => {
  const button = check.querySelector('[data-check-answer]');
  const feedback = check.querySelector('.learning-check-feedback');
  button.addEventListener('click', () => {
    const selected = check.querySelector('input[type="radio"]:checked');
    if (!selected) {
      feedback.textContent = 'Elija una opción para comprobar su respuesta.';
      return;
    }
    if (selected.value === button.dataset.checkAnswer) {
      feedback.textContent = `Correcto. ${button.dataset.feedback}`;
      feedback.classList.add('is-correct');
    } else {
      feedback.textContent = 'Esa opción no es la más adecuada. Revise las opciones e inténtelo de nuevo.';
      feedback.classList.remove('is-correct');
    }
  });
});

document.querySelectorAll('[data-reflection-answer]').forEach((field) => {
  const reflectionKey = field.dataset.reflectionAnswer;
  const reflections = savedExercise.reflections || {};
  field.value = reflections[reflectionKey] || '';
  field.addEventListener('input', () => {
    savedExercise.reflections = savedExercise.reflections || {};
    savedExercise.reflections[reflectionKey] = field.value;
    saveExercise();
  });
});

document.addEventListener('click', async (event) => {
  const clearProgressButton = event.target.closest('[data-clear-progress]');
  if (clearProgressButton) {
    try {
      window.localStorage.removeItem(exerciseKey);
    } catch (_) {
      // Progress is already in memory and can still be cleared for this page view.
    }
    savedExercise = {};
    document.querySelectorAll('[data-step-complete]').forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.closest('[data-step]').classList.remove('is-complete');
    });
    document.querySelectorAll('[data-reflection-answer]').forEach((field) => { field.value = ''; });
    document.querySelectorAll('.reflection-status').forEach((status) => {
      status.textContent = 'Progreso y respuestas borrados para esta actividad.';
    });
    updateCourseProgress();
    return;
  }

  const clearButton = event.target.closest('[data-clear-reflection]');
  if (clearButton) {
    const answer = clearButton.closest('[data-reflection]').querySelector('[data-reflection-answer]');
    answer.value = '';
    savedExercise.reflections = savedExercise.reflections || {};
    savedExercise.reflections[answer.dataset.reflectionAnswer] = '';
    saveExercise();
    clearButton.closest('[data-reflection]').querySelector('.reflection-status').textContent = 'Respuesta borrada.';
    answer.focus();
    return;
  }

  const button = event.target.closest('.copy-button');
  if (!button) return;
  const box = button.closest('.prompt-box');
  const prompt = box.querySelector('pre').innerText.trim();
  const status = box.querySelector('.copy-status');
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(prompt);
    } else {
      const field = document.createElement('textarea');
      field.value = prompt;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      if (!copied) throw new Error('copy failed');
    }
    status.textContent = 'Prompt copiado.';
    button.textContent = 'Copiado';
  } catch (_) {
    status.textContent = 'No se pudo copiar automáticamente. Seleccione y copie el texto del prompt.';
  }
  window.setTimeout(() => { button.textContent = 'Copiar prompt'; }, 1800);
});
