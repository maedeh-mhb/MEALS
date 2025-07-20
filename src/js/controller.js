
import * as model from './model.js';
import paginationView from './views/paginationView.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import serachView from './views/serachView.js';


    const showRecipe =async function (){
  // loading data
    
    try {
  // get id
    const id = window.location.hash.slice(1);
    console.log(id)
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

const controlSearchResults = async function(){
  try {
    const query= serachView.getQuery();
    if(!query) return;
    await model.loadSearchResults(query);
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search)

  }
  catch(err){
    console.log(err);
  }
}
controlSearchResults();

showRecipe();

const controlPagination =function (goto) {
  resultsView.render(model.getSearchResultsPage(goto));
  paginationView.render(model.state.search);
  console.log(model.state.search,goto);
  
}
 
const controlServing = function(updateTo){
  console.log("serving");
  model.updateServing(updateTo);
  recipeView.render(model.state.recipe)
}

const init = function(){
  recipeView.addHandlerRender(showRecipe);
  serachView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerUpdateServings(controlServing)
};

init()