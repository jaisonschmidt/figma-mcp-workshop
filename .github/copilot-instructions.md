# Instruções para o GitHub Copilot

## Estrutura do Projeto

Este projeto segue uma arquitetura organizada com separação clara de responsabilidades.

## Variáveis CSS

As variáveis CSS globais estão localizadas em:
- **Arquivo**: `src/styles/variables.css`
- **Propósito**: Define cores, espaçamentos, tipografia e outras propriedades reutilizáveis em todo o projeto
- **Uso**: Importar e utilizar as variáveis CSS personalizadas (custom properties) definidas neste arquivo

## Estrutura de Componentes

### Organização
Cada componente deve ter sua própria pasta separada dentro de `src/components/`, seguindo este padrão:

```
src/components/
├── ComponentName/
│   ├── ComponentName.jsx     # Componente principal
│   ├── ComponentName.css     # Estilos específicos do componente
│   ├── index.js              # Export barrel para facilitar importações
│   └── README.md             # Documentação do componente (opcional)
```

### Exemplos Existentes
- `Button/` - Componente de botão com estilos próprios
- `NavBar/` - Componente de navegação com estilos próprios

### Boas Práticas
1. **Nomenclatura**: Use PascalCase para nomes de pastas e componentes
2. **Isolamento**: Cada componente deve ser auto-contido com seus próprios estilos
3. **Reutilização**: Utilize as variáveis CSS globais de `src/styles/variables.css`
4. **Export**: Use o arquivo `index.js` como ponto de entrada para facilitar importações
5. **Documentação**: Adicione um README.md quando o componente for complexo

### Como Criar um Novo Componente
1. Crie uma nova pasta em `src/components/` com o nome do componente
2. Adicione os arquivos necessários seguindo a estrutura padrão
3. Importe e use as variáveis CSS globais quando necessário
4. Exporte o componente através do `index.js`

## Conventional Commits

Todos os commits devem seguir o padrão de **Conventional Commits** para manter o histórico consistente e facilitar a geração automática de changelogs.

### Formato
```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

### Tipos Principais
- **feat**: Nova funcionalidade
- **fix**: Correção de bug
- **docs**: Mudanças na documentação
- **style**: Formatação, espaços em branco, etc. (não afeta o código)
- **refactor**: Refatoração de código (não adiciona funcionalidade nem corrige bugs)
- **test**: Adição ou correção de testes
- **chore**: Mudanças em ferramentas, configurações, dependências

### Exemplos
```
feat(components): adiciona componente Card com estilos responsivos
fix(navbar): corrige problema de alinhamento no menu mobile
docs: atualiza README com instruções de instalação
style: formata código seguindo padrões do ESLint
refactor(button): simplifica lógica de estados do componente
```

Esta estrutura garante organização, manutenibilidade e facilita a colaboração entre desenvolvedores.
