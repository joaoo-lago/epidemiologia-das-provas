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

// ── SELETOR DE PLANO ──
function selectPlan(el, id) {
  document.querySelectorAll('#plans-amp .plan').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
  var cta = document.getElementById('plan-cta');
  if (!cta) return;
  cta.style.display = 'block';
  var msgs = {
    basico:   { label: '📊 Acessar análise gratuita →', capture: true },
    essencial:{ label: '⭐ Adquirir Plano Essencial — R$ 87 →', href: '#', blank: false },
    premium:  { label: '🏆 Adquirir Plano Premium — R$ 147 →', href: '#', blank: false }
  };
  var m = msgs[id];
  if (!m) return;
  var style = 'display:block;background:var(--red);color:#fff;font-family:\'IBM Plex Mono\',monospace;' +
    'font-size:11px;letter-spacing:0.1em;text-transform:uppercase;padding:13px 18px;border-radius:2px;' +
    'text-decoration:none;transition:background 0.15s;cursor:pointer;border:none;width:100%;text-align:center';
  if (m.capture) {
    // Plano gratuito — exige cadastro no formulário antes de liberar o acesso
    cta.innerHTML = '<button type="button" onclick="openCapture()" style="' + style + '">' + m.label + '</button>';
  } else {
    cta.innerHTML = '<a href="' + m.href + '"' + (m.blank ? ' target="_blank"' : '') +
      ' style="' + style + '">' + m.label + '</a>';
  }
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
function openMapa(src, titulo) {
  var frame = document.getElementById('mapaFrame');
  if (src && frame && frame.getAttribute('src') !== src) frame.setAttribute('src', src);
  var t = document.querySelector('.modal-bar-title');
  if (t && titulo) t.textContent = titulo;
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
  if (bm) bm.addEventListener('click', function(){ openMapa('mapa-essencial.html', '🗺️ Mapa da Prova — AMP-PR (Essencial)'); });

  var bmp = document.getElementById('btnAbrirMapaPremium');
  if (bmp) bmp.addEventListener('click', function(){ openMapa('mapa-premium.html', '🏆 Mapa Premium — AMP-PR (10 anos)'); });

  var bma = document.getElementById('btnAbrirMapaAdmin');
  if (bma) bma.addEventListener('click', function(){ openMapa('mapa-premium.html', '🏆 Mapa da Prova — visão admin (10 anos)'); });

  // Fechar modal com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
});
