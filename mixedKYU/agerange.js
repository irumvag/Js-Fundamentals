function datingRange(age){
  //return min-max
  return (age>14)?`${Math.floor(age/2+7)}-${Math.floor(2*(age-7))}`:`${Math.floor(age-0.10*age)}-${Math.floor(age+0.10*age)}`;
}