// https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886
const recipeContainer = document.querySelector('.recipe');
const showRecipe = async function() {
    // loading data
    try {
        const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
        const data = await res.json();
        console.log(res, data);
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        let { recipe } = data.data;
        recipe = {
            id: recipe.id,
            time: recipe.cooking_time,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: recipe.servings,
            url: recipe.source_url,
            title: recipe.title,
            imgUrl: recipe.image_url
        };
        // rendering data
        const details = `<figure class="recipe__fig">
          <img src=${recipe.imgUrl} alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.time}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="src/img/icons.svg#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>
         <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
        ${recipe.ingredients.map((ing)=>{
            return `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity ? ing.quantity : ''}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li>
         `;
        }).join('')} </ul>
        </div>
       
        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`;
        recipeContainer.innerHTML = '';
        recipeContainer.insertAdjacentHTML('afterbegin', details);
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=js-2.62406edb.js.map
