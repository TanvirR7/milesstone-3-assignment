//1st_problem_solve_feetToMile

function feetToMile(feet){
    if(feet<=0){
        return "Error! Distance can not be negative or 0!"
    }
        else{
            var mile = feet/5280;
              return mile;
            }
        
}

    
var resultMile = feetToMile(900000);
console.log(resultMile);



//2nd_problem_solve_woodCalculator

function woodCalculator(numOfChair, numOfTable, numOfBed){
    var woodForchair = numOfChair * 2;
    var woodForTable = numOfTable * 4;
     var woodForBed  = numOfBed   * 7;
           var total = woodForchair + woodForTable + woodForBed;  
           return total;  
    }   


var result = woodCalculator(4, 3, 5 )
console.log(result);


//3rd soletion
function brickCalculator(floorNumber){
    if (floorNumber <=10 && floorNumber >=1){
        let brickNumber = floorNumber * 15000;
        return brickNumber;
    }
    else if (floorNumber > 10 && floorNumber <= 20) {
        let brickNumber = ((floorNumber - 10) * 12000) + 150000;
        return brickNumber;
    }
    else if (floorNumber > 20){
        let brickNumber =((floorNumber - 20) * 10000) + 270000;
        return brickNumber;
    }
    else {
        return "Something went wrong!";
    }
};
let result1 = brickCalculator(42);
console.log(result1);
let result2 = brickCalculator(26);
console.log(result2);
let result3 = brickCalculator(35);
console.log(result3);
let result4 = brickCalculator(-4);
console.log(result4);


//4th soletion

function tinyFriend(friend){
    let singleFriend =friend[0];
    for(let i = 0; i < friends.length; i++){
        let element = friends[i];
        if (element < singleFriend){
            singleFriend = element ;
        }
    }
    return singleFriend;
}

let friends =["Hobirul", "Shihab", "Jam", "Rashed", "Sorif" , "Mannik"];
let results = tinyFriend(friends);
console.log(results)
