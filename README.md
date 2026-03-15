# 🛒 Marketplace SaaS

Projeto acadêmico de um Marketplace SaaS desenvolvido com React no frontend
e Java no backend. Permite que usuários se cadastrem, naveguem por produtos
e realizem compras em uma plataforma moderna e responsiva.

---

## 🚀 Tecnologias

| Camada | Tecnologia |
|--------|------------|
| Frontend | React 19 + TypeScript 5.8 |
| Bundler | Vite 7 |
| UI | Material UI (MUI) v6 |
| Roteamento | React Router DOM v7 |
| Backend | Java (API REST) |

---

## ⚙️ Como rodar localmente

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/codeplusofc/marketplace-saas-web.git

# Entre na pasta
cd marketplace-saas-web

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

---

## 📁 Estrutura de Pastas

```
src/
├── pages/              # Páginas da aplicação (rotas)
├── components/         # Componentes reutilizáveis
│   └── checkout/       # Subcomponentes do checkout
├── shared-theme/       # Tema global MUI (não modificar)
│   └── customizations/ # Customizações de componentes MUI
├── services/           # Comunicação com a API Java
├── contexts/           # Contextos globais (autenticação, carrinho)
├── hooks/              # Custom hooks
├── types/              # Tipos TypeScript
└── utils/              # Funções utilitárias
```

---

## 📄 Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Login |
| `/cadastro` | Cadastro de usuário |
| `/checkout` | Checkout em 3 etapas |
| *(em breve)* | Catálogo de produtos |
| *(em breve)* | Carrinho |
| *(em breve)* | Área do cliente |
| *(em breve)* | Painel administrativo |

---

## 🔐 Perfis de Acesso

| Role | Permissões |
|------|------------|
| `ADMIN` | Gerenciar produtos, visualizar todos os pedidos |
| `USER` | Navegar, comprar e acompanhar próprios pedidos |

---

## 👥 Time

| Pessoa | Papel                   |
|--------|-------------------------|
| Werner | Orientador técnico      |
| Ingrid | Desenvolvedora frontend |

---

## 📋 Status do Projeto

🚧 Em desenvolvimento