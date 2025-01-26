function Card({ image, title, description }) {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {image && <img src={image} alt={title} className="card-image" />}
    </div>
  );
}

export default Card;
