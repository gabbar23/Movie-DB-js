'strict'

TIMEOUT_SEC=5
const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };


const getJson = async function(url){
    try{
    const response = await Promise.race([fetch(url),timeout(TIMEOUT_SEC)]);
    const responseData = await response.json();
    if (!response.ok) throw new Error(`Api Error`);
      return responseData;
    }
    catch(err){
        throw err
    }}


    const getData=async function(){
    const data =await getJson(`https://api.themoviedb.org/4/list/2?page=1&api_key=bfddf1ad8733dc4723d9d38c49112ff3`)

    console.log(data.results);
    }

    getData()