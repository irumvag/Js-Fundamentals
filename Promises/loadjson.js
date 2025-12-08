async function loadJson(url) {
  let promise=await fetch(url);
  let data=await promise.status;
  console.log(data);
      if(data==200)
      {
        return promise.json();
      } else {
        throw new Error(data);
      }
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(console.log); // Error: 404

  