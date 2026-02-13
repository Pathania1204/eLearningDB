db.lessons.insertMany([
  {
    _id: "l1",
    courseId: "course1",
    title: "Introduction to React",
    videoUrl: "react-intro.com",
    duration: 15,
    order: 1
  },
  {
    _id: "l2",
    courseId: "course1",
    title: "React Components",
    videoUrl: "react-components.com",
    duration: 20,
    order: 2
  },
  {
    _id: "l3",
    courseId: "course2",
    title: "MongoDB Basics",
    videoUrl: "mongo-basics.com",
    duration: 25,
    order: 1
  },
  {
  _id: "l4",
  courseId: "course3",
  title: "UI Basics",
  videoUrl: "ui-basics.com",
  duration: 18,
  order: 1
 }
])

db.lessons.find() //to show all lessons in the courses

// Read: courseId ,title and duration only for course 1 as a condition
db.lessons.find(
  { courseId: "course1" },
  { courseId: 1, title: 1, duration: 1, _id: 0 }
)
// Find lessons longer than 20 minutes
db.lessons.find(
  { duration: { $gt: 20 } }
)


// Update: Change lesson duration
db.lessons.updateOne(
  { _id: "l1" },
  { $set: { duration: 20 } }
)
// Change lesson title
db.lessons.updateOne(
  { _id: "l2" },
  { $set: { title: "Advanced React Components" } }
)

// Delete: Remove lessons of a specific course
// db.lessons.deleteMany(
//   { courseId: "course3" }
// )

//to check changes
db.lessons.find()
