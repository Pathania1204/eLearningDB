//1: Create unique index on email field
db.users.createIndex(
  { email: 1 },
  { unique: true }
) //email_1

//2: Compound index on courseId and studentId
db.enrollments.createIndex(
  { courseId: 1, studentId: 1 },
  { unique: true }
) //courseId_1_studentId_1

//3: Use explain()
db.users.find({
    email: "aman@gmail.com" 
}).explain("executionStats")
//use to show performance improvement
//before indexing => stage: "COLLSCAN"
//after indexing => stage: "IXSCAN" 
//use to show performance improvement

db.users.getIndexes()
db.enrollments.getIndexes()