import icon from "../../public/images/location-icon.png";

function Card(props) {
  return (
    <section className="card">
      <img className="card__img" src={props.card.img} alt="" />
      <div className="card__info">
        <div className="card__info__row1">
          <img src={icon} alt="" />
          <span className="card__info__row1__country">{props.card.location.country}</span>
          <a href={props.card.location.link} className="card__info__row1__link">View on Google Maps</a>
        </div>
        <div className="card__info__name">{props.card.location.name}</div>
        <div className="card__info__title">{props.card.text.title}</div>
        <div className="card__info__description">{props.card.text.description}</div>
      </div>
    </section>
  );
}

export default Card;
