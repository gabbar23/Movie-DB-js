import 'regenerator-runtime/runtime';
import * as helper from './helper.js'

state={
    moviesDta:{}
}


export const getData=async function(){
    const data=await helper.getJson(helper.API_URL);
    
    state.moviesDta = data.results.map(res => {
        return {
          id: res.id,
          title: res.title,
          overview: res.overview,
          image: res.poster_path,
          rating:res.vote_average
        };
    })
    console.log(state);

}

// adult: false
// backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg"
// genre_ids: (3) [28, 12, 878]
// id: 634649
// media_type: "movie"
// original_language: "en"
// original_title: "Spider-Man: No Way Home"
// overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
// popularity: 1180.683
// poster_path: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
// release_date: "2021-12-15"
// title: "Spider-Man: No Way Home"
// video: false
// vote_average: 8
// vote_count: 14887


