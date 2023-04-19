// import ArticlesList from "./ArticlesList";
import CreateMeal from "./CreateMeal";
import MealList from "./MealList";
import MealsCategoriesList from "./MealsCategoriesList";
import RandomMeal from "./RandomMeal";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}/>
          <Route path="/create-meal" element={<CreateMeal />}/>
          <Route path="/meal-list" element={<MealList />}/>
          <Route path="/random-meal" element={<RandomMeal />}/>
          <Route path="/meals-categories" element={<MealsCategoriesList />}/>
        </Routes>
      </BrowserRouter>

    </>
      // <ArticlesList />
      // <MealList />
      // <MealsCategoriesList />
      // <RandomMeal />
      // <CreateMeal />
  );
}

export default App;
