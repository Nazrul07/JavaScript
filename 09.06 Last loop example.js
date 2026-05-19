const students = [
    {name: 'Alice', score: 83},
    {name: 'Bob', score: 92},
    {name: 'Charlie', score: 78},
    {name: 'David', score: 88},
    {name: 'Eve', score: 90},
    {name: 'Frank', score: 59},
    {name: 'Grace', score: 80},
    {name: 'Heidi', score: 51},
    {name: 'Ivan', score: 75},
    {name: 'Judy', score: 58},
    {name: 'Karl', score: 97},
    {name: 'Leo', score: 48},
    {name: 'Mallory', score: 65},
    {name: 'Nina', score: 74},
    {name: 'Oscar', score: 55},
    {name: 'Peggy', score: 87},
    {name: 'Quentin', score: 52},
    {name: 'Rupert', score: 68},
    {name: 'Sybil', score: 64}
]

let highestScore = 0
let topStudent = ''
let lowestScore = 100
let bottomStudent = ''

for(let student of students){
    if(student.score > highestScore){
        highestScore = student.score
        topStudent = student.name
    }
    if(student.score < lowestScore){
        lowestScore = student.score
        bottomStudent = student.name
    }
}

let studentsWhoPassed = students.filter(student => student.score >= 70)
const averageScoreOfPassedStudents = (studentsWhoPassed.reduce((sum, student) => sum + student.score, 0)) / parseFloat(studentsWhoPassed.length)
let studentsWithA = students.filter(student => student.score >= 90)
let studentsWithB = students.filter(student => student.score >= 80 && student.score < 90)
let studentsWithC = students.filter(student => student.score >= 70 && student.score < 80)
let studentsWhoFailed = students.filter(student => student.score < 70)

console.log("Students who passed: ", studentsWhoPassed.map(s => s.name))
console.log("Top student:", topStudent, "with score:", highestScore)
console.log("Average score of passed students:", averageScoreOfPassedStudents.toFixed(2))
console.log("Passing rate: ", (studentsWhoPassed.length / students.length * 100).toFixed(2) + "%")
console.log("Students with A: ", studentsWithA.map(s => s.name))
console.log("Students with B: ", studentsWithB.map(s => s.name))
console.log("Students with C: ", studentsWithC.map(s => s.name))

console.log("Students who failed: ", studentsWhoFailed.map(s => s.name))
console.log("Bottom student:", bottomStudent, "with score:", lowestScore)