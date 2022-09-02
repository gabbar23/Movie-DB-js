//constants
TIMEOUT_SEC=5
API_URL=`https://api.themoviedb.org/4/list/1?page=3&api_key=bfddf1ad8733dc4723d9d38c49112ff3`


//helper functions
export const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };


export const getJson = async function(url){
    try{
    const response = await Promise.race([fetch(url),timeout(TIMEOUT_SEC)]);
    const responseData = await response.json();
    if (!response.ok) throw new Error(`Api Error`);
      return responseData;
    }
    catch(err){
        throw err
    }}


export {TIMEOUT_SEC,API_URL}