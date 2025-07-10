
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import icons from 'url:../img/icons.svg';

const recipeContainer = document.querySelector('.recipe');


    const showRecipe =async function (){
  // loading data
    
    try {
  // get id
    const id = window.location.hash.slice(1);
    if (!id) return;
      console.log(recipeView);
      
  //  loading recipe
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    const {recipe} =model.state
    // rendering data
    recipeView.render(recipe);
  }
    catch(err){
     recipeView.renderError()
    }
};

showRecipe();
const init = function(){
  recipeView.addHandlerRender(showRecipe)
};

init()