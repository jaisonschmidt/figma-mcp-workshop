import { Container, Button as BootstrapButton } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  const handleButtonClick = (message) => {
    alert(message);
  };

  return (
    <>
      <NavBar />
      <Container className="py-5">
        <h1>Projeto de Copilot com MCP!</h1>
        
        <div className="mb-4">
          <h2>Componente Bootstrap Original:</h2>
          <BootstrapButton>Ja temos alguns componentes!</BootstrapButton>
        </div>

        <div className="mb-4">
          <h2>Novo Componente Button (baseado no Figma):</h2>
          <div className="d-flex flex-wrap gap-3">
            <Button onClick={() => handleButtonClick('Botão principal clicado!')}>
              Veja mais
            </Button>
            
            <Button 
              variant="secondary" 
              onClick={() => handleButtonClick('Botão secundário clicado!')}
            >
              Cancelar
            </Button>
            
            <Button 
              size="small" 
              onClick={() => handleButtonClick('Botão pequeno clicado!')}
            >
              Pequeno
            </Button>
            
            <Button 
              size="large" 
              onClick={() => handleButtonClick('Botão grande clicado!')}
            >
              Grande
            </Button>
            
            <Button disabled>
              Desabilitado
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
