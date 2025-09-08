let id=Symbol('id')
let obj={
    'name':'Gad',
    'class':"year 2",
    [id]:223000471,
}
console.log('object:',obj);
console.log('object keys:',Object.keys(obj));
console.log('getownpropertysymbols',Object.getOwnPropertySymbols(obj));
console.log('reflect own keys:',Reflect.ownKeys(obj));
let user=Object.assign({},obj);
console.log('assign object clone:',user);
console.log('------------------------------');

for(let key in user){
    console.log(user[key]);
}
let range={from:0,to:5};
for(num of range){
    console.log(num);
}