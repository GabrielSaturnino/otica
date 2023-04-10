import './style.css';

export default function AppBar() {
  return (
    <header>
      <img src="./assets/img/logo.png" alt="Logo da loja" />
      <nav>
        <a href="#produtos">PRODUTOS</a>
        <a href="#sobre">SOBRE</a>
        <a href="#contato">CONTATO</a>
      </nav>
    </header>
  );
}