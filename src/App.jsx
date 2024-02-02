import "./App.css";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import Header from "./components/Header/Header";
import MainContant from "./components/MainContent/MainContant";
import Column from "./components/Column/Column";
import { cardList } from "./data";
import { useEffect, useState } from "react";

const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

export default function App() {
  const [cards, setCards] = useState(cardList);
const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  function addCard() {
    const newCard = {
      id: cards.length + 1,
      theme: "Copywriting",
      title: "Название задачи",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard])
  }
  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopBrowse />
        <PopNewCard />
        <Header addCard={addCard} />
        {isLoading ? "Загрузка..." : (<MainContant>
          {statusList.map((status) => (
            <Column
              title={status}
              key={status}
              cardList={cards.filter((card) => card.status === status)}
            />
          ))}
        </MainContant>)}
      </div>
    </>
  );
}
