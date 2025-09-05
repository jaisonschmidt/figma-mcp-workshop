# Documentação das Dependências

## 📦 Dependências de Produção (dependencies)

### React & React DOM
- **react**: ^19.1.1
  - Biblioteca principal do React para construção de interfaces de usuário
  - Versão mais recente com as funcionalidades mais atuais

- **react-dom**: ^19.1.1
  - Biblioteca para renderização do React no DOM
  - Necessária para aplicações web React

### Bootstrap & React Bootstrap
- **bootstrap**: ^5.3.8
  - Framework CSS mais popular para desenvolvimento responsivo
  - Fornece componentes, grid system e utilitários CSS
  - Versão 5.x com as funcionalidades mais modernas

- **react-bootstrap**: ^2.10.10
  - Componentes Bootstrap reimplementados especificamente para React
  - Fornece componentes como `Button`, `Card`, `Alert`, `Badge`, `Container`, etc.
  - Integração nativa com React (sem jQuery)

## 🛠️ Dependências de Desenvolvimento (devDependencies)

### Build Tools & Bundler
- **vite**: ^7.1.2
  - Build tool moderna e rápida para desenvolvimento web
  - Servidor de desenvolvimento com hot reload
  - Bundler otimizado para produção

- **@vitejs/plugin-react**: ^5.0.0
  - Plugin oficial do Vite para suporte ao React
  - Habilita JSX, Fast Refresh e otimizações específicas do React

### CSS & Styling
- **tailwindcss**: ^4.1.13
  - Framework CSS utility-first para estilização rápida
  - Classes utilitárias para styling responsivo
  - Configuração customizável através do `tailwind.config.js`

- **@tailwindcss/postcss**: ^4.1.13
  - Plugin PostCSS oficial do Tailwind CSS (versão separada)
  - Necessário para processar as diretivas `@tailwind` no CSS
  - Solução para compatibilidade com versões mais recentes

- **postcss**: ^8.5.6
  - Processador CSS para transformações de código
  - Utilizado pelo Vite e Tailwind para processar CSS

- **autoprefixer**: ^10.4.21
  - Plugin PostCSS para adicionar prefixos de vendors automaticamente
  - Garante compatibilidade entre diferentes navegadores

### Linting & Code Quality
- **eslint**: ^9.33.0
  - Ferramenta de linting para identificar problemas no código JavaScript/React
  - Configuração para manter consistência e qualidade do código

- **@eslint/js**: ^9.33.0
  - Configurações padrão do ESLint para JavaScript

- **eslint-plugin-react-hooks**: ^5.2.0
  - Plugin ESLint específico para validar regras dos React Hooks
  - Garante o uso correto de hooks como `useState`, `useEffect`, etc.

- **eslint-plugin-react-refresh**: ^0.4.20
  - Plugin ESLint para compatibilidade com Fast Refresh do React
  - Otimiza o desenvolvimento com hot reload

- **globals**: ^16.3.0
  - Definições de variáveis globais para ESLint
  - Evita erros de linting para variáveis globais conhecidas

### TypeScript Support
- **@types/react**: ^19.1.10
  - Tipos TypeScript para React
  - Fornece autocompletar e verificação de tipos (mesmo em projetos JS)

- **@types/react-dom**: ^19.1.7
  - Tipos TypeScript para React DOM
  - Complementa os tipos do React para funcionalidades DOM

## ⚙️ Arquivos de Configuração Criados

### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `postcss.config.js`
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### `src/index.css`
```css
@import 'bootstrap/dist/css/bootstrap.min.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🚀 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run lint` - Executa linting do código
- `npm run preview` - Preview do build de produção

## 🎯 Integração das Tecnologias

### Tailwind CSS + React Bootstrap
- **Compatibilidade**: Ambos funcionam juntos sem conflitos
- **Flexibilidade**: Use componentes Bootstrap com classes Tailwind para styling adicional
- **Performance**: Bootstrap para componentes complexos, Tailwind para styling rápido
- **Exemplo**: `<Button className="transition-transform hover:scale-105">` (Bootstrap + Tailwind)

### Vite + React + PostCSS
- **Development**: Hot reload instantâneo para mudanças em CSS e JSX
- **Build**: Otimização automática e tree-shaking
- **CSS Processing**: Tailwind e Bootstrap processados automaticamente

## 📊 Estatísticas do Projeto

- **Total de dependências**: 4 de produção + 13 de desenvolvimento
- **Tamanho estimado**: ~206 packages após instalação
- **Frameworks CSS**: 2 (Tailwind + Bootstrap)
- **Build tool**: Vite (moderna e rápida)
- **Linting**: ESLint configurado para React

## 🔧 Comandos de Instalação Utilizados

```bash
# Tailwind CSS e dependências
npm install -D tailwindcss postcss autoprefixer

# Plugin PostCSS do Tailwind (correção)
npm install -D @tailwindcss/postcss

# React Bootstrap
npm install react-bootstrap bootstrap
```

## 📝 Notas Importantes

1. **@tailwindcss/postcss**: Plugin separado necessário devido à mudança na arquitetura do Tailwind CSS
2. **Bootstrap CSS**: Importado diretamente no `index.css` para evitar conflitos de ordem
3. **Vite**: Configuração zero necessária, funciona out-of-the-box
4. **ESLint**: Pré-configurado com regras para React e Hooks
5. **TypeScript**: Tipos incluídos mesmo em projeto JavaScript para melhor DX
