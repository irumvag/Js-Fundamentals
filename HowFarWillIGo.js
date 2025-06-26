function travel(totalTime, runTime, restTime, speed) {
    // todo...
   let distance=0;
   while (totalTime >= (runTime + restTime)) {
        distance += speed * runTime; // Distance covered in the running phase
        totalTime -= (runTime + restTime); // Decrease total time by the cycle time
    }
    if (totalTime >= runTime) {
        distance += speed * runTime; 
    } else if (totalTime > 0) {
        distance += speed * totalTime;
    }

    return distance;
}
console.log(travel(1000, 10, 127, 14));// 1120
