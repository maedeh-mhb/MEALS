import icons from 'url:../../img/icons.svg';
import View from './View.js';
class RecipeView extends View{
    _parentElement = document.querySelector('.recipe');
    _errorMessage ="we could not find any recipe.please try again!"

    addHandlerRender(handler) {
      window.addEventListener('hashchange',handler);

    }

    addHandlerUpdateServings (handler) {
      this._parentElement.addEventListener('click',function(e) {
        const btn = e.target.closest('.btn--increase-servings');
        if(!btn) return;
        const upDateTo = +btn.dataset.updateTo;
        if(upDateTo >0 ) handler(upDateTo);
      })
    }

    _generateDetails(){
        return `<figure class="recipe__fig">
                  <img src=${this._data.imgUrl} alt="Tomato" class="recipe__img" />
                  <h1 class="recipe__title">
                    <span>${this._data.title}</span>
                  </h1>
                </figure>
        
                <div class="recipe__details">
                  <div class="recipe__info">
                    <svg class="recipe__info-icon">
                      <use href="${icons}#icon-clock"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">${this._data.time}</span>
                    <span class="recipe__info-text">minutes</span>
                  </div>
                  <div class="recipe__info">
                    <svg class="recipe__info-icon">
                      <use href="${icons}#icon-users"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                    <span class="recipe__info-text">servings</span>
        
                    <div class="recipe__info-buttons">
                      <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings - 1}">
                        <svg>
                          <use href="${icons}#icon-minus-circle"></use>
                        </svg>
                      </button>
                      <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings + 1}">
                        <svg>
                          <use href="${icons}#icon-plus-circle"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
        
                  <div class="recipe__user-generated">
                    <svg>
                      <use href="${icons}#icon-user"></use>
                    </svg>
                  </div>
                  <button class="btn--round">
                    <svg class="">
                      <use href="${icons}#icon-bookmark-fill"></use>
                    </svg>
                  </button>
                </div>
                 <div class="recipe__ingredients">
                  <h2 class="heading--2">Recipe ingredients</h2>
                  <ul class="recipe__ingredient-list">
                ${this._data.ingredients.map((ing)=>{
                  return `
                    <li class="recipe__ingredient">
                      <svg class="recipe__icon">
                        <use href="${icons}#icon-check"></use>
                      </svg>
                      <div class="recipe__quantity">${ing.quantity ? ing.quantity : ''}</div>
                      <div class="recipe__description">
                        <span class="recipe__unit">${ing.unit}</span>
                        ${ing.description}
                      </div>
                    </li>
                 `
                }).join('')} </ul>
                </div>
               
                <div class="recipe__directions">
                  <h2 class="heading--2">How to cook it</h2>
                  <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                    directions at their website.
                  </p>
                  <a
                    class="btn--small recipe__btn"
                    href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
                    target="_blank"
                  >
                    <span>Directions</span>
                    <svg class="search__icon">
                      <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                  </a>
                </div>`
    }
};

export default new RecipeView();
