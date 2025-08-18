let students = [
  { id: 1, name: 'Alice', grade: 9 },
  { id: 2, name: 'Bob', grade: 10 },
  { id: 3, name: 'Charlie', grade: 8.5 }
];

exports.getAll = () => students;
exports.getById = (id) => students[id]
exports.create = (student) => {students.push(student)}
exports.update = (id, updatedData) => {
  const studentIndex = students.findIndex(student => student.id === id);
  students[studentIndex] = { ...students[studentIndex], ...updatedData };
  return students;
};
exports.remove = (id) => {
    students = students.filter(student => student.id !== id);
    return students;
}