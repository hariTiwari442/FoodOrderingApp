import MealsSummary from "./MealsSummary";
import AvailabelMeals from "./AvailableMeals";
import { Fragment } from "react";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvailabelMeals></AvailabelMeals>
    </Fragment>
  );
};

export default Meals;
