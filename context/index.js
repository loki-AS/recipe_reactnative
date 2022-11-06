import React, { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"
import axios from 'axios';

export const Recipes = createContext()

export default function RecipeContext({children}) {
    const [user, setUser] = useState(null);
    const [watchlist, setWatchlist] = useState([])

    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState("");
    const [url, setUrl] = useState(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=s"
    );
  
    const foodSearch = async () => {
      const { data } = await axios.get(url);
      console.log(Object.keys(data));
      // console.log(data);
      setMeals(data.meals);
    };
  
    useEffect(() => {
      foodSearch();
    }, [url]);
  
    const searchRecipe = (evt) => {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    };
  
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) setUser(user);
          else setUser(null);
        });
      }, []);
      
    return (
    <Recipes.Provider value={{user, search, setSearch, meals, searchRecipe, watchlist}}>
        {children}
    </Recipes.Provider>
  )
}
