import './style.css';

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="secao-sobre">
        <h1>QUEM SOMOS NÓS?</h1>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

        <div className="info-container">
          <div className="info right">
            <img src="./assets/img/loja.png" alt="Imagem da Loja" />
            <div className="conteudo">
              <h2>NOSSAS FILIAIS</h2>
              <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
            </div>
          </div>
          <div className="info left">
            <img src="./assets/img/atendimento.png" alt="atendimento da Loja" />
            <div className="conteudo">
              <h2>ATENDIMENTO <br /> FLEXIVEL</h2>
              <p>Nossa equipe possui é treinada para te atender</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}