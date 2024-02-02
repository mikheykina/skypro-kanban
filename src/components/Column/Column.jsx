import Card from "../Card/Card";

export default function Column({ title, cardList }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cardList.map((card) => <Card topic={card.theme} title={card.title} key={card.id}/>)}
      </div>
    </div>
  );
}
