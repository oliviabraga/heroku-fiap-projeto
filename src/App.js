import logo from './fiap1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo"/>
        <p className="corFrase">
          Projeto <code className="corLetra">heroku-fiap-projeto</code> em produção.
        </p>                
      </header>
    </div>
  );
}

export default App;
