# Footer Component

## Descrição
Componente de rodapé da aplicação baseado no design do Figma.

## Props
Este componente não recebe props.

## Estrutura
- Fundo cinza (#D9D9D9) - reutilizando a variável do navbar
- Texto centralizado "Todos os direitos reservados."
- Tipografia Inter, peso 400, tamanho 20px

## Uso
```jsx
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Footer />
    </div>
  );
}
```

## Variáveis CSS
Utiliza as variáveis CSS definidas em `src/styles/variables.css`:
- `--footer-background`
- `--footer-width`
- `--footer-height`
- `--footer-font-family`
- `--footer-font-weight`
- `--footer-font-size`
- `--footer-line-height`
- `--footer-text-color`
