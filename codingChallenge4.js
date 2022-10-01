let dolphinAverageScore=(96+108+89)/3;
let kolasAverageScore=(88+91+110)/3;
console.log('part 1');
if(dolphinAverageScore>kolasAverageScore){
    console.log(`Dolphin team has scored ${dolphinAverageScore} more than Kolas team ${kolasAverageScore}!!!
    hence the winner is Dolphin`);
}else if(dolphinAverageScore==kolasAverageScore){
    console.log(`Dolphin team scores ${dolphinAverageScore} same as  Kolas team score ${kolasAverageScore}!!!
    hence it is draw`)
}else{
    console.log(`Kolas team has scored ${dolphinAverageScore} more than Dolphin team ${kolasAverageScore}!!!
    hence the winner is Kolas`);
}
console.log('part 2');
let bonus1DolphinAvgScore=(97+102+112)/3;
let bonus1KolasAvgScore=(109+95+123)/3;
let minimumScore=100;
if(bonus1DolphinAvgScore>bonus1KolasAvgScore && bonus1DolphinAvgScore>=minimumScore){
    console.log(`Dolphin team has scored ${bonus1DolphinAvgScore} more than Kolas team ${bonus1KolasAvgScore}!!!
    hence the winner is Dolphin`);
}else if(bonus1DolphinAvgScore==bonus1KolasAvgScore){
    console.log(`Dolphin team scores ${bonus1DolphinAvgScore} same as  Kolas team score ${bonus1KolasAvgScore}!!!
    hence it is draw`)
}else if(bonus1KolasAvgScore>=minimumScore){
    console.log(`Kolas team has scored ${bonus1KolasAvgScore} more than Dolphin team ${bonus1DolphinAvgScore}!!!
    hence the winner is Kolas`);
}
console.log('part 3');
let bonus2DolphinAvgScore=(123+102+82)/3;
let bonus2KolasAvgScore=(123+102+82)/3;
console.log(bonus2DolphinAvgScore,bonus2KolasAvgScore)
if(bonus2DolphinAvgScore>bonus2KolasAvgScore && bonus2DolphinAvgScore>=minimumScore){
    console.log(`Dolphin team has scored ${bonus2DolphinAvgScore} more than Kolas team ${bonus2KolasAvgScore}!!!
    hence the winner is Dolphin`);
}else if(bonus2KolasAvgScore>bonus2DolphinAvgScore && bonus2KolasAvgScore>=minimumScore){
    console.log(`Kolas team has scored ${bonus2KolasAvgScore} more than Dolphin team ${bonus2DolphinAvgScore}!!!
    hence the winner is Kolas`);
}else if(bonus2DolphinAvgScore==bonus2KolasAvgScore && bonus2DolphinAvgScore>=minimumScore&&bonus2KolasAvgScore>=minimumScore ){
    console.log(`Both team wins`)
}
else{
    console.log('There is no winner')
}