function getAverage(scores) {

    let sum = 0;

    for(const score of scores){
        sum += score;
    }

    return sum/scores.length;
}


function getGrade(score) {
        if(score === 100){
            return "A++";
        }
        else if(score <= 99 && score >= 90){
            return "A";
        }
        else if(score <= 89 && score >= 80){
            return "B";
        }
        else if(score <= 79 && score >= 70){
            return "C";
        }
        else if(score <= 69 && score >= 60){
            return "D";
        }
        else{
            return "F";
        }
}

function hasPassingGrade(score) {
  if(score>= 60){
    return true;
  } 
  else{
    return false;
  }
}

function studentMsg(totalScores, studentScore) {

    if(hasPassingGrade(studentScore)){
        return "Class average: " + getAverage(totalScores) +". Your grade: " + getGrade(studentScore)+ ". You passed the course.";
    }
    else{
        return "Class average: " + getAverage(totalScores) +". Your grade: " + getGrade(studentScore)+ ". You failed the course.";
    }

}

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));

// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));