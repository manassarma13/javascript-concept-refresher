
const myStudents = [
    {
        firstName: 'Batman',
        grade: 86
    },
    {
        firstName: 'Superman',
        grade: 97
    },
    {
        firstName: 'Green Lantern',
        grade: 72
    },
    {
        firstName: 'Martian Manhunter',
        grade: 90
    }
];

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    console.log(`${student.firstName} scored ${student.grade}`);
}

// Averaging all grades in myStudents array
let total = 0; //total will hold the sum of all grades

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    total += student.grade; //add each grade to total
}
console.log('Average grade is ', total / myStudents.length);