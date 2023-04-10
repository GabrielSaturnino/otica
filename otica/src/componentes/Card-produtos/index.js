import './style.css';

export default function CardProdutos({ title, img, value }) {
  return (
    <div className="card-produto">
      <h1>{title}</h1>
      <img src={img} alt="" />
      <p>{value}</p>
    </div>
  );
}