
function getAverage(arrayOfScores) {
  let total = 0;

  for (const score of arrayOfScores) {
    console.log(total);
    total = total + score;
  }

  return total / arrayOfScores.length
}


function getGrade(studentScore) {
  if (studentScore === 100) {
    return "A+";
  }
  else if (studentScore >= 90) {
    return "A";
  }
  else if (studentScore >= 80) {
    return "B";
  }
  else if (studentScore >= 70) {
    return "C";
  }
  else if (studentScore >= 60) {
    return "D";
  }
  else {
    return "F";
  }
}

function hasPassingGrade(studentScore) {
  if (getGrade(studentScore) === "F") {
    return false;
  }
  else {
    return true;
  }
}

function studentMsg(arrayOfScores, studentScore) {

  const classAverage = getAverage(arrayOfScores);
  const studentGrade = getGrade(studentScore)

  if (hasPassingGrade(studentScore) === true) {
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed the course.`
  }
  else {
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed the course.`
  }

}
