// 1:Top 3 highest rated courses
db.courses.aggregate([
  { $sort: { rating: -1 } },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      title: 1,
      rating: 1,
      price: 1,
      level: 1
    }
  }
])

// 2:Total Revenue Per Course by joining payments
db.enrollments.aggregate([
  {
    $lookup: { 
      from: "payments",
      localField: "paymentId",
      foreignField: "_id",
      as: "paymentDetails"
    }
  },
  { $unwind: "$paymentDetails" },
  {
    $group: {
      _id: "$courseId",
      totalRevenue: { $sum: "$paymentDetails.amount" }
    }
  }
])


// 3:Instructor-wise Earnings
db.enrollments.aggregate([ // Join payments
  {
    $lookup: {
      from: "payments",
      localField: "paymentId",
      foreignField: "_id",
      as: "paymentDetails"
    }
  },
  { $unwind: "$paymentDetails" },
  { // Join courses
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "courseDetails"
    }
  },
  { $unwind: "$courseDetails" },
  {
    $group: {  // Group by instructorId
      _id: "$courseDetails.instructorId",
      totalEarnings: { $sum: "$paymentDetails.amount" }
    }
  },
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "_id",
      as: "instructorInfo"
    }
  },
  { $unwind: "$instructorInfo" },
  {
    $project: {
      _id: 0,
      instructorName: "$instructorInfo.name",
      totalEarnings: 1
    }
  }
])


// 4:Monthly Revenue Report
db.payments.aggregate([
  {
    $group: {
      _id: {
        year: { $year: "$createdAt" },
        month: { $month: "$createdAt" }
      },
      totalRevenue: { $sum: "$amount" }
    }
  },
  { $sort: { "_id.year": 1, "_id.month": 1 } }
])
