
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import icons from 'url:../img/icons.svg';

const recipeContainer = document.querySelector('.recipe');


    const showRecipe =async function (){
  // loading data
    try {
    recipeView.renderSpinner();
  // get id
    const id = window.location.hash.slice(1);
    if (!id) return;
      console.log(recipeView);
      
  //  loading recipe
    await model.loadRecipe(id);
    const {recipe} =model.state
    // rendering data
    recipeView.render(recipe);
  }
 catch(err){
  alert(err)
 }
};

showRecipe();
window.addEventListener('hashchange',showRecipe)