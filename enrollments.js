db.enrollments.insertMany([
  {
    _id: "e1",
    studentId: "u2",
    courseId: "course1",
    enrolledAt: new Date("2026-02-13"),
    paymentId: "p1"
  },
  {
    _id: "e2",
    studentId: "u5",   // use real student
    courseId: "course2",
    enrolledAt: new Date("2026-02-12"),
    paymentId: "p2"
  }
])


db.enrollments.find() // viewing enrollments

// Read: only studentId and courseid
db.enrollments.find(
  {},
  { studentId: 1, courseId: 1, _id: 0 }
)

// Update: Change enrollment date
db.enrollments.updateOne(
  { _id: "e1" },
  { $set: { enrolledAt: new Date() } }
)

// Delete: Remove a specific enrollment record
// db.enrollments.deleteOne(
//   { _id: "e2" }
// ) only e.g

//see changes
db.enrollments.find()
