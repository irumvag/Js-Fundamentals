let first=new Promise(function(resolve) {
  console.log('first');
  //console.log(this);
  resolve();
  console.log('second');
  //console.log(this)
}).then(function() {
    //console.log(this);
    console.log('third');
});
