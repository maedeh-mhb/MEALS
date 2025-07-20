import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state ={
    recipe :{},
    search :{
      query:'',
      results:[],
      resultsPerPage:10,
      page:1
    }
};

export const loadRecipe = async function(id) {
    try {
          const data = await getJSON(`${API_URL}/${id}`);
            const {recipe} = data.data;
            state.recipe ={
              id:recipe.id,
              time:recipe.cooking_time,
              ingredients:recipe.ingredients,
              publisher:recipe.publisher,
              servings:recipe.servings,
              url:recipe.source_url,
              title:recipe.title,
              imgUrl:recipe.image_url
            }
    }
    catch (err){
      console.log(err);
     throw err;
    }
}


export const loadSearchResults = async function (query) {
  try{
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data.data.recipes);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id:rec.id,
        title: rec.title,
        publisher :rec.publisher,
        imgUrl: rec.image_url
      }
    })
    
  }
  catch(err){
    throw err
  }
};

export const getSearchResultsPage = function(page = state.search.page){
  state.search.page =page;
  const start= (page -1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start,end);
}

export const updateServing= function(newServing){
  state.recipe.ingredients.forEach(ing=>{
    ing.quantity = (ing.quantity * newServing) / state.recipe.servings      
    // 6 * 2 /4
  });
  state.recipe.servings = newServing;
}