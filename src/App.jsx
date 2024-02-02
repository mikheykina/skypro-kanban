import "./App.css";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import Header from "./components/Header/Header";
import MainContant from "./components/MainContent/MainContant";
import Column from "./components/Column/Column";

export default function App() {
  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopBrowse />
        <PopNewCard />
        <Header />
        <MainContant>
          <Column title={"Без статуса"} />
          <Column title={"Нужно сделать"} />
          <Column title={"В работе"} />
          <Column title={"Тестирование"} />
          <Column title={"Готово"} />
        </MainContant>
      </div>
    </>
  );
}
