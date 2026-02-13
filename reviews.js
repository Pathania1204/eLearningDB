db.reviews.insertMany([
  {
    _id: "r1",
    courseId: "course1",
    studentId: "u2",
    rating: 5,
    comment: "Excellent course!",
    createdAt: new Date("2026-02-10")
  },
  {
  _id: "r2",
  courseId: "course2",
  studentId: "u5",
  rating: 4,
  comment: "Very informative.",
  createdAt: new Date("2026-02-11")
  }

])

db.reviews.find()

// Read: courseid and rating and comment
db.reviews.find(
  {},
  { courseId: 1, rating: 1, comment: 1, _id: 0 }
)

// Update: Modify review rating
db.reviews.updateOne(
  { _id: "r1" },
  { $set: { rating: 4 } }
)
// Edit review comment
db.reviews.updateOne(
  { _id: "r2" },
  { $set: { comment: "Very detailed and helpful course." } }
)

// Delete: Remove reviews with rating less than 3
// db.reviews.deleteMany(
//   { rating: { $lt: 3 } }
// )//in my case no one is there 

//to see changes
db.reviews.find()

// Validation: Reviews collection
db.runCommand({
  collMod: "reviews",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["rating"],
      properties: {
        rating: {
          bsonType: "int",
          minimum: 1,
          maximum: 5
        }
      }
    }
  }
})

db.reviews.insertOne({
  rating: 10
})
