import styles from "./MainPage.module.css";
import SearchBar from "./SearchBar";
import MealCard from "./MealCard";
import logo from "../assets/AppLogo.png";
import { useState } from "react";

const MainPage = () => {
  const [searchedItem, setsearchedItem] = useState("");
  const [data, setData] = useState();

  const handleInputChangeEvent = (event) => {
    setsearchedItem(event.target.value);
  };

  const myFun = async () => {
    if (searchedItem == "") {
      alert("Please Enter Dish Name 😊");
    } else {
      const getAPI = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedItem}`
      );
      const API_jsonData = await getAPI.json();
      setData(API_jsonData.meals);
      setsearchedItem("");
    }
  };
  return (
    <>
      <div className={`${styles.mainPage} container`}>
        <div className="navbar">
          <img src={logo} alt="app-logo" className={`${styles.appLogo}`} />
        </div>
        <SearchBar
          onClickHandle={myFun}
          onInputChange={(event) => {
            handleInputChangeEvent(event);
          }}
          searchedItem={searchedItem}
        ></SearchBar>
      </div>
      <MealCard data={data}></MealCard>
    </>
  );
};

export default MainPage;
