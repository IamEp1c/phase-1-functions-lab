function distanceFromHqInBlocks(blocks){
    if (blocks > 42){
        return blocks - 42
    } else {
        return 42 - blocks
    }
}
// distanceFromHqInBlocks();

function distanceFromHqInFeet(blocks){
   return distanceFromHqInBlocks(blocks) * 264;

}
// distanceFromHqInFeet();

function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }



// distranceTravelledInFeet(argument1, argument2) 

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination) // needs 2 parameters here 
    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance <= 2500){
        return 25; 
    } else {
        return 'cannot travel that far'
    }
}



// calculatesFarePrice(5, 10)
