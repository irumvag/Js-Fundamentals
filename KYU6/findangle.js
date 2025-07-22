function getAngle(t) {
  let time=t.split(':').map(Number);
  if(time.includes(NaN)||time[0]>23||time[1]>60) return "Invalid input";
  let H = (time[0]>12) ? time[0]-12:time[0] , M=time[1];
  let degree=Math.abs(H*30 + M*.5-M*6)
  console.log(time,H,M);
  return degree>180?360-degree:degree;
}