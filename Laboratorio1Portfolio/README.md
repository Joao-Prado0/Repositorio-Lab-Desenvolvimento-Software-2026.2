Markdown
# 💻 Portfólio Profissional — João Prado Campos

> Website de portfólio profissional moderno e responsivo desenvolvido para a disciplina de Laboratório de Desenvolvimento de Software da PUC Minas.

---

## 📌 Descrição do Projeto

Este projeto consiste em um website de portfólio pessoal interativo com o objetivo de apresentar minha trajetória acadêmica e profissional, habilidades técnicas, histórico de projetos e canais de contato de forma clara e acessível.

- Objetivo: exibir perfil profissional, linha do tempo de projetos, histórico de experiências e disponibilizar canal direto de contato com formulário de envio por e-mail e links sociais.
- Público-alvo: recrutadores, desenvolvedores, professores e profissionais da área de tecnologia.

---

## 📄 Seções da Aplicação

O sistema conta com 4 páginas principais acessadas por meio do menu de navegação:

1. Sobre Mim (`/`): breve apresentação em português e inglês, destacando formação, áreas de atuação (Engenharia de Software e Desenvolvimento), interesses e objetivos profissionais.
2. Projetos (`/projetos`): linha do tempo dinâmica dos projetos desenvolvidos, contendo nome, descrição, tecnologias utilizadas, link para repositório do GitHub e mídia interativa (imagens/GIFs).
3. Detalhes Projetos(`/projetos\{nomeProjeto}`): páginas individuais de cada projeto que apresentam mais informações e detalhes sobre eles, além de uma exibição por meio de fotos, vídeos ou giphys
4. Experiências (`/experiencias`): espaço estruturado para relatar experiências profissionais, estágios, trabalhos freelance e participações em eventos técnicos.
5. Contato (`/contato`): página com ícones sociais clicáveis (e-mail, LinkedIn, GitHub e WhatsApp) e formulário interativo de mensagem com funcionalidade de envio direto por e-mail.

---

## 🛠️ Tecnologias e Dependências

### Core & Frameworks

- React.js (v18+): biblioteca principal para construção da interface de usuário.
- Vite: build tool e ambiente de desenvolvimento rápido.
- JavaScript (ES6+): linguagem base do projeto.

### Dependências & Bibliotecas

- react-router-dom: gerenciamento de rotas e navegação client-side SPA.
- lucide-react: conjunto de ícones para componentes e botões de contato.

### Ferramentas de Design & Versionamento

- Figma: prototipação de média e alta fidelidade da interface.
- Git & GitHub: controle de versão e hospedagem do código-fonte.
- ESLint: padronização e qualidade de código.

---

## 🎨 Protótipos (Wireframes & UI Design)

> 🔗 Link do Figma: [Clique aqui para acessar o protótipo no Figma](https://www.figma.com) *(substitua pelo seu link do Figma)*

### Layouts das Telas

![Wireframe / Protótipo - Sobre Mim](docs/PaginaSobreMim.png)

![Wireframe / Protótipo - Projetos](docs/PaginaProjetos.png)

![Wireframe / Protótipo - Detalhes Projetos](docs/PaginaDetalhesProjeto.png)

![Wireframe / Protótipo - Experiências](docs/PaginaExperiencia.png)

![Wireframe / Protótipo - Contato](docs/PaginaContato.png)

---

## 📁 Estrutura de Diretórios do Projeto

```text
portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/               # Imagens, GIFs e logotipos
│   ├── components/           # Componentes reutilizáveis (Navbar, Footer, Cards, etc.)
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/                # Páginas da aplicação
│   │   ├── Home.jsx          # Página Sobre Mim (PT/EN)
│   │   ├── Projects.jsx      # Página de Projetos (Timeline)
│   │   ├── Experience.jsx    # Página de Experiências
│   │   └── Contact.jsx       # Página de Contato + Formulário
│   ├── App.jsx               # Componente raiz com layout base
│   ├── main.jsx              # Ponto de entrada do React
│   ├── routes.jsx            # Configuração centralizada de rotas
│   └── index.css             # Estilos globais e resets CSS
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn instalado

### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
```

2. Acesse a pasta do projeto:

```bash
cd NOME_DO_REPOSITORIO
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra o navegador e acesse a URL exibida no terminal (geralmente http://localhost:5173).

---

## 🌐 Hospedagem na Nuvem

- Link de acesso (produção): https://seu-portfolio.vercel.app
- Status: em breve / a ser atualizado na Sprint 03

---

## 👤 Autor

João Prado Campos

Estudante de Engenharia de Software — PUC Minas