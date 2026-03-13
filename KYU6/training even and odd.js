function evenOrOdd(n) {
  let res=n%2==0?'Even':'Odd';
  evenOrOdd[n]=res;
  return res;
}
let handle={
    get(target,prop){
    console.log(evenOrOdd(prop));
    return target[prop]
  }
}
evenOrOdd=new Proxy(evenOrOdd,handle)

