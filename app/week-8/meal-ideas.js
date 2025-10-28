"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdea(apiIngredient) {
        try {
            const mealFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${apiIngredient}`);
            const mealData = await mealFetch.json();
            console.log(mealData);
            setMeals(mealData.meals);
        } catch (error) {
            console.log(error);
        }

    }

    function Meal(mealName){
        if(mealName){
            return(<p>{mealName}</p>)
        }else{
            return(<p>No meals available with ingredient: {ingredient}</p>)
        }
    }

    function loadMealIdeas() {
        fetchMealIdea(ingredient);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);


    return (
        <div className="self-start">
            <h1 className="text-4xl p-5 font-bold">Meal Ideas for: "{ingredient}"</h1>
            <div className="outline-2 outline-neutral-700 bg-neutral-900 rounded-2xl p-3 m-5">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* <p>{meals.meals[0].strMeal}</p> */}
                    {
                        meals == null
                        ?
                        <p>no meals available with ingredient: {ingredient}!</p>
                        : 
                        meals.map((meal) => {
                            return(<p key={meal.idMeal} className="rounded-2xl bg-neutral-800 p-2 pb-4">{meal.strMeal}</p>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}