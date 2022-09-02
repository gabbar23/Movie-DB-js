import 'regenerator-runtime/runtime';
import * as helper from './helper.js'

const state={
    moviesDta:{},
    page: 1,
    resultsPerPage: 9,
}


export const getData=async function(){
    const data=await helper.getJson(helper.API_URL);
    console.log(data);
    state.moviesDta = data.results.map(res => {
        return {
          id: res.id,
          title: res.title,
          overview: res.overview,
          image: res.poster_path,
          rating:res.vote_average
        };
    })
    // console.log(state.moviesDta);
}

export const pagesData = function (page = state.page) {
    state.page = page;
    const start = (page - 1) * state.resultsPerPage;
    const end = page * state.resultsPerPage;
  
    return state.moviesDta.slice(start, end);
  };

export {state}

