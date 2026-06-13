// ── AUTENTICAÇÃO ──
// ATENÇÃO: antes de publicar, migrar para Supabase ou Firebase
const USERS = {
  'admin@edp.com':   { senha: 'admin2026', role: 'admin',  nome: 'Admin' },
  'gratis@edp.com':  { senha: 'gratis2026', role: 'membro', nome: 'Visitante', plano: 'Básico' },
  'membro@edp.com':  { senha: 'edp2026',   role: 'membro', nome: 'Membro', plano: 'Essencial' },
  'premium@edp.com': { senha: 'premium2026', role: 'membro', nome: 'Premium', plano: 'Premium' }
};

// Ordem dos planos para controle de acesso
const PLANO_RANK = { 'Básico': 1, 'Essencial': 2, 'Premium': 3 };

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
    configureMemberDashboard(user.plano || 'Básico');
  }
}

// ── CONTROLE DE ACESSO POR PLANO ──
function configureMemberDashboard(plano) {
  var rank = PLANO_RANK[plano] || 1;

  // Texto de boas-vindas
  var welcome = document.getElementById('dashWelcomePlano');
  var labels = {
    'Básico':    'Plano Gratuito · Demonstração (apenas prova 2026)',
    'Essencial': 'Plano Essencial · Últimas 5 provas (2022–2026)',
    'Premium':   'Plano Premium · 10 anos completos (2017–2026)'
  };
  if (welcome) welcome.textContent = labels[plano] || labels['Básico'];

  // Mapa Básico (2026) — sempre liberado
  setupMapaCard('cardMapaBasico', true, 'mapa-basico.html', '🗺️ Mapa da Prova — AMP-PR 2026');

  // Mapa Essencial (2022–2026) — só rank >= 2
  setupMapaCard('cardMapaEssencial', rank >= 2, 'mapa-essencial.html', '📊 Mapa Essencial — AMP-PR (2022–2026)', 'cardMapaEssencialArrow', 'R$ 87');

  // Mapa Premium (10 anos) — só rank >= 3
  setupMapaCard('cardMapaPremium', rank >= 3, 'mapa-premium.html', '🏆 Mapa Premium — AMP-PR (2017–2026)', 'cardMapaPremiumArrow', 'R$ 147');
}

function setupMapaCard(cardId, unlocked, src, titulo, arrowId, preco) {
  var card = document.getElementById(cardId);
  if (!card) return;
  // Limpa handler anterior (clonando o nó)
  var fresh = card.cloneNode(true);
  card.parentNode.replaceChild(fresh, card);
  card = fresh;

  if (unlocked) {
    card.style.opacity = '';
    card.style.cursor = 'pointer';
    card.style.borderStyle = '';
    card.addEventListener('click', function(){ openMapa(src, titulo); });
  } else {
    card.style.opacity = '0.55';
    card.style.cursor = 'not-allowed';
    card.style.borderStyle = 'dashed';
    var arrow = arrowId ? card.querySelector('#' + arrowId) : null;
    if (arrow) {
      arrow.outerHTML = '<a href="planos.html" style="font-family:\'IBM Plex Mono\',monospace;' +
        'font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--red2);' +
        'text-decoration:none;border:1px solid var(--red2);padding:5px 10px;border-radius:3px">' +
        'Fazer upgrade' + (preco ? ' (' + preco + ')' : '') + '</a>';
    }
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

  // Mapa buttons — os cards do membro são configurados em configureMemberDashboard()
  // conforme o plano do usuário (controle de acesso por tier).
  var bma = document.getElementById('btnAbrirMapaAdmin');
  if (bma) bma.addEventListener('click', function(){ openMapa('mapa-premium.html', '🏆 Mapa da Prova — visão admin (10 anos)'); });

  // Fechar modal com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });
});
