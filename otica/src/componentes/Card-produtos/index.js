export default function CardProdutos({ title, img, value }) {
  return (
    <div className="card-produto">
      <h1>{title}</h1>
      <img src={img} alt="Produto da ótica" />
      <p>{value}</p>
    </div>
  );
}