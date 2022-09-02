class View{
    _parentElemet=document.querySelector('.row');
    _data;


    
    renderData(data){
        this._data=data;
        const markUp=this._data.map(data=>this._generateMarkup(data)).join('');
        
        this._parentElemet.insertAdjacentHTML('afterbegin', markUp)

    }

    _generateMarkup(data){
        return `<div class="col-4 ">
        <a href="https://swop.link/cool" target=_blank" class="profile"> 
            <h2 class="profile__name">${data.title}</h2>
           <p>Rating:${data.rating}r</p>
           <img alt="Anita Simmons" src="https://image.tmdb.org/t/p/original${data.image}" />
         </a> 
      </div>`
    }
}

export default new View();