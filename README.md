# GitHub Copilot Figma MCP Project

Um projeto React moderno com Tailwind CSS e React Bootstrap, configurado com Vite para desenvolvimento rápido e eficiente.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces de usuário
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first
- **React Bootstrap** - Componentes Bootstrap para React
- **ESLint** - Linting para qualidade de código

## 📦 Dependências Principais

### Produção
- `react` & `react-dom` - Core do React
- `react-bootstrap` - Componentes Bootstrap para React
- `bootstrap` - Framework CSS responsivo

### Desenvolvimento
- `tailwindcss` & `@tailwindcss/postcss` - CSS utility-first
- `vite` & `@vitejs/plugin-react` - Build tools
- `eslint` - Linting e qualidade de código
- `autoprefixer` - Compatibilidade CSS entre navegadores

## 🛠️ Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Executar linting
npm run lint
```

## 🎨 Features Implementadas

- ✅ **Tailwind CSS** configurado e funcionando
- ✅ **React Bootstrap** com componentes prontos
- ✅ **Integração híbrida** - Use ambos os frameworks juntos
- ✅ **Design responsivo** - Mobile-first
- ✅ **Hot reload** - Desenvolvimento rápido com Vite
- ✅ **Linting** - ESLint configurado para React

## 📋 Estrutura do Projeto

```
src/
├── App.jsx          # Componente principal com exemplos
├── main.jsx         # Ponto de entrada da aplicação
└── index.css        # Estilos globais (Tailwind + Bootstrap)
```

## 📚 Documentação Detalhada

Para informações completas sobre todas as dependências e configurações, consulte:
- [DEPENDENCIES.md](./DEPENDENCIES.md) - Documentação detalhada das dependências

## 🎯 Exemplo de Uso

O projeto inclui exemplos de como usar Tailwind CSS e React Bootstrap juntos:

```jsx
// Componente Bootstrap com styling Tailwind
<Card className="shadow-lg border-0">
  <Card.Header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <h5 className="mb-0 font-semibold">Título do Card</h5>
  </Card.Header>
  <Card.Body>
    <Button variant="primary" className="transition-transform hover:scale-105">
      Botão com efeitos Tailwind
    </Button>
  </Card.Body>
</Card>
```

## 🔧 Configurações

- **Vite**: Configuração padrão com plugin React
- **Tailwind**: Configurado para escanear arquivos JSX/TSX
- **PostCSS**: Configurado com Tailwind e Autoprefixer
- **ESLint**: Regras para React e React Hooks

---

Este projeto demonstra a integração perfeita entre Tailwind CSS e React Bootstrap em um ambiente de desenvolvimento moderno com Vite.
