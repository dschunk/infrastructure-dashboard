const cpu = document.querySelector('#cpu');
const memory = document.querySelector('#memory');
const updated = document.querySelector('#last-updated');
const toast = document.querySelector('#toast');

function refreshTelemetry() {
  const cpuValue = Math.floor(24 + Math.random() * 19);
  const memoryValue = Math.floor(58 + Math.random() * 9);
  cpu.textContent = cpuValue;
  memory.textContent = memoryValue;
  document.querySelector('#cpu-bar').style.width = cpuValue + '%';
  document.querySelector('#memory-bar').style.width = memoryValue + '%';
  updated.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1800);
}

document.querySelector('#refresh').addEventListener('click', refreshTelemetry);
