db.payments.insertMany([
  {
    _id: "p1",
    studentId: "u2",
    amount: 799,
    paymentStatus: "Completed",
    transactionId: "TXN001",
    createdAt: new Date("2026-01-12")
  },
  {
    _id: "p2",
    studentId: "u5",
    amount: 999,
    paymentStatus: "Completed",
    transactionId: "TXN002",
    createdAt: new Date("2026-02-10")
  }
])

db.payments.find()

// Read: studentId ,amunt, paymentStatus
db.payments.find(
  {},
  { studentId: 1, amount: 1, paymentStatus: 1, _id: 0 }
)

// Update: Change payment status to Completed
db.payments.updateOne(
  { _id: "p1" },
  { $set: { paymentStatus: "Completed" } }
)
// Increase payment amount
db.payments.updateOne(
  { _id: "p2" },
  { $inc: { amount: 100 } }
)

// Delete: Remove failed payments if any
db.payments.deleteMany(
  { paymentStatus: "Failed" }
)//in my case no failed

// checking
db.payments.find()
