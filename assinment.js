function feetToMile(feet){
   if(feet >=0){
    var mile = 0.000189394 * feet;
   }
   else{
       console.log("Enter a valid value.")
     } 
     return mile;
}

var resultFeet = feetToMile(12);
console.log("Length in mile is",resultFeet);

function woodCalcutor(chair, table, bed){
    if(chair >=0 && table >=0 && bed >=0)
    {
      var totalWoodForChair = 1 * chair;
      var totalWoodForTable = 3 * table;
      var totalWoodForBed = 5 * bed;
      var totalWood = totalWoodForChair + totalWoodForTable + totalWoodForBed
    }
    else{
        console.log("Enter valid values.")
      } 
      return totalWood;
}

var resultTotalWood = woodCalcutor(1,1,1);
console.log("Total wood needed :",resultTotalWood);

function beickCalcutor(numberOfFloor){
    if(numberOfFloor >= 0)
    {
      if(numberOfFloor>10 && numberOfFloor <=20)
      {
          var numberOfBrick = (10 * 15 * 1000) + ((numberOfFloor-10) * 12 * 1000);
      }
      else if(numberOfFloor>20)
      {
        var numberOfBrick = (10 * 15 * 1000) + (10 * 12 * 1000) + ((numberOfFloor-20) * 10 * 1000);
      }
      else
      {
          var numberOfBrick = numberOfFloor * 15 * 1000;
      }
    }
    else
    {
        console.log("Enter a valid value.")
    }
    return numberOfBrick;
  
}
var resultTotalBrick = beickCalcutor(17);
console.log("Total brick needed:",resultTotalBrick);


function tinyFriend(friendList)
{  var min = friendList[0].length;
    for(var i=0; i <friendList.length; i++)
    {
        var size = friendList[i].length;
        if(min >= size && friendList[i] != " ")
        {
            var tinyName = friendList[i];
        }
    }
    return tinyName;
}

var friendList =["Abul" , "Mofiz", "Roy","Karim", " " ,"Rahim"];
var nameOfMyFriend = tinyFriend(friendList);
console.log("Smallest name of my friend is", nameOfMyFriend);
