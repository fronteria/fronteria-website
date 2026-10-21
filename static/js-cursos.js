document.addEventListener('click', async (event) => {
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
