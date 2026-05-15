// ── AUTENTICAÇÃO ──
// ATENÇÃO: antes de publicar, migrar para Supabase ou Firebase
const USERS = {
  'admin@edp.com':  { senha: 'admin2026', role: 'admin',  nome: 'Admin' },
  'membro@edp.com': { senha: 'edp2026',   role: 'membro', nome: 'Membro', plano: 'Essencial' }
};

// ── NAVEGAÇÃO ──
function nav(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  if (btn && btn.classList && btn.classList.contains('nav-btn')) btn.classList.add('active');
  window.scrollTo(0, 0);
}

// ── AUTH ──
function switchAuth(t) {
  document.querySelectorAll('.auth-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  document.getElementById('form-' + t).classList.add('active');
  document.querySelectorAll('.auth-tab').forEach(b => {
    if ((t === 'login' && b.textContent.includes('Entrar')) ||
        (t === 'register' && b.textContent.includes('Criar')))
      b.classList.add('active');
  });
}

function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const senha = document.getElementById('loginSenha').value;
  const errEl = document.getElementById('loginErr');
  const user = USERS[email];
  if (!user || user.senha !== senha) {
    errEl.style.display = 'block'; return;
  }
  errEl.style.display = 'none';
  document.getElementById('authSection').style.display = 'none';
  if (user.role === 'admin') {
    document.getElementById('adminDashboard').style.display = 'block';
  } else {
    document.getElementById('memberDashboard').style.display = 'block';
  }
}

function doLogout() {
  document.getElementById('authSection').style.display = 'block';
  document.getElementById('memberDashboard').style.display = 'none';
  document.getElementById('adminDashboard').style.display = 'none';
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginSenha').value = '';
}

// ── SELETOR DE PROVA ──
function selectProva(btn, id) {
  if (btn.classList.contains('disabled')) return;
  document.querySelectorAll('.prova-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('plans-amp').style.display = id === 'amp' ? 'flex' : 'none';
  document.getElementById('plans-soon').style.display = id === 'amp' ? 'none' : 'flex';
}

// ── FILTROS EDITAIS ──
function filterChip(el) {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}

// ── MODAL MAPA ──
function openMapa() {
  document.getElementById('mapaModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('mapaModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── EDITAIS ACCORDION ──
function toggleEdital(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.edital-detail').forEach(d => d.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

// ── EVENT LISTENERS ──
document.addEventListener('DOMContentLoaded', function () {
  // Login
  var bl = document.getElementById('btnLogin');
  if (bl) bl.addEventListener('click', doLogin);

  var bc = document.getElementById('btnCadastro');
  if (bc) bc.addEventListener('click', doLogin);

  // Enter no campo de senha
  var senhaInput = document.getElementById('loginSenha');
  if (senhaInput) senhaInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doLogin();
  });

  // Logout (múltiplos botões)
  document.querySelectorAll('.btn-sair').forEach(function (b) {
    b.addEventListener('click', doLogout);
  });

  // Modal fechar
  var mc = document.getElementById('modalCloseBtn');
  if (mc) mc.addEventListener('click', closeModal);

  // Mapa buttons
  var bm = document.getElementById('btnAbrirMapa');
  if (bm) bm.addEventListener('click', openMapa);

  var bma = document.getElementById('btnAbrirMapaAdmin');
  if (bma) bma.addEventListener('click', openMapa);

  // Fechar modal com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
});
