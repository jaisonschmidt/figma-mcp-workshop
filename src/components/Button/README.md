# Componente Button

## Descrição
Componente Button baseado no design do Figma com variações de tamanho e estilo.

## Design Original
- Cor de fundo: #DD6F1B (laranja)
- Cor do texto: #FFFFFF (branco)
- Largura: 207px
- Altura: 77px
- Border radius: 10px
- Fonte: Inter, 20px, weight 400

## Props

### children (obrigatório)
- **Tipo**: ReactNode
- **Descrição**: Conteúdo do botão (texto, ícones, etc.)

### onClick
- **Tipo**: Function
- **Descrição**: Função chamada ao clicar no botão

### type
- **Tipo**: 'button' | 'submit' | 'reset'
- **Padrão**: 'button'
- **Descrição**: Tipo do botão HTML

### variant
- **Tipo**: 'primary' | 'secondary'
- **Padrão**: 'primary'
- **Descrição**: Variação visual do botão

### size
- **Tipo**: 'small' | 'default' | 'large'
- **Padrão**: 'default'
- **Descrição**: Tamanho do botão

### disabled
- **Tipo**: Boolean
- **Padrão**: false
- **Descrição**: Se o botão está desabilitado

### className
- **Tipo**: String
- **Descrição**: Classes CSS adicionais

## Exemplos de Uso

```jsx
import Button from './components/Button';

// Botão básico
<Button onClick={handleClick}>
  Veja mais
</Button>

// Botão secundário
<Button variant="secondary" onClick={handleClick}>
  Cancelar
</Button>

// Botão pequeno
<Button size="small" onClick={handleClick}>
  OK
</Button>

// Botão desabilitado
<Button disabled onClick={handleClick}>
  Enviar
</Button>
```

## Variáveis CSS
As cores e dimensões são definidas no arquivo `src/styles/variables.css`:
- `--button-background`
- `--button-text-color`
- `--button-hover-background`
- `--button-active-background`
- `--button-width`
- `--button-height`
- `--button-border-radius`
- `--button-font-size`
- `--button-font-weight`
- `--button-font-family`
