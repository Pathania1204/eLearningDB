db.categories.insertMany([ //inserting categories of the courses
  {
    _id: "c1",
    name: "Programming"
  },
  {
    _id: "c2",
    name: "Design"
  },
  {
    _id: "c3",
    name: "Marketing"
  }
])

db.categories.find() //to view all categories

// Read: only names
db.categories.find(
    {},
    {_id:0,name:1}
)
// Find category by name
db.categories.find(
  { name: "Programming" }
)


// Update: Change category name from "Design" to "Designing"
db.categories.updateOne(
  { _id: "c2" },
  { $set: { name: "Designing" } }
)
//Check changes
db.categories.find()