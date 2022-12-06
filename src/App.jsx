import Header from "./components/Header";
import Card from "./components/Card";
import cards from "./assets/data/cards";

function App() {
  const cardList = cards.map(card => {
    return <Card key={card.id} card={card} />
  })
  return (
    <main className="app">
      <Header />
      <section className="app__card-list">
        {cardList}
      </section>
    </main>
  );
}

export default App;
