const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  console.log(student.name, "Scored " + student.marks);
}
