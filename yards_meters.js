const convertToMeters=(yards)=>{
    return yards*0.9144
}

let convertedMeters =convertToMeters(inputYards)

const createMessage=(yards,meters)=>{
    let message;
    const numYards=yards*1

    if (numYards===1760){
        message="That is as long as a mile"
    }else if(numYards===100){
        message="That is as long as a football field"
    }else if(numYards===26){
        message="That is as long as a tennis court"
    }else if(numYards===10){
        message="That is as long as a first down"
    }else {
        message="Not applicable"
    }
    return `We have converted ${yards} into ${meters}`
}

let inputYards = prompt ('enter a number, we will convert that number from yards to meters');
let output=createMessage(convertedMeters,inputYards)
console.log(output)
