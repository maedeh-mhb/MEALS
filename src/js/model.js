import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";
export const state ={
    recipe :{}
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