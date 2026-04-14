// FAQ toggle
document.addEventListener('click', e => {
  const q = e.target.closest('.faq-q');
  if (!q) return;
  q.parentElement.classList.toggle('open');
});

// Shared calculation helper
function getVal(id) {
  return parseFloat(document.getElementById(id).value) || 0;
}

function setResult(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}
