# NavBar Component

Componente de navegação baseado no design do Figma.

## Estrutura

- **NavBar.jsx**: Componente principal
- **NavBar.css**: Estilos específicos do componente
- **index.js**: Exportação do componente

## Cores utilizadas

As cores foram extraídas do design do Figma e estão definidas como variáveis CSS:

- `--navbar-background`: #D9D9D9 (fundo da barra de navegação)
- `--navbar-logo-primary`: #FF4D00 (cor primária do logo)
- `--navbar-logo-secondary`: #391300 (cor secundária do logo)
- `--navbar-white`: #FFFFFF (cor branca)

## Dimensões

- `--navbar-height`: 86px
- `--navbar-logo-width`: 222px 
- `--navbar-logo-height`: 40px

## Uso

```jsx
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      {/* resto do conteúdo */}
    </>
  );
}
```

## Assets

O logo SVG está localizado em `src/assets/logo.svg` e foi extraído diretamente do design do Figma.
