import ListaContato from '../Lista-contatos/index';
import './style.css';

export default function Contato() {
  return (
    <section id="contato">
      <h1>Fale conosco</h1>
      <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

      <ListaContato />
    </section>
  );
}