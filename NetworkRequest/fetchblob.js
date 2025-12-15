
let response= await fetch("");
let blob= await response.blob();

let img=document.createElement('img');
img.style="position:fixed;top:10px;left:20px";
document.body.append(img);

img.src=URL.createObjectURL(blob);

setTimeout(()=>{
    img.remove();
    URL.revokeObjectURL(img.src);
    },3000);

/*
Fetch users from GitHub
Create an async function getUsers(names), that gets an array of GitHub logins, fetches the users from GitHub and returns an array of GitHub users.

The GitHub url with user information for the given USERNAME is: https://api.github.com/users/USERNAME.

There’s a test example in the sandbox.

Important details:

There should be one fetch request per user.
Requests shouldn’t wait for each other. So that the data arrives as soon as possible.
If any request fails, or if there’s no such user, the function should return null in the resulting array.
*/