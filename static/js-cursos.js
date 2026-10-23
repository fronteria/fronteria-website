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
