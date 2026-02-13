db.users.insertMany([ //inserting 6 users with ids
  {
    _id: "u1",
    name: "Aman",
    email: "aman@gmail.com",
    password: "123456",
    role: "instructor",
    createdAt: new Date("2026-01-15"),
    isVerified: true
  },
  {
    _id: "u2",
    name: "Garima",
    email: "garima@gmail.com",
    password: "123456",
    role: "student",
    createdAt: new Date("2026-01-10"),
    isVerified: true
  },
  {
    _id: "u3",
    name: "Ananya",
    email: "ananya@gmail.com",
    password: "123456",
    role: "student",
    createdAt: new Date("2026-01-20"),
    isVerified: true
  },
  {
    _id: "u4",
    name: "Akhil",
    email: "akhil@gmail.com",
    password: "123456",
    role: "instructor",
    createdAt: new Date("2026-02-06"),
    isVerified: true
  },
  {
    _id: "u5",
    name: "Yash",
    email: "yash@gmail.com",
    password: "123456",
    role: "student",
    createdAt: new Date("2026-02-09"),
    isVerified: true
  },
  {
    _id: "u6",
    name: "Anupama",
    email: "anupama@gmail.com",
    password: "123456",
    role: "student",
    createdAt: new Date("2026-01-31"),
    isVerified: true
  }
])

db.users.find() //to view all the users those are inserted

// Read: only name, email and role
db.users.find(
  {},
  { name: 1, email: 1, role: 1, _id: 0 }
)

// Read: only name and isVerified
db.users.find(
  {},
  { name: 1, isVerified: 1, _id: 0 }
)
// Find verified students only
db.users.find(
  { role: "student", isVerified: true },
  { name: 1, email: 1, _id: 0 }
)


// Update: Change verification status of a specific student
db.users.updateOne(
  { _id: "u2" }, //user2
  { $set: { isVerified: false } }
)
// Change role from student to instructor
db.users.updateOne(
  { _id: "u3" }, //user3
  { $set: { role: "instructor" } }
)

// Delete: Remove a specific user by ID
db.users.deleteOne(
  { _id: "u6" }
)

db.users.find() // checking the updated

// Validation: Users collection
db.runCommand({
  collMod: "users",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "role"],
      properties: {
        name: { bsonType: "string" },
        email: { bsonType: "string" },
        role: { enum: ["student", "instructor"] },
        isVerified: { bsonType: "bool" }
      }
    }
  }
})
