const electiveOne = {
  courseCode: 'ELEN4010',
  yearOffered: 4
}
const electiveTwo = {
  courseCode: 'ELEN4001',
  yearOffered: 4
}
const electiveThree = {
  courseCode: 'ELEN4020',
  yearOffered: 4
}
const electiveFour = {
  courseCode: 'ELEN4017',
  yearOffered: 4
}
let students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3,
    electives: [electiveOne, electiveTwo, electiveFour]
  },
  {
    name: 'Jade',
    studentNumber: 678345,
    yearOfStudy: 4,
    electives: [electiveTwo, electiveThree, electiveFour]
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  }
]

// electives = [electiveOne, electiveTwo, electiveThree]

const studentModified = students.filter(students => students.electives.filter(elective => elective.courseCode === 'ELEN4010'))

console.log(studentModified)
