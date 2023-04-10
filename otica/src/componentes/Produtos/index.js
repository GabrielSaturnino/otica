import CardProdutos from '../Card-produtos';

export default function Produtos() {

  const content = [
    { title: "Óculos de grau", img: "./assets/img/oculos01.png", value: "R$ 500,00" },
    { title: "Óculos transition", img: "./assets/img/oculos02.png", value: "R$ 750,00" },
    { title: "Óculos de sol", img: "./assets/img/oculos03.png", value: "R$ 700,00" },
    { title: "Óculos infantil", img: "./assets/img/oculos04.png", value: "R$ 500,00" }
  ];

  return (
    <main>
      <section id="produtos">
        <h1>Nossos produtos</h1>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
        </p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

        <CardProdutos
          title={content.title}
          img={content.img}
          value={content.value}
        />

        <p>Todos os nossos produtos incluem:</p>

        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </section>
    </main>
  );
}