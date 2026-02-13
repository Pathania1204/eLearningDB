db.courses.insertMany([
  {
    _id: "course1",
    title: "React Basics",
    description: "Learn fundamentals of React",
    price: 999,
    instructorId: "u1",
    categoryId: "c1",
    rating: 4.5,
    totalStudents: 0,
    level: "Beginner"
  },
  {
    _id: "course2",
    title: "Advanced MongoDB",
    description: "Deep dive into MongoDB",
    price: 1999,
    instructorId: "u4",
    categoryId: "c1",
    rating: 4.8,
    totalStudents: 0,
    level: "Advanced"
  },
  {
    _id: "course3",
    title: "UI/UX",
    description: "Complete design course",
    price: 1099,
    instructorId: "u4",
    categoryId: "c2",
    rating: 4.2,
    totalStudents: 0,
    level: "Intermediate"
  }
])

db.courses.find() //to view all 3 courses inserted 
 
// Read: only title, description and price
db.courses.find(
  {},
  { title: 1, description: 1, price: 1, _id: 0 }
)
// Find courses with rating greater than 4.5
db.courses.find(
  { rating: { $gt: 4.5 } }
)

// Update: Increase totalStudents count after new enrollment
db.courses.updateOne(
  { _id: "course1" }, //only for course1
  { $inc: { totalStudents: 1 } }
)
// Modify course price
db.courses.updateOne(
  { _id: "course3" },  //only for course3
  { $set: { price: 749 } }
)

// Delete: Remove a specific course
// db.courses.deleteOne(
//   { _id: "course3" }
// )


// checking updated thing
db.courses.find()