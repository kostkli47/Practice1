import {usersInfoArray} from "./userInfo";
import {IUsers, usersArray} from "./users";

interface IResult{
    name:string;
    position:string;
    age:number;
    gender:string;
}

function getUsersJobPositions(usersArray:IUsers[]):IResult[] {
    const resultArr = usersArray.map( 
        function (v,i){
         return {
            name: v.name,
            position: usersInfoArray[i].organization.position,
            age: usersInfoArray[i].age,
            gender: v.gender
             }
        }
    );
    return resultArr;
} 
const usersPositions = getUsersJobPositions(usersArray);
console.log(usersPositions); 

