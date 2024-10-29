import styles from "./MealCard.module.css";
import { NavLink } from "react-router-dom";

const MealCard = ({ data }) => {
  return (
    <div className={styles.container}>
      {!data || data.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          Please enter a search term!
        </div>
      ) : (
        data.map((item) => (
          <div className={`${styles.meal_card} card`} key={item.idMeal}>
            <div className="card-body">
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className={styles.mealImage}
              />
              <h6 className={`${styles.cardTitle} card-title`}>
                {item.strMeal}
              </h6>
              <NavLink to={`/${item.idMeal}`}>
                <button className={`${styles.CardButton} btn btn-warning`}>
                  Get Reciepe
                </button>
              </NavLink>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MealCard;
