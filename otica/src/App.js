import './App.css';
import AppBar from './componentes/AppBar';
import Banner from './componentes/Banner';
import CardProdutos from './componentes/Card-produtos';
import Contato from './componentes/Contato';
import Footer from './componentes/Footer';
import Produtos from './componentes/Produtos';
import Sobre from './componentes/Sobre';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Banner />
      <Produtos />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
