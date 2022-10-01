const  heightMark=95;
const  weightMark=1.88;
const  heightJohn=85;
const  weightJohn=1.76;

const  bmiMark=(weightMark/heightMark**2)*100000;
const  bmiJohn=(weightJohn/heightJohn**2)*100000;

const  markHigherBMI=bmiMark>bmiJohn;
console.log(bmiMark,bmiJohn,markHigherBMI,`🤞🤞🤞`);

if(bmiMark>bmiJohn){
    console.log(`Marks BMI ${bmiMark} is greater than John's BMI ${bmiJohn}`)
}
else{
    console.log(`John's BMI ${bmiJohn} is greater than Marks's BMI ${bmiMark}`)
}
