const students = [
    {
        id: 1,
        name: "Meghana",
        course: "CSE",
        marks: 85
    },
    {
        id: 2,
        name: "Anita",
        course: "IT",
        marks: 90
    },
    {
        id: 3,
        name: "Rahul",
        course: "ECE",
        marks: 78
    }
];

students.forEach(function(student) {
    console.log(
        "ID: " + student.id +
        ", Name: " + student.name +
        ", Course: " + student.course +
        ", Marks: " + student.marks
    );
});