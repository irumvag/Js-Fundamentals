const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.timeout = 5000;
//xhr.responseType = 'json';

// Set event handlers BEFORE send()
xhr.onload = function() {
  if (xhr.status != 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    // xhr.response is already parsed (don't use .json())
    const data = JSON.parse(xhr.responseText);
    console.log(`Done, got ${data.length} users`);
    console.log(data);
  }
};

xhr.onerror = function() {
  console.log("Request failed");
};

xhr.ontimeout = function() {
  console.log("Request timed out");
};

// Note: onprogress won't work with this package in Node.js

// NOW send the request
xhr.send();