# Desafio Auvo QA - Automação de Testes E2E

## 📋 Sobre o Projeto

Este projeto é uma **Prova de Conceito (POC)** de automação de testes web desenvolvida para o **Desafio Auvo**, validando o fluxo completo de compra no site de e-commerce fictício [SauceDemo](https://www.saucedemo.com/). 

A automação foi implementada utilizando **Playwright** com **JavaScript** e arquitetura **Page Object Model (POM)**, cobrindo desde o login até a finalização do pedido.

## 🎯 Fluxo de Teste Implementado

1. **Login**: Autenticação com credenciais padrão
2. **Navegação**: Acesso à seção de produtos
3. **Seleção**: Escolha e validação de produto específico
4. **Validação**: Verificação de título, preço e descrição
5. **Carrinho**: Adição do produto e acesso ao carrinho
6. **Checkout**: Preenchimento de dados pessoais
7. **Finalização**: Confirmação e conclusão do pedido

## 🛠️ Tecnologias Utilizadas

- **Playwright** v1.55.0 - Framework de automação
- **JavaScript** - Linguagem de programação
- **Node.js** v18+ - Runtime de execução
- **Page Object Model** - Padrão de arquitetura

## 📁 Estrutura do Projeto

```
desafioauvoqa/
├── playwright/
│   ├── e2e/
│   │   ├── elements/           # Seletores centralizados
│   │   │   ├── cartElements.js
│   │   │   ├── checkoutCompleteElements.js
│   │   │   ├── checkoutElements.js
│   │   │   ├── checkoutOverviewElements.js
│   │   │   ├── headerElements.js
│   │   │   ├── loginElements.js
│   │   │   ├── productElements.js
│   │   │   └── productsElements.js
│   │   ├── pages/              # Page Object Model
│   │   │   ├── cartPage.js
│   │   │   ├── checkoutCompletePage.js
│   │   │   ├── checkoutOverviewPage.js
│   │   │   ├── checkoutPage.js
│   │   │   ├── headerPage.js
│   │   │   ├── loginPage.js
│   │   │   ├── productPage.js
│   │   │   └── productsPage.js
│   │   ├── support/            # Utilitários e validadores
│   │   │   └── validator.js
│   │   └── tests/              # Casos de teste
│   │       └── e2e.spec.js
│   └── fixtures/               # Dados de teste
│       ├── checkout.json
│       ├── checkoutComplete.json
│       ├── login.json
│       ├── products.json
│       └── url.json
├── playwright.config.js        # Configuração do Playwright
├── package.json
└── README.md
```

## 🚀 Pré-requisitos

- **Node.js** versão 18 ou superior
- **npm**
- **Git**

## ⚙️ Configuração e Instalação

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/desafioauvoqa.git
cd desafioauvoqa
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Instalar navegadores do Playwright
```bash
npx playwright install
```

### 4. Verificar instalação
```bash
npx playwright --version
```

## 🧪 Execução dos Testes

### Comandos principais:

```bash
# Executar todos os testes
npm test

# Executar em modo headed (visível)
npm run test:headed

# Executar testes específicos
npx playwright test tests/e2e.spec.js

# Executar em navegador específico
npx playwright test --project="Desktop Chrome"

# Gerar e visualizar relatório
npx playwright show-report
```

### Comandos avançados:

```bash
# Executar com debug
npx playwright test --debug

# Executar com trace habilitado
npx playwright test --trace=on

# Executar apenas testes que falharam
npx playwright test --last-failed

# Executar testes em paralelo (configurado para 32 workers)
npx playwright test --workers=4
```

## 🏗️ Arquitetura e Padrões

### Page Object Model (POM)
- **Separação de responsabilidades**: Lógica de UI separada dos testes
- **Reutilização**: Métodos compartilhados entre testes
- **Manutenibilidade**: Alterações centralizadas por página

### Elementos Centralizados
- Seletores organizados por página em arquivos específicos
- Facilita manutenção quando há mudanças na UI
- Evita duplicação de seletores

### Fixtures (Dados de Teste)
- Dados organizados em arquivos JSON separados
- Facilita manutenção e permite diferentes ambientes
- Dados sensíveis externalizados

## 📊 Configuração Multi-Browser

O projeto está configurado para executar em múltiplos dispositivos:

### Desktop:
- Chrome, Firefox, Safari

### Mobile:
- iPhone 13/14 (Portrait/Landscape)
- Pixel 5, Galaxy S9+ (Portrait/Landscape)

### Tablet:
- iPad Air, Galaxy Tab S4

## 🔍 Funcionalidades Implementadas

### Validações Automatizadas:
- **Login**: Verificação de autenticação
- **Navegação**: Validação de URLs corretas
- **Produto**: Comparação de dados (nome, descrição, preço)
- **Carrinho**: Verificação de adição de produtos
- **Checkout**: Validação de fluxo completo
- **Finalização**: Confirmação de mensagens de sucesso

### Recursos Avançados:
- **Validator Helper**: Classe para validações de URL e API
- **Dados Dinâmicos**: Armazenamento e comparação de informações de produtos
- **Steps Organizados**: Testes estruturados com describe/steps
- **Relatórios HTML**: Geração automática de relatórios detalhados

## 🐛 Tratamento de Erros e Robustez

- **Timeouts configurados**: 30s para testes, 10s para ações
- **Waits explícitos**: Aguarda elementos específicos
- **Validações de estado**: Verifica URLs e elementos antes de prosseguir
- **Relatórios detalhados**: Screenshots e traces em caso de falha

## 📝 Decisões de Implementação

### Escolhas Arquiteturais:
1. **Page Object Model**: Escolhido para facilitar manutenção e reutilização
2. **Elementos Centralizados**: Seletores organizados por contexto de página
3. **Fixtures JSON**: Dados externalizados para flexibilidade
4. **Validator Helper**: Classe utilitária para validações comuns

### Seletores Utilizados:
- **Prioridade para `data-test`**: Mais estáveis que classes CSS
- **Fallback para classes**: Quando `data-test` não disponível
- **Locators dinâmicos**: `hasText` para seleção por conteúdo

## 🔧 Melhorias Futuras

- [ ] Integração com CI/CD
- [ ] Testes de performance
- [ ] Adaptação automático a múltiplos ambientes (dev, staging, prod)
- [ ] Implementação de massa de dados e seleções inteligentes
- [ ] Coleta de logs importantes para debug

---

**Desenvolvido para o Desafio Auvo QA** | **Playwright + JavaScript + POM**