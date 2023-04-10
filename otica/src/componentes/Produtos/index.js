import CardProdutos from '../Card-produtos';
import './style.css';

export default function Produtos() {
  const content = [
    {
      id: 0, title: "Óculos de grau", img: "./assets/img/oculos01.png",
      value: "R$ 500,00"
    },

    {
      id: 1, title: "Óculos transition", img: "./assets/img/oculos02.png",
      value: "R$ 750,00"
    },

    {
      id: 2, title: "Óculos de sol", img: "./assets/img/oculos03.png",
      value: "R$ 700,00"
    },

    {
      id: 3, title: "Óculos infantil", img: "./assets/img/oculos04.png",
      value: "R$ 500,00"
    }
  ];

  return (

    <section id="produtos">
      <h1>NOSSOS PRODUTOS</h1>
      <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
      </p>
      <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

      <div className="container-card">
        {content.map(item => (
          < CardProdutos
            key={item.id}
            title={item.title}
            img={item.img}
            value={item.value}
          />
        ))}
      </div>

      <div className="lista">
        <p>Todos os nossos produtos incluem:</p>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
}