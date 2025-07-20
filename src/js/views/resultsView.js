import View from "./View.js";
import icons from "url:../../img/icons.svg";

class ResultView extends View {
 _parentElement = document.querySelector('.results');
  _errorMessage ="No recipe found for your query!"

 _generateDetails(){
    console.log(this._data);
    return this._data.map((reslut => this._generateDetailsPreview(reslut))).join ('');
 }

 _generateDetailsPreview(result){
    return ` <li class="preview">
            <a class="preview__link preview__link--active" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.imgUrl}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>`
 }
}

export default new ResultView();