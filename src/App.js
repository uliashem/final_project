import { useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsIngredients from './MyMealsIngredients';
import { v4 as uuid } from 'uuid';



function App() {
  const addMeal = () => {
    const newMeal = {
      title: "today is ...",
      id: uuid(),
      mealForADay: ""
    }
    setMealPlans([newMeal, ...mealPlans])
  }

  const [mealPlans, setMealPlans] = useState([]);
  const [selectedDay, setSelectedDay] = useState(false);

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({id}) => id!==mealId));
  }

  return (
    <div className="App">
      <MyList 
      addMeal={addMeal} 
      mealPlans={mealPlans} 
      deleteDay={deleteDay} 
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      />
      <MyMealsIngredients/>
      
    </div>
  );
}

export default App;
