import './style.css';

export default function ListaContato() {
  return (
    <div className="lista-contato">
      <div className="first">
        <h2>Contato</h2>
        <ul type="none">
          <li className="loc1">Nova Iguaçu, RJ</li>
          <li className="loc2">(21) 9999-9999</li>
          <li className="loc3">contato@oticavida.com</li>
        </ul>
      </div>

      <div className="second">
        <h2>Nossas Redes Sociais</h2>
        <ul type="none">
          <li className="loc4">/OticaVida</li>
          <li className="loc5">@oticavidarj</li>
          <li className="loc6">@oticavidarj</li>
        </ul>
      </div>
    </div>
  );
}