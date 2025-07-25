import icons from '../../img/icons.svg';


export default class View {
     _data;


        render(data){
          console.log(data);
        if (!data || (Array.isArray(data) && data.length ===0)) return this.renderError(); 
        this._data =data;   
        const details =this._generateDetails();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',details)
    }
    _clear(){
        this._parentElement.innerHTML = ''
    }
      renderSpinner() {
           const markup = `<div class="spinner">
              <svg>
                <use href="${icons}#icon-loader"></use>
              </svg>
            </div>`;
            this._parentElement.innerHTML = '';
            this._parentElement.insertAdjacentHTML('afterbegin',markup) 
        }
    
    renderError(message = this._errorMessage){
      const markup =`<div class="error">
            <div>
              <svg>
                <use href="src/img/${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
          this._clear();
          this._parentElement.insertAdjacentHTML('afterbegin',markup)
    }
}