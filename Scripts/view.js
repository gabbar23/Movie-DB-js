class View{
    _parentElemet=document.querySelector('.row');
    _data;

    renderData(data){
        this._data=data;

    }

    _generateMarkup(){
        return `<div class="col">
        <a href="https://swop.link/cool" target=_blank" class="profile"> 
            <h2 class="profile__name">Anita Simmons</h2>
           <p>Founder</p>
           <img alt="Anita Simmons" src="https://image.tmdb.org/t/p/original${this._data.img_url}" />
         </a> 
      </div>`
    }
}