const cpu = document.querySelector('#cpu');
const memory = document.querySelector('#memory');
const updated = document.querySelector('#last-updated');
const toast = document.querySelector('#toast');
const palette = document.querySelector('#command-palette');
const search = document.querySelector('#command-search');
const incidentBanner = document.querySelector('#incident-banner');
const gameSystem = document.querySelector('#game-system');
const heroTitle = document.querySelector('.hero h2');
let incidentActive = false;

function announce(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1800);
}

function refreshTelemetry() {
  const cpuValue = Math.floor(24 + Math.random() * 19);
  const memoryValue = Math.floor(58 + Math.random() * 9);
  cpu.textContent = cpuValue;
  memory.textContent = memoryValue;
  document.querySelector('#cpu-bar').style.width = cpuValue + '%';
  document.querySelector('#memory-bar').style.width = memoryValue + '%';
  updated.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  announce('Telemetry refreshed');
}

function setIncident(active) {
  incidentActive = active;
  incidentBanner.hidden = !active;
  gameSystem.classList.toggle('offline', active);
  gameSystem.querySelector('.system-state').textContent = active ? 'OFFLINE' : 'ONLINE';
  heroTitle.textContent = active ? '1 critical service requires attention' : 'All critical services operational';
  document.querySelector('.panel-title > span').textContent = active ? '3 online · 1 offline' : '4 online';
  announce(active ? 'Simulated incident activated' : 'Incident resolved');
}

function openPalette() {
  palette.showModal();
  search.value = '';
  filterCommands('');
  window.setTimeout(() => search.focus(), 0);
}

function filterCommands(value) {
  const query = value.trim().toLowerCase();
  document.querySelectorAll('.command-list > *').forEach((item) => {
    item.hidden = query && !item.textContent.toLowerCase().includes(query);
  });
}

async function runCommand(command) {
  palette.close();
  if (command === 'refresh') refreshTelemetry();
  if (command === 'incident') setIncident(!incidentActive);
  if (command === 'copy') {
    const state = incidentActive ? 'DEGRADED — GAME-PROD01 OFFLINE' : 'OPERATIONAL — ALL CRITICAL SERVICES ONLINE';
    await navigator.clipboard.writeText(`Northstar Operations Center: ${state}. Synthetic demo status generated ${new Date().toISOString()}.`);
    announce('Status summary copied');
  }
}

document.querySelector('#refresh').addEventListener('click', refreshTelemetry);
document.querySelector('#command').addEventListener('click', openPalette);
document.querySelector('#close-command').addEventListener('click', () => palette.close());
document.querySelector('#resolve-incident').addEventListener('click', () => setIncident(false));
search.addEventListener('input', (event) => filterCommands(event.target.value));
document.querySelectorAll('[data-command]').forEach((button) => button.addEventListener('click', () => runCommand(button.dataset.command)));

document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    palette.open ? palette.close() : openPalette();
  }
  if (!palette.open) return;
  const shortcuts = { r: 'refresh', i: 'incident', c: 'copy' };
  if (shortcuts[event.key.toLowerCase()] && document.activeElement !== search) runCommand(shortcuts[event.key.toLowerCase()]);
});
