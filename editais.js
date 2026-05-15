// Conteúdo dos editais — edite aqui para adicionar novos
document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('editais-content');
  if (!container) return;
  container.innerHTML = `
<div class="enamed-feature">
    <div class="enamed-card">
      <div class="enamed-card-head">
        <h3>ENAMED 2026 · Exame Nacional de Avaliação da Formação Médica</h3>
        <span class="badge-new">Destaque</span>
      </div>
      <div class="enamed-card-body">
        <div class="enamed-specs">
          <div>
            <div class="spec-label">Data da Prova</div>
            <div class="spec-val">13 Set 2026</div>
            <div class="spec-sub">Confirmado pelo INEP</div>
          </div>
          <div>
            <div class="spec-label">Organizador</div>
            <div class="spec-val">INEP / FGV</div>
            <div class="spec-sub">Contrato R$ 20,5 mi</div>
          </div>
          <div>
            <div class="spec-label">Peso no ENARE</div>
            <div class="spec-val">20%</div>
            <div class="spec-sub">4º ano — permanente</div>
          </div>
          <div>
            <div class="spec-label">Participantes</div>
            <div class="spec-val">4º e 6º ano</div>
            <div class="spec-sub">+ médicos formados</div>
          </div>
        </div>
        <div class="enamed-desc">
          <strong>O que muda em 2026:</strong> A segunda edição expande a obrigatoriedade para estudantes do 4º ano (7º ou 8º semestre até 31/08/2026). A nota valerá <strong>permanentemente 20%</strong> da pontuação final no ENARE. Para concluintes, continua obrigatório como condição para colação de grau e funciona como prova objetiva do ENARE. Médicos formados que disputam vagas de <strong>Acesso Direto</strong> via ENARE também devem participar.
        </div>
      </div>
    </div>
  </div>

  <div class="editais-list-wrap">

    <!-- EDITAIS 2026/2027 -->
    <div class="editais-list-title">Processos seletivos 2026/2027 — Em andamento ou previstos</div>

    <!-- AMP-PR 2026/2027 -->
    <div class="edital-row" onclick="toggleEdital('amp27')" style="cursor:pointer">
      <div class="edital-year">2027</div>
      <div>
        <div class="edital-title">AMP-PR 2026/2027 · Associação Médica do Paraná — 25ª edição</div>
        <div class="edital-meta">Paraná · UCAMP · 45 instituições · Prova geral + específica · Curitiba</div>
      </div>
      <div class="badge-status s-soon">Previsto</div>
      <a href="https://www.amp.org.br" target="_blank" class="edital-link" onclick="event.stopPropagation()">Site oficial →</a>
    </div>
    <div class="edital-detail" id="amp27">
      <div class="ed-grid">
        <div class="ed-item"><div class="ed-label">Data da prova</div><div class="ed-val">1º de novembro de 2026 (domingo)</div></div>
        <div class="ed-item"><div class="ed-label">Taxa de inscrição</div><div class="ed-val">A confirmar — edição anterior: R$ 615,00 + taxas COREMES</div></div>
        <div class="ed-item"><div class="ed-label">Inscrições</div><div class="ed-val">A confirmar — previsão agosto/setembro 2026</div></div>
        <div class="ed-item"><div class="ed-label">Local da prova</div><div class="ed-val">Universidade Positivo, Curitiba-PR</div></div>
        <div class="ed-item"><div class="ed-label">Recurso ao gabarito</div><div class="ed-val">A confirmar — R$ 50,00/questão (máx. R$ 450,00) na edição anterior</div></div>
        <div class="ed-item"><div class="ed-label">Resultado final</div><div class="ed-val">A confirmar — previsão novembro/dezembro 2026</div></div>
      </div>
      <div class="ed-obs">⚠️ Edital com o cronograma completo ainda não publicado. Apenas a data da prova foi confirmada oficialmente pela AMP/UCAMP. Acompanhe o site oficial.</div>
    </div>

    <!-- ENAMED 2026 -->
    <div class="edital-row" onclick="toggleEdital('enamed26')" style="cursor:pointer">
      <div class="edital-year">2026</div>
      <div>
        <div class="edital-title">ENAMED 2026 · Exame Nacional de Avaliação da Formação Médica — 2ª edição</div>
        <div class="edital-meta">Nacional · INEP / FGV · 4º e 6º ano + médicos formados</div>
      </div>
      <div class="badge-status s-open">Edital publicado</div>
      <a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enamed" target="_blank" class="edital-link" onclick="event.stopPropagation()">INEP →</a>
    </div>
    <div class="edital-detail" id="enamed26">
      <div class="ed-grid">
        <div class="ed-item"><div class="ed-label">Edital base</div><div class="ed-val">Edital INEP nº 49, de 24/04/2026 (publicado no DOU)</div></div>
        <div class="ed-item"><div class="ed-label">Cadastro e local de prova</div><div class="ed-val">08 a 22 de junho de 2026 · Sistema Enamed</div></div>
        <div class="ed-item"><div class="ed-label">Taxa de inscrição</div><div class="ed-val">A definir — isenta para concluintes que não usarão nota no ENARE</div></div>
        <div class="ed-item"><div class="ed-label">Questionário do Estudante 1º período</div><div class="ed-val">08 a 22 de junho de 2026</div></div>
        <div class="ed-item"><div class="ed-label">Questionário do Estudante 2º período</div><div class="ed-val">08 de julho a 12 de setembro de 2026</div></div>
        <div class="ed-item"><div class="ed-label">Divulgação do local de prova</div><div class="ed-val">04 de setembro de 2026 · via Cartão de Confirmação</div></div>
        <div class="ed-item"><div class="ed-label">📅 Data da prova</div><div class="ed-val" style="font-weight:600">13 de setembro de 2026 (domingo)</div></div>
        <div class="ed-item"><div class="ed-label">Gabarito preliminar</div><div class="ed-val">15 de setembro de 2026</div></div>
        <div class="ed-item"><div class="ed-label">Recursos ao gabarito</div><div class="ed-val">15 e 16 de setembro de 2026 · janela de apenas 48h</div></div>
        <div class="ed-item"><div class="ed-label">Relação de estudantes regulares</div><div class="ed-val">12 de novembro de 2026</div></div>
        <div class="ed-item"><div class="ed-label">Gabarito definitivo + resultado individual</div><div class="ed-val">04 de dezembro de 2026</div></div>
        <div class="ed-item"><div class="ed-label">Conceito Enade + microdados</div><div class="ed-val">A partir de 14 de dezembro de 2026</div></div>
        <div class="ed-item"><div class="ed-label">Boletim de Desempenho (4º ano)</div><div class="ed-val">A partir de 12 de janeiro de 2027</div></div>
        <div class="ed-item"><div class="ed-label">Peso no ENARE</div><div class="ed-val">20% permanente para 4º ano · Fase 1 objetiva para concluintes e formados</div></div>
        <div class="ed-item"><div class="ed-label">Participantes obrigatórios</div><div class="ed-val">Concluintes (6º ano) + 4º ano (7º/8º semestre em 31/08/2026)</div></div>
        <div class="ed-item"><div class="ed-label">Estrutura da prova</div><div class="ed-val">100 questões objetivas · 4 alternativas · 5 horas de duração</div></div>
        <div class="ed-item"><div class="ed-label">Organizadores</div><div class="ed-val">INEP / MEC / Ebserh · Aplicação: FGV (contrato R$ 20,5 mi)</div></div>
      </div>
      <div class="ed-obs">⚠️ Atenção: o prazo para recursos ao gabarito é de apenas 48h (15 e 16/set). O edital específico com estrutura detalhada da prova ainda será publicado separadamente pelo INEP.</div>
    </div>

    <!-- ENARE 2026/2027 -->
    <div class="edital-row" onclick="toggleEdital('enare27')" style="cursor:pointer">
      <div class="edital-year">2027</div>
      <div>
        <div class="edital-title">ENARE 2026/2027 · Exame Nacional de Residência Médica</div>
        <div class="edital-meta">Nacional · Acesso Direto, Pré-Requisito e Área de Atuação · +7.000 vagas estimadas</div>
      </div>
      <div class="badge-status s-soon">Aguardando</div>
      <a href="https://www.gov.br/saude/pt-br/composicao/sgtes/enare" target="_blank" class="edital-link" onclick="event.stopPropagation()">MS →</a>
    </div>
    <div class="edital-detail" id="enare27">
      <div class="ed-grid">
        <div class="ed-item"><div class="ed-label">Data da prova</div><div class="ed-val">A confirmar — previsão 2º semestre de 2026</div></div>
        <div class="ed-item"><div class="ed-label">Edital</div><div class="ed-val">Não publicado</div></div>
        <div class="ed-item"><div class="ed-label">Composição da nota</div><div class="ed-val">80% ENARE + 20% ENAMED (permanente para quem prestou em 2026)</div></div>
        <div class="ed-item"><div class="ed-label">Modalidades</div><div class="ed-val">Acesso Direto · Pré-Requisito · Área de Atuação</div></div>
      </div>
      <div class="ed-obs">⚠️ Cronograma e edital ainda não divulgados. Aguardando publicação oficial pelo Ministério da Saúde.</div>
    </div>

    <!-- EDITAIS 2025/2026 ENCERRADOS -->
    <div class="editais-list-title" style="margin-top:32px">Processos seletivos 2025/2026 — Encerrados · Referência histórica</div>

    <!-- AMP 2025/2026 -->
    <div class="edital-row" onclick="toggleEdital('amp26')" style="cursor:pointer">
      <div class="edital-year">2026</div>
      <div>
        <div class="edital-title">AMP-PR 2025/2026 · Associação Médica do Paraná — 24ª edição</div>
        <div class="edital-meta">Paraná · UCAMP · 45 instituições · 600+ vagas · 4.000+ candidatos únicos</div>
      </div>
      <div class="badge-status s-closed">Encerrado</div>
      <a href="https://ucamp.org.br/residencia-medica" target="_blank" class="edital-link" onclick="event.stopPropagation()">UCAMP →</a>
    </div>
    <div class="edital-detail" id="amp26">
      <div class="ed-grid">
        <div class="ed-item"><div class="ed-label">Inscrições</div><div class="ed-val">04/09/2025 a 02/10/2025 (até 14h) — site amp.org.br</div></div>
        <div class="ed-item"><div class="ed-label">Taxa de inscrição</div><div class="ed-val">R$ 615,00 (AMP) + taxas COREMES de cada instituição · Desconto de R$ 180,00 para sócios AMP há +1 ano</div></div>
        <div class="ed-item"><div class="ed-label">Data da prova</div><div class="ed-val">02/11/2025 às 14h — Universidade Positivo, Curitiba</div></div>
        <div class="ed-item"><div class="ed-label">Confirmação de inscrição</div><div class="ed-val">09/10/2025 a 16/10/2025</div></div>
        <div class="ed-item"><div class="ed-label">Recurso ao gabarito</div><div class="ed-val">Até 14h de 04/11/2025 · R$ 50,00/questão · máximo R$ 450,00</div></div>
        <div class="ed-item"><div class="ed-label">Resultado final</div><div class="ed-val">25/11/2025 · Recursos: 24h após divulgação</div></div>
        <div class="ed-item"><div class="ed-label">Prova objetiva</div><div class="ed-val">100 questões (Acesso Direto) · 20–50 questões (Pré-Requisito) · nota mín. 6,0 para certificado</div></div>
        <div class="ed-item"><div class="ed-label">Nota base</div><div class="ed-val">Incluída na análise Epidemiologia das Provas 2017–2026</div></div>
      </div>
    </div>

    <!-- UEL 2025/2026 -->
    <div class="edital-row" onclick="toggleEdital('uel26')" style="cursor:pointer">
      <div class="edital-year">2026</div>
      <div>
        <div class="edital-title">UEL 2025/2026 · Universidade Estadual de Londrina</div>
        <div class="edital-meta">Londrina-PR · Hospital Universitário de Londrina · 104 vagas · 1.573 inscritos</div>
      </div>
      <div class="badge-status s-closed">Encerrado</div>
      <a href="https://www.cops.uel.br" target="_blank" class="edital-link" onclick="event.stopPropagation()">COPS →</a>
    </div>
    <div class="edital-detail" id="uel26">
      <div class="ed-grid">
        <div class="ed-item"><div class="ed-label">Inscrições — Ações Afirmativas</div><div class="ed-val">16/08/2025 a 25/08/2025</div></div>
        <div class="ed-item"><div class="ed-label">Inscrições — Ampla Concorrência</div><div class="ed-val">16/09/2025 a 06/10/2025</div></div>
        <div class="ed-item"><div class="ed-label">Taxa de inscrição</div><div class="ed-val">R$ 692,00 · Isenção disponível para candidatos CadÚnico (01 a 06/08/2025)</div></div>
        <div class="ed-item"><div class="ed-label">Data da prova</div><div class="ed-val">09/11/2025 — Londrina-PR</div></div>
        <div class="ed-item"><div class="ed-label">Pontuação final provisória</div><div class="ed-val">16/12/2025</div></div>
        <div class="ed-item"><div class="ed-label">Recurso da nota final</div><div class="ed-val">16 a 18/12/2025</div></div>
        <div class="ed-item"><div class="ed-label">Resultado final</div><div class="ed-val">22/12/2025</div></div>
        <div class="ed-item"><div class="ed-label">Vagas</div><div class="ed-val">104 vagas · 20% reservadas para cotas (programas com +6 vagas) · Concorrência geral: 15,12 candidatos/vaga</div></div>
      </div>
    </div>

    <!-- PUC-PR 2025/2026 -->
    <div class="edital-row" onclick="toggleEdital('puc26')" style="cursor:pointer">
      <div class="edital-year">2026</div>
      <div>
        <div class="edital-title">PUC-PR 2025/2026 · Pontifícia Universidade Católica do Paraná</div>
        <div class="edital-meta">Curitiba-PR · Hospital Universitário Cajuru · 81 vagas · 2 fases</div>
      </div>
      <div class="badge-status s-closed">Encerrado</div>
      <a href="https://www.pucpr.br" target="_blank" class="edital-link" onclick="event.stopPropagation()">PUC-PR →</a>
    </div>
    <div class="edital-detail" id="puc26">
      <div class="ed-grid">
        <div class="ed-item"><div class="ed-label">Inscrições</div><div class="ed-val">22/08/2025 a 22/09/2025</div></div>
        <div class="ed-item"><div class="ed-label">Taxa de inscrição</div><div class="ed-val">R$ 880,00 · Isenção disponível (ver edital)</div></div>
        <div class="ed-item"><div class="ed-label">Data da prova — 1ª fase</div><div class="ed-val">09/10/2025 · 100 questões (Acesso Direto) · 40 questões (Pré-Requisito)</div></div>
        <div class="ed-item"><div class="ed-label">Envio de currículo — 2ª fase</div><div class="ed-val">19 a 26/11/2025</div></div>
        <div class="ed-item"><div class="ed-label">Resultado final</div><div class="ed-val">Dezembro 2025</div></div>
        <div class="ed-item"><div class="ed-label">Vagas</div><div class="ed-val">81 vagas · Hospital Universitário Cajuru, Curitiba</div></div>
      </div>
    </div>

    <!-- UNIOESTE Cascavel 2025/2026 -->
    <div class="edital-row" onclick="toggleEdital('unioeste26')" style="cursor:pointer">
      <div class="edital-year">2026</div>
      <div>
        <div class="edital-title">UNIOESTE Cascavel 2025/2026 · Hospital Universitário do Oeste do Paraná</div>
        <div class="edital-meta">Cascavel-PR · HUOP · Processo seletivo via AMP · 32 vagas</div>
      </div>
      <div class="badge-status s-closed">Encerrado</div>
      <a href="https://www.unioeste.br/residencias" target="_blank" class="edital-link" onclick="event.stopPropagation()">UNIOESTE →</a>
    </div>
    <div class="edital-detail" id="unioeste26">
      <div class="ed-grid">
        <div class="ed-item"><div class="ed-label">Inscrições</div><div class="ed-val">04/09/2025 a 02/10/2025 · via site da AMP (amp.org.br)</div></div>
        <div class="ed-item"><div class="ed-label">Taxa de inscrição</div><div class="ed-val">R$ 615,00 (AMP) + R$ 500,00 (COREME UNIOESTE) · sem isenção</div></div>
        <div class="ed-item"><div class="ed-label">Data da prova</div><div class="ed-val">02/11/2025 às 14h — Universidade Positivo, Curitiba</div></div>
        <div class="ed-item"><div class="ed-label">Local da prova</div><div class="ed-val">Universidade Positivo — Rua Prof. Pedro Viriato Parigot de Souza, 5300, Curitiba</div></div>
        <div class="ed-item"><div class="ed-label">Resultado 1ª fase</div><div class="ed-val">25/11/2025 (via AMP)</div></div>
        <div class="ed-item"><div class="ed-label">Vagas</div><div class="ed-val">32 vagas · Acesso Direto e Pré-Requisito · Bolsa MEC: R$ 4.106,09/mês</div></div>
      </div>
    </div>

    <!-- ENAMED/ENARE 2025/2026 -->
    <div class="edital-row" onclick="toggleEdital('enare26')" style="cursor:pointer">
      <div class="edital-year">2026</div>
      <div>
        <div class="edital-title">ENAMED/ENARE 2025/2026 · 1ª Edição Nacional</div>
        <div class="edital-meta">Nacional · 19/10/2025 · 96.000+ candidatos · Gabarito definitivo: dezembro 2025</div>
      </div>
      <div class="badge-status s-closed">Encerrado</div>
      <a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enamed" target="_blank" class="edital-link" onclick="event.stopPropagation()">INEP →</a>
    </div>
    <div class="edital-detail" id="enare26">
      <div class="ed-grid">
        <div class="ed-item"><div class="ed-label">Inscrições</div><div class="ed-val">07/07/2025 a 18/07/2025</div></div>
        <div class="ed-item"><div class="ed-label">Data da prova</div><div class="ed-val">19/10/2025</div></div>
        <div class="ed-item"><div class="ed-label">Gabarito definitivo</div><div class="ed-val">Dezembro 2025</div></div>
        <div class="ed-item"><div class="ed-label">Candidatos</div><div class="ed-val">96.000+ inscritos — recorde histórico</div></div>
        <div class="ed-item"><div class="ed-label">Modalidades</div><div class="ed-val">Acesso Direto · Pré-Requisito · ENAMED como fase 1 objetiva</div></div>
        <div class="ed-item"><div class="ed-label">Organizador</div><div class="ed-val">INEP / FGV — 1ª edição do formato unificado ENAMED + ENARE</div></div>
      </div>
    </div>
  `;
});
