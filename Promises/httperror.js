class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response= await fetch(url)
      if (response.status == 200) {
        let json= await response.json();
        return json;
      } else {
        throw new HttpError(response);
      }
}

// Ask for a user name until github returns a valid user
async function demoGithubUser() {
    let user;
    while(true){
        let name = "irumvag";

        try{
        user=await loadJson(`https://api.github.com/users/${name}`);
        break;
        }
        catch(err){
            if (err instanceof HttpError && err.response.status == 404) {
                console.log("No such user, please reenter.");
                return demoGithubUser();
            } else {
                throw err;
            }
        }
    }
    console.log("fullname:",user.name);
    return user;
}
let a=demoGithubUser();
console.log(Object.getOwnPropertyNames(Promise.resolve()),a.isFulFilled);
