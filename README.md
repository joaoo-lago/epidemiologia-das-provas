# Epidemiologia das Provas

Análise estratégica de provas de residência médica — AMP-PR.

## Estrutura do projeto

```
epidemiologia-das-provas/
├── index.html          ← Página principal (notícias, editais, membros)
├── mapa.html           ← Mapa da Prova interativo (AMP-PR 2017–2026)
├── assets/
│   ├── style.css       ← Estilos do site
│   ├── app.js          ← Lógica de navegação, login e modal
│   └── editais.js      ← Conteúdo dos editais (fácil de atualizar)
└── README.md
```

## Como publicar no GitHub Pages

### 1. Criar repositório no GitHub
- Acesse github.com → New repository
- Nome: `epidemiologia-das-provas`
- Marque como **Public**
- Clique em **Create repository**

### 2. Fazer upload dos arquivos
- Clique em **uploading an existing file**
- Arraste todos os arquivos desta pasta
- Commit: "Primeiro deploy"

### 3. Ativar GitHub Pages
- Vá em **Settings** → **Pages**
- Source: **Deploy from a branch**
- Branch: **main** · Pasta: **/ (root)**
- Clique em **Save**

### 4. Acessar o site
Após ~2 minutos, o site estará disponível em:
`https://SEU-USUARIO.github.io/epidemiologia-das-provas`

## Credenciais de demonstração (remover antes do lançamento real)

| Perfil   | E-mail           | Senha      |
|----------|------------------|------------|
| Admin    | admin@edp.com    | admin2026  |
| Membro   | membro@edp.com   | edp2026    |

⚠️ **Antes de lançar para clientes reais**, substituir o objeto `USERS` em `assets/app.js`
por autenticação via [Supabase](https://supabase.com) (gratuito até 50k usuários).

## Domínio personalizado (opcional)

1. Compre um domínio em [registro.br](https://registro.br) (ex: `epidemiologiadasprovas.com.br` ~R$40/ano)
2. No GitHub Pages → **Custom domain** → insira o domínio
3. No painel do registro.br, aponte o DNS para o GitHub:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   SEU-USUARIO.github.io
   ```
4. Marque **Enforce HTTPS** no GitHub Pages
