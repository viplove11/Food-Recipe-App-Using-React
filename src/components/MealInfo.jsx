import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./MealInfo.module.css";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const MealInfo = () => {
  const navigate = useNavigate();
  const [mealInstruction, setMealInstruction] = useState();

  const getDataByMealId = async () => {
    const API_MealId = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const getData_Id = await API_MealId.json();
    setMealInstruction(getData_Id.meals[0]);
  };

  const { mealId } = useParams();

  if (mealInstruction != "") {
    getDataByMealId();
  }

  return (
    <>
      {!mealInstruction ? (
        <div><b>Loading...</b></div>
      ) : (
        <>
          <h1 className={`${styles.heading}`}>
            "{mealInstruction.strMeal} <span>Reciepe</span>"
          </h1>
          <div className={`${styles.mealInfo} container`}>
            <img
              src={mealInstruction.strMealThumb}
              className={`${styles.mealInfoImage}`}
            />
            <div className="details">
                <span className={`${styles.detailsSpan}`}>Reciepe Instructions:</span> 
              <p className={`${styles.mealInfoPara}`}>
                {mealInstruction.strInstructions}
              </p>

              <button
                className={`${styles.mealInfoButton} btn btn-primary`}
                onClick={() => navigate("/")}
              >
                <IoChevronBackCircle size={30} />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MealInfo;
