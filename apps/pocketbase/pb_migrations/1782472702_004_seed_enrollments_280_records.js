/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("enrollments");

  const record0 = new Record(collection);
    record0.id = "o3ud9l2pejpn0kq";
    const record0_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS001'");
    if (!record0_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS001'\""); }
    record0.set("studentId", record0_studentIdLookup.id);
    const record0_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101'");
    if (!record0_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101'\""); }
    record0.set("courseId", record0_courseIdLookup.id);
    record0.set("semester", "1");
    record0.set("academicYear", "2025-2026");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.id = "gi6vf6nzoiutjae";
    const record1_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS001'");
    if (!record1_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS001'\""); }
    record1.set("studentId", record1_studentIdLookup.id);
    const record1_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201'");
    if (!record1_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201'\""); }
    record1.set("courseId", record1_courseIdLookup.id);
    record1.set("semester", "2");
    record1.set("academicYear", "2025-2026");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.id = "6116kfqo2q60wmz";
    const record2_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS001'");
    if (!record2_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS001'\""); }
    record2.set("studentId", record2_studentIdLookup.id);
    const record2_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301'");
    if (!record2_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301'\""); }
    record2.set("courseId", record2_courseIdLookup.id);
    record2.set("semester", "3");
    record2.set("academicYear", "2025-2026");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.id = "hfxwhbc3kb0eiph";
    const record3_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS001'");
    if (!record3_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS001'\""); }
    record3.set("studentId", record3_studentIdLookup.id);
    const record3_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS401'");
    if (!record3_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS401'\""); }
    record3.set("courseId", record3_courseIdLookup.id);
    record3.set("semester", "4");
    record3.set("academicYear", "2025-2026");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.id = "8jg24w4sx1kaje9";
    const record4_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS001'");
    if (!record4_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS001'\""); }
    record4.set("studentId", record4_studentIdLookup.id);
    const record4_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS501'");
    if (!record4_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS501'\""); }
    record4.set("courseId", record4_courseIdLookup.id);
    record4.set("semester", "5");
    record4.set("academicYear", "2025-2026");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.id = "h2fh4c7aip96jl9";
    const record5_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS001'");
    if (!record5_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS001'\""); }
    record5.set("studentId", record5_studentIdLookup.id);
    const record5_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101L'");
    if (!record5_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101L'\""); }
    record5.set("courseId", record5_courseIdLookup.id);
    record5.set("semester", "1");
    record5.set("academicYear", "2025-2026");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.id = "bb294gjx67jlyij";
    const record6_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS001'");
    if (!record6_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS001'\""); }
    record6.set("studentId", record6_studentIdLookup.id);
    const record6_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201L'");
    if (!record6_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201L'\""); }
    record6.set("courseId", record6_courseIdLookup.id);
    record6.set("semester", "2");
    record6.set("academicYear", "2025-2026");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.id = "jw7re27llpd85mj";
    const record7_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS002'");
    if (!record7_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS002'\""); }
    record7.set("studentId", record7_studentIdLookup.id);
    const record7_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101'");
    if (!record7_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101'\""); }
    record7.set("courseId", record7_courseIdLookup.id);
    record7.set("semester", "1");
    record7.set("academicYear", "2025-2026");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.id = "kfzz9n5om6m9q85";
    const record8_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS002'");
    if (!record8_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS002'\""); }
    record8.set("studentId", record8_studentIdLookup.id);
    const record8_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201'");
    if (!record8_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201'\""); }
    record8.set("courseId", record8_courseIdLookup.id);
    record8.set("semester", "2");
    record8.set("academicYear", "2025-2026");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.id = "czw0hqtm8gubuf8";
    const record9_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS002'");
    if (!record9_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS002'\""); }
    record9.set("studentId", record9_studentIdLookup.id);
    const record9_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301'");
    if (!record9_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301'\""); }
    record9.set("courseId", record9_courseIdLookup.id);
    record9.set("semester", "3");
    record9.set("academicYear", "2025-2026");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.id = "4qetrf57qbtn6mx";
    const record10_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS002'");
    if (!record10_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS002'\""); }
    record10.set("studentId", record10_studentIdLookup.id);
    const record10_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS401'");
    if (!record10_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS401'\""); }
    record10.set("courseId", record10_courseIdLookup.id);
    record10.set("semester", "4");
    record10.set("academicYear", "2025-2026");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.id = "7jxvn2piw3yr5hi";
    const record11_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS002'");
    if (!record11_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS002'\""); }
    record11.set("studentId", record11_studentIdLookup.id);
    const record11_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS501'");
    if (!record11_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS501'\""); }
    record11.set("courseId", record11_courseIdLookup.id);
    record11.set("semester", "5");
    record11.set("academicYear", "2025-2026");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.id = "bahbuyhxop0d8td";
    const record12_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS002'");
    if (!record12_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS002'\""); }
    record12.set("studentId", record12_studentIdLookup.id);
    const record12_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101L'");
    if (!record12_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101L'\""); }
    record12.set("courseId", record12_courseIdLookup.id);
    record12.set("semester", "1");
    record12.set("academicYear", "2025-2026");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.id = "9v847ypcfiuaiiy";
    const record13_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS002'");
    if (!record13_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS002'\""); }
    record13.set("studentId", record13_studentIdLookup.id);
    const record13_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201L'");
    if (!record13_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201L'\""); }
    record13.set("courseId", record13_courseIdLookup.id);
    record13.set("semester", "2");
    record13.set("academicYear", "2025-2026");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.id = "700uw50sols8ejy";
    const record14_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS003'");
    if (!record14_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS003'\""); }
    record14.set("studentId", record14_studentIdLookup.id);
    const record14_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101'");
    if (!record14_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101'\""); }
    record14.set("courseId", record14_courseIdLookup.id);
    record14.set("semester", "1");
    record14.set("academicYear", "2025-2026");
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.id = "xe9hp9azejfnqs2";
    const record15_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS003'");
    if (!record15_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS003'\""); }
    record15.set("studentId", record15_studentIdLookup.id);
    const record15_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201'");
    if (!record15_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201'\""); }
    record15.set("courseId", record15_courseIdLookup.id);
    record15.set("semester", "2");
    record15.set("academicYear", "2025-2026");
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.id = "0pe6i13dmoybjpp";
    const record16_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS003'");
    if (!record16_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS003'\""); }
    record16.set("studentId", record16_studentIdLookup.id);
    const record16_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301'");
    if (!record16_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301'\""); }
    record16.set("courseId", record16_courseIdLookup.id);
    record16.set("semester", "3");
    record16.set("academicYear", "2025-2026");
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.id = "4lf7tl3m4ro2jfr";
    const record17_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS003'");
    if (!record17_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS003'\""); }
    record17.set("studentId", record17_studentIdLookup.id);
    const record17_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS401'");
    if (!record17_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS401'\""); }
    record17.set("courseId", record17_courseIdLookup.id);
    record17.set("semester", "4");
    record17.set("academicYear", "2025-2026");
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.id = "ul7vyt9otjfdl7u";
    const record18_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS003'");
    if (!record18_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS003'\""); }
    record18.set("studentId", record18_studentIdLookup.id);
    const record18_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS601'");
    if (!record18_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS601'\""); }
    record18.set("courseId", record18_courseIdLookup.id);
    record18.set("semester", "6");
    record18.set("academicYear", "2025-2026");
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.id = "nmag20ugtvr51wt";
    const record19_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS003'");
    if (!record19_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS003'\""); }
    record19.set("studentId", record19_studentIdLookup.id);
    const record19_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101L'");
    if (!record19_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101L'\""); }
    record19.set("courseId", record19_courseIdLookup.id);
    record19.set("semester", "1");
    record19.set("academicYear", "2025-2026");
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.id = "zyfhq0jscncvo5c";
    const record20_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS003'");
    if (!record20_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS003'\""); }
    record20.set("studentId", record20_studentIdLookup.id);
    const record20_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301L'");
    if (!record20_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301L'\""); }
    record20.set("courseId", record20_courseIdLookup.id);
    record20.set("semester", "3");
    record20.set("academicYear", "2025-2026");
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.id = "r65sfipmc1bccyv";
    const record21_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS004'");
    if (!record21_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS004'\""); }
    record21.set("studentId", record21_studentIdLookup.id);
    const record21_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101'");
    if (!record21_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101'\""); }
    record21.set("courseId", record21_courseIdLookup.id);
    record21.set("semester", "1");
    record21.set("academicYear", "2025-2026");
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.id = "epleunlev9x6kuh";
    const record22_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS004'");
    if (!record22_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS004'\""); }
    record22.set("studentId", record22_studentIdLookup.id);
    const record22_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201'");
    if (!record22_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201'\""); }
    record22.set("courseId", record22_courseIdLookup.id);
    record22.set("semester", "2");
    record22.set("academicYear", "2025-2026");
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.id = "juap7vd9jtg6mor";
    const record23_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS004'");
    if (!record23_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS004'\""); }
    record23.set("studentId", record23_studentIdLookup.id);
    const record23_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301'");
    if (!record23_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301'\""); }
    record23.set("courseId", record23_courseIdLookup.id);
    record23.set("semester", "3");
    record23.set("academicYear", "2025-2026");
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    record24.id = "vtrrsmr1batroui";
    const record24_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS004'");
    if (!record24_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS004'\""); }
    record24.set("studentId", record24_studentIdLookup.id);
    const record24_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS401'");
    if (!record24_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS401'\""); }
    record24.set("courseId", record24_courseIdLookup.id);
    record24.set("semester", "4");
    record24.set("academicYear", "2025-2026");
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.id = "a8uk5tsb1a1xy57";
    const record25_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS004'");
    if (!record25_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS004'\""); }
    record25.set("studentId", record25_studentIdLookup.id);
    const record25_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS501'");
    if (!record25_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS501'\""); }
    record25.set("courseId", record25_courseIdLookup.id);
    record25.set("semester", "5");
    record25.set("academicYear", "2025-2026");
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    record26.id = "bxnmtw7rr8gdz1y";
    const record26_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS004'");
    if (!record26_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS004'\""); }
    record26.set("studentId", record26_studentIdLookup.id);
    const record26_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201L'");
    if (!record26_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201L'\""); }
    record26.set("courseId", record26_courseIdLookup.id);
    record26.set("semester", "2");
    record26.set("academicYear", "2025-2026");
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    record27.id = "x2ipd1n9ikgz8o2";
    const record27_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS004'");
    if (!record27_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS004'\""); }
    record27.set("studentId", record27_studentIdLookup.id);
    const record27_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301L'");
    if (!record27_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301L'\""); }
    record27.set("courseId", record27_courseIdLookup.id);
    record27.set("semester", "3");
    record27.set("academicYear", "2025-2026");
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record28 = new Record(collection);
    record28.id = "b9409if7j3l84l8";
    const record28_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS005'");
    if (!record28_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS005'\""); }
    record28.set("studentId", record28_studentIdLookup.id);
    const record28_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101'");
    if (!record28_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101'\""); }
    record28.set("courseId", record28_courseIdLookup.id);
    record28.set("semester", "1");
    record28.set("academicYear", "2025-2026");
  try {
    app.save(record28);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record29 = new Record(collection);
    record29.id = "vipu57vqlonm85l";
    const record29_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS005'");
    if (!record29_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS005'\""); }
    record29.set("studentId", record29_studentIdLookup.id);
    const record29_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201'");
    if (!record29_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201'\""); }
    record29.set("courseId", record29_courseIdLookup.id);
    record29.set("semester", "2");
    record29.set("academicYear", "2025-2026");
  try {
    app.save(record29);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record30 = new Record(collection);
    record30.id = "q4fs6nm20l8swac";
    const record30_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS005'");
    if (!record30_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS005'\""); }
    record30.set("studentId", record30_studentIdLookup.id);
    const record30_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301'");
    if (!record30_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301'\""); }
    record30.set("courseId", record30_courseIdLookup.id);
    record30.set("semester", "3");
    record30.set("academicYear", "2025-2026");
  try {
    app.save(record30);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record31 = new Record(collection);
    record31.id = "it3kgtgptagxbyp";
    const record31_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS005'");
    if (!record31_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS005'\""); }
    record31.set("studentId", record31_studentIdLookup.id);
    const record31_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS401'");
    if (!record31_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS401'\""); }
    record31.set("courseId", record31_courseIdLookup.id);
    record31.set("semester", "4");
    record31.set("academicYear", "2025-2026");
  try {
    app.save(record31);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record32 = new Record(collection);
    record32.id = "dfk5iq02wr04ear";
    const record32_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS005'");
    if (!record32_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS005'\""); }
    record32.set("studentId", record32_studentIdLookup.id);
    const record32_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS601'");
    if (!record32_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS601'\""); }
    record32.set("courseId", record32_courseIdLookup.id);
    record32.set("semester", "6");
    record32.set("academicYear", "2025-2026");
  try {
    app.save(record32);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record33 = new Record(collection);
    record33.id = "njk7gr41gz4kbjs";
    const record33_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS005'");
    if (!record33_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS005'\""); }
    record33.set("studentId", record33_studentIdLookup.id);
    const record33_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101L'");
    if (!record33_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101L'\""); }
    record33.set("courseId", record33_courseIdLookup.id);
    record33.set("semester", "1");
    record33.set("academicYear", "2025-2026");
  try {
    app.save(record33);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record34 = new Record(collection);
    record34.id = "894gwetmrrivcp1";
    const record34_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS005'");
    if (!record34_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS005'\""); }
    record34.set("studentId", record34_studentIdLookup.id);
    const record34_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201L'");
    if (!record34_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201L'\""); }
    record34.set("courseId", record34_courseIdLookup.id);
    record34.set("semester", "2");
    record34.set("academicYear", "2025-2026");
  try {
    app.save(record34);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record35 = new Record(collection);
    record35.id = "p7vix90436yz7bz";
    const record35_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS006'");
    if (!record35_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS006'\""); }
    record35.set("studentId", record35_studentIdLookup.id);
    const record35_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101'");
    if (!record35_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101'\""); }
    record35.set("courseId", record35_courseIdLookup.id);
    record35.set("semester", "1");
    record35.set("academicYear", "2025-2026");
  try {
    app.save(record35);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record36 = new Record(collection);
    record36.id = "w2gf82xowq965dw";
    const record36_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS006'");
    if (!record36_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS006'\""); }
    record36.set("studentId", record36_studentIdLookup.id);
    const record36_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201'");
    if (!record36_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201'\""); }
    record36.set("courseId", record36_courseIdLookup.id);
    record36.set("semester", "2");
    record36.set("academicYear", "2025-2026");
  try {
    app.save(record36);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record37 = new Record(collection);
    record37.id = "niu8910twhmp4xp";
    const record37_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS006'");
    if (!record37_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS006'\""); }
    record37.set("studentId", record37_studentIdLookup.id);
    const record37_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301'");
    if (!record37_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301'\""); }
    record37.set("courseId", record37_courseIdLookup.id);
    record37.set("semester", "3");
    record37.set("academicYear", "2025-2026");
  try {
    app.save(record37);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record38 = new Record(collection);
    record38.id = "5eqaam62hn91dot";
    const record38_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS006'");
    if (!record38_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS006'\""); }
    record38.set("studentId", record38_studentIdLookup.id);
    const record38_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS401'");
    if (!record38_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS401'\""); }
    record38.set("courseId", record38_courseIdLookup.id);
    record38.set("semester", "4");
    record38.set("academicYear", "2025-2026");
  try {
    app.save(record38);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record39 = new Record(collection);
    record39.id = "bdl6j059vyuqkaa";
    const record39_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS006'");
    if (!record39_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS006'\""); }
    record39.set("studentId", record39_studentIdLookup.id);
    const record39_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS501'");
    if (!record39_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS501'\""); }
    record39.set("courseId", record39_courseIdLookup.id);
    record39.set("semester", "5");
    record39.set("academicYear", "2025-2026");
  try {
    app.save(record39);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record40 = new Record(collection);
    record40.id = "z9tpq2c1jvof633";
    const record40_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS006'");
    if (!record40_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS006'\""); }
    record40.set("studentId", record40_studentIdLookup.id);
    const record40_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101L'");
    if (!record40_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101L'\""); }
    record40.set("courseId", record40_courseIdLookup.id);
    record40.set("semester", "1");
    record40.set("academicYear", "2025-2026");
  try {
    app.save(record40);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record41 = new Record(collection);
    record41.id = "eaqyirbgdj205wl";
    const record41_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS006'");
    if (!record41_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS006'\""); }
    record41.set("studentId", record41_studentIdLookup.id);
    const record41_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301L'");
    if (!record41_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301L'\""); }
    record41.set("courseId", record41_courseIdLookup.id);
    record41.set("semester", "3");
    record41.set("academicYear", "2025-2026");
  try {
    app.save(record41);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record42 = new Record(collection);
    record42.id = "vyogpjwv233hjxa";
    const record42_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS007'");
    if (!record42_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS007'\""); }
    record42.set("studentId", record42_studentIdLookup.id);
    const record42_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101'");
    if (!record42_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101'\""); }
    record42.set("courseId", record42_courseIdLookup.id);
    record42.set("semester", "1");
    record42.set("academicYear", "2025-2026");
  try {
    app.save(record42);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record43 = new Record(collection);
    record43.id = "pbr9of6rg39gujg";
    const record43_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS007'");
    if (!record43_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS007'\""); }
    record43.set("studentId", record43_studentIdLookup.id);
    const record43_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201'");
    if (!record43_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201'\""); }
    record43.set("courseId", record43_courseIdLookup.id);
    record43.set("semester", "2");
    record43.set("academicYear", "2025-2026");
  try {
    app.save(record43);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record44 = new Record(collection);
    record44.id = "3uw40ysetzffkgg";
    const record44_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS007'");
    if (!record44_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS007'\""); }
    record44.set("studentId", record44_studentIdLookup.id);
    const record44_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301'");
    if (!record44_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301'\""); }
    record44.set("courseId", record44_courseIdLookup.id);
    record44.set("semester", "3");
    record44.set("academicYear", "2025-2026");
  try {
    app.save(record44);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record45 = new Record(collection);
    record45.id = "xom7q7b5dyc95bb";
    const record45_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS007'");
    if (!record45_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS007'\""); }
    record45.set("studentId", record45_studentIdLookup.id);
    const record45_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS401'");
    if (!record45_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS401'\""); }
    record45.set("courseId", record45_courseIdLookup.id);
    record45.set("semester", "4");
    record45.set("academicYear", "2025-2026");
  try {
    app.save(record45);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record46 = new Record(collection);
    record46.id = "gs6zrzy4jkl8hum";
    const record46_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS007'");
    if (!record46_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS007'\""); }
    record46.set("studentId", record46_studentIdLookup.id);
    const record46_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS601'");
    if (!record46_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS601'\""); }
    record46.set("courseId", record46_courseIdLookup.id);
    record46.set("semester", "6");
    record46.set("academicYear", "2025-2026");
  try {
    app.save(record46);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record47 = new Record(collection);
    record47.id = "x16286pg06umprh";
    const record47_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS007'");
    if (!record47_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS007'\""); }
    record47.set("studentId", record47_studentIdLookup.id);
    const record47_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201L'");
    if (!record47_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201L'\""); }
    record47.set("courseId", record47_courseIdLookup.id);
    record47.set("semester", "2");
    record47.set("academicYear", "2025-2026");
  try {
    app.save(record47);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record48 = new Record(collection);
    record48.id = "e3cvxz1t1bmlcs4";
    const record48_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS007'");
    if (!record48_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS007'\""); }
    record48.set("studentId", record48_studentIdLookup.id);
    const record48_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301L'");
    if (!record48_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301L'\""); }
    record48.set("courseId", record48_courseIdLookup.id);
    record48.set("semester", "3");
    record48.set("academicYear", "2025-2026");
  try {
    app.save(record48);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record49 = new Record(collection);
    record49.id = "ao3egw1g7dirtax";
    const record49_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS008'");
    if (!record49_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS008'\""); }
    record49.set("studentId", record49_studentIdLookup.id);
    const record49_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101'");
    if (!record49_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101'\""); }
    record49.set("courseId", record49_courseIdLookup.id);
    record49.set("semester", "1");
    record49.set("academicYear", "2025-2026");
  try {
    app.save(record49);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record50 = new Record(collection);
    record50.id = "5wjywo997w1xxib";
    const record50_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS008'");
    if (!record50_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS008'\""); }
    record50.set("studentId", record50_studentIdLookup.id);
    const record50_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201'");
    if (!record50_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201'\""); }
    record50.set("courseId", record50_courseIdLookup.id);
    record50.set("semester", "2");
    record50.set("academicYear", "2025-2026");
  try {
    app.save(record50);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record51 = new Record(collection);
    record51.id = "q90yrb2q1fje2dc";
    const record51_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS008'");
    if (!record51_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS008'\""); }
    record51.set("studentId", record51_studentIdLookup.id);
    const record51_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301'");
    if (!record51_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301'\""); }
    record51.set("courseId", record51_courseIdLookup.id);
    record51.set("semester", "3");
    record51.set("academicYear", "2025-2026");
  try {
    app.save(record51);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record52 = new Record(collection);
    record52.id = "btbdufhvkm9l0lt";
    const record52_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS008'");
    if (!record52_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS008'\""); }
    record52.set("studentId", record52_studentIdLookup.id);
    const record52_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS401'");
    if (!record52_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS401'\""); }
    record52.set("courseId", record52_courseIdLookup.id);
    record52.set("semester", "4");
    record52.set("academicYear", "2025-2026");
  try {
    app.save(record52);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record53 = new Record(collection);
    record53.id = "5cf64h6j1ef8r0y";
    const record53_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS008'");
    if (!record53_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS008'\""); }
    record53.set("studentId", record53_studentIdLookup.id);
    const record53_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS501'");
    if (!record53_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS501'\""); }
    record53.set("courseId", record53_courseIdLookup.id);
    record53.set("semester", "5");
    record53.set("academicYear", "2025-2026");
  try {
    app.save(record53);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record54 = new Record(collection);
    record54.id = "6xua6zpidtu7uxl";
    const record54_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS008'");
    if (!record54_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS008'\""); }
    record54.set("studentId", record54_studentIdLookup.id);
    const record54_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101L'");
    if (!record54_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101L'\""); }
    record54.set("courseId", record54_courseIdLookup.id);
    record54.set("semester", "1");
    record54.set("academicYear", "2025-2026");
  try {
    app.save(record54);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record55 = new Record(collection);
    record55.id = "al5xf3gnb6i31fh";
    const record55_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS008'");
    if (!record55_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS008'\""); }
    record55.set("studentId", record55_studentIdLookup.id);
    const record55_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201L'");
    if (!record55_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201L'\""); }
    record55.set("courseId", record55_courseIdLookup.id);
    record55.set("semester", "2");
    record55.set("academicYear", "2025-2026");
  try {
    app.save(record55);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record56 = new Record(collection);
    record56.id = "a2jgyl1a4aak6co";
    const record56_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS009'");
    if (!record56_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS009'\""); }
    record56.set("studentId", record56_studentIdLookup.id);
    const record56_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101'");
    if (!record56_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101'\""); }
    record56.set("courseId", record56_courseIdLookup.id);
    record56.set("semester", "1");
    record56.set("academicYear", "2025-2026");
  try {
    app.save(record56);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record57 = new Record(collection);
    record57.id = "796dmm2vpq8b0a5";
    const record57_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS009'");
    if (!record57_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS009'\""); }
    record57.set("studentId", record57_studentIdLookup.id);
    const record57_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201'");
    if (!record57_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201'\""); }
    record57.set("courseId", record57_courseIdLookup.id);
    record57.set("semester", "2");
    record57.set("academicYear", "2025-2026");
  try {
    app.save(record57);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record58 = new Record(collection);
    record58.id = "tmhxjdjtfkwn6or";
    const record58_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS009'");
    if (!record58_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS009'\""); }
    record58.set("studentId", record58_studentIdLookup.id);
    const record58_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301'");
    if (!record58_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301'\""); }
    record58.set("courseId", record58_courseIdLookup.id);
    record58.set("semester", "3");
    record58.set("academicYear", "2025-2026");
  try {
    app.save(record58);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record59 = new Record(collection);
    record59.id = "c3wyy3r4uj5dr3j";
    const record59_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS009'");
    if (!record59_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS009'\""); }
    record59.set("studentId", record59_studentIdLookup.id);
    const record59_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS401'");
    if (!record59_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS401'\""); }
    record59.set("courseId", record59_courseIdLookup.id);
    record59.set("semester", "4");
    record59.set("academicYear", "2025-2026");
  try {
    app.save(record59);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record60 = new Record(collection);
    record60.id = "667zd841n58ux24";
    const record60_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS009'");
    if (!record60_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS009'\""); }
    record60.set("studentId", record60_studentIdLookup.id);
    const record60_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS601'");
    if (!record60_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS601'\""); }
    record60.set("courseId", record60_courseIdLookup.id);
    record60.set("semester", "6");
    record60.set("academicYear", "2025-2026");
  try {
    app.save(record60);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record61 = new Record(collection);
    record61.id = "wlxbn9it2qnsppy";
    const record61_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS009'");
    if (!record61_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS009'\""); }
    record61.set("studentId", record61_studentIdLookup.id);
    const record61_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101L'");
    if (!record61_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101L'\""); }
    record61.set("courseId", record61_courseIdLookup.id);
    record61.set("semester", "1");
    record61.set("academicYear", "2025-2026");
  try {
    app.save(record61);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record62 = new Record(collection);
    record62.id = "bg2aumxfsnsli8d";
    const record62_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS009'");
    if (!record62_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS009'\""); }
    record62.set("studentId", record62_studentIdLookup.id);
    const record62_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301L'");
    if (!record62_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301L'\""); }
    record62.set("courseId", record62_courseIdLookup.id);
    record62.set("semester", "3");
    record62.set("academicYear", "2025-2026");
  try {
    app.save(record62);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record63 = new Record(collection);
    record63.id = "5ifc9ams3g2zebl";
    const record63_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS010'");
    if (!record63_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS010'\""); }
    record63.set("studentId", record63_studentIdLookup.id);
    const record63_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS101'");
    if (!record63_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS101'\""); }
    record63.set("courseId", record63_courseIdLookup.id);
    record63.set("semester", "1");
    record63.set("academicYear", "2025-2026");
  try {
    app.save(record63);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record64 = new Record(collection);
    record64.id = "lwhyik0plexdw9g";
    const record64_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS010'");
    if (!record64_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS010'\""); }
    record64.set("studentId", record64_studentIdLookup.id);
    const record64_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201'");
    if (!record64_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201'\""); }
    record64.set("courseId", record64_courseIdLookup.id);
    record64.set("semester", "2");
    record64.set("academicYear", "2025-2026");
  try {
    app.save(record64);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record65 = new Record(collection);
    record65.id = "xe33g6wuovu5qt3";
    const record65_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS010'");
    if (!record65_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS010'\""); }
    record65.set("studentId", record65_studentIdLookup.id);
    const record65_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301'");
    if (!record65_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301'\""); }
    record65.set("courseId", record65_courseIdLookup.id);
    record65.set("semester", "3");
    record65.set("academicYear", "2025-2026");
  try {
    app.save(record65);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record66 = new Record(collection);
    record66.id = "k8zn9wht5r05wxq";
    const record66_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS010'");
    if (!record66_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS010'\""); }
    record66.set("studentId", record66_studentIdLookup.id);
    const record66_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS401'");
    if (!record66_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS401'\""); }
    record66.set("courseId", record66_courseIdLookup.id);
    record66.set("semester", "4");
    record66.set("academicYear", "2025-2026");
  try {
    app.save(record66);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record67 = new Record(collection);
    record67.id = "nw9c1gaspxqzs5s";
    const record67_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS010'");
    if (!record67_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS010'\""); }
    record67.set("studentId", record67_studentIdLookup.id);
    const record67_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS501'");
    if (!record67_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS501'\""); }
    record67.set("courseId", record67_courseIdLookup.id);
    record67.set("semester", "5");
    record67.set("academicYear", "2025-2026");
  try {
    app.save(record67);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record68 = new Record(collection);
    record68.id = "bzlh85ko17q6442";
    const record68_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS010'");
    if (!record68_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS010'\""); }
    record68.set("studentId", record68_studentIdLookup.id);
    const record68_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS201L'");
    if (!record68_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS201L'\""); }
    record68.set("courseId", record68_courseIdLookup.id);
    record68.set("semester", "2");
    record68.set("academicYear", "2025-2026");
  try {
    app.save(record68);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record69 = new Record(collection);
    record69.id = "3qo6rqwjxxnbg6f";
    const record69_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CS010'");
    if (!record69_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CS010'\""); }
    record69.set("studentId", record69_studentIdLookup.id);
    const record69_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CS301L'");
    if (!record69_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CS301L'\""); }
    record69.set("courseId", record69_courseIdLookup.id);
    record69.set("semester", "3");
    record69.set("academicYear", "2025-2026");
  try {
    app.save(record69);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record70 = new Record(collection);
    record70.id = "rf76uxzhqzjyeqt";
    const record70_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC001'");
    if (!record70_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC001'\""); }
    record70.set("studentId", record70_studentIdLookup.id);
    const record70_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101'");
    if (!record70_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101'\""); }
    record70.set("courseId", record70_courseIdLookup.id);
    record70.set("semester", "1");
    record70.set("academicYear", "2025-2026");
  try {
    app.save(record70);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record71 = new Record(collection);
    record71.id = "jpa0gc4c920yyzv";
    const record71_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC001'");
    if (!record71_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC001'\""); }
    record71.set("studentId", record71_studentIdLookup.id);
    const record71_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201'");
    if (!record71_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201'\""); }
    record71.set("courseId", record71_courseIdLookup.id);
    record71.set("semester", "2");
    record71.set("academicYear", "2025-2026");
  try {
    app.save(record71);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record72 = new Record(collection);
    record72.id = "841otvaaa25brwv";
    const record72_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC001'");
    if (!record72_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC001'\""); }
    record72.set("studentId", record72_studentIdLookup.id);
    const record72_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301'");
    if (!record72_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301'\""); }
    record72.set("courseId", record72_courseIdLookup.id);
    record72.set("semester", "3");
    record72.set("academicYear", "2025-2026");
  try {
    app.save(record72);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record73 = new Record(collection);
    record73.id = "u37mqi84vif9tma";
    const record73_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC001'");
    if (!record73_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC001'\""); }
    record73.set("studentId", record73_studentIdLookup.id);
    const record73_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC401'");
    if (!record73_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC401'\""); }
    record73.set("courseId", record73_courseIdLookup.id);
    record73.set("semester", "4");
    record73.set("academicYear", "2025-2026");
  try {
    app.save(record73);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record74 = new Record(collection);
    record74.id = "zt0h1jeosxh24ei";
    const record74_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC001'");
    if (!record74_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC001'\""); }
    record74.set("studentId", record74_studentIdLookup.id);
    const record74_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC501'");
    if (!record74_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC501'\""); }
    record74.set("courseId", record74_courseIdLookup.id);
    record74.set("semester", "5");
    record74.set("academicYear", "2025-2026");
  try {
    app.save(record74);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record75 = new Record(collection);
    record75.id = "dea1548o4c6chv6";
    const record75_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC001'");
    if (!record75_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC001'\""); }
    record75.set("studentId", record75_studentIdLookup.id);
    const record75_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101L'");
    if (!record75_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101L'\""); }
    record75.set("courseId", record75_courseIdLookup.id);
    record75.set("semester", "1");
    record75.set("academicYear", "2025-2026");
  try {
    app.save(record75);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record76 = new Record(collection);
    record76.id = "uniybq1f4bxs3a8";
    const record76_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC001'");
    if (!record76_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC001'\""); }
    record76.set("studentId", record76_studentIdLookup.id);
    const record76_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201L'");
    if (!record76_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201L'\""); }
    record76.set("courseId", record76_courseIdLookup.id);
    record76.set("semester", "2");
    record76.set("academicYear", "2025-2026");
  try {
    app.save(record76);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record77 = new Record(collection);
    record77.id = "en9zhvzkuz2sbcf";
    const record77_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC002'");
    if (!record77_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC002'\""); }
    record77.set("studentId", record77_studentIdLookup.id);
    const record77_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101'");
    if (!record77_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101'\""); }
    record77.set("courseId", record77_courseIdLookup.id);
    record77.set("semester", "1");
    record77.set("academicYear", "2025-2026");
  try {
    app.save(record77);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record78 = new Record(collection);
    record78.id = "ha01b3p50qhkr9c";
    const record78_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC002'");
    if (!record78_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC002'\""); }
    record78.set("studentId", record78_studentIdLookup.id);
    const record78_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201'");
    if (!record78_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201'\""); }
    record78.set("courseId", record78_courseIdLookup.id);
    record78.set("semester", "2");
    record78.set("academicYear", "2025-2026");
  try {
    app.save(record78);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record79 = new Record(collection);
    record79.id = "yvzdzjgmwgefvev";
    const record79_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC002'");
    if (!record79_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC002'\""); }
    record79.set("studentId", record79_studentIdLookup.id);
    const record79_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301'");
    if (!record79_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301'\""); }
    record79.set("courseId", record79_courseIdLookup.id);
    record79.set("semester", "3");
    record79.set("academicYear", "2025-2026");
  try {
    app.save(record79);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record80 = new Record(collection);
    record80.id = "4efe7vp1d4pzahj";
    const record80_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC002'");
    if (!record80_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC002'\""); }
    record80.set("studentId", record80_studentIdLookup.id);
    const record80_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC401'");
    if (!record80_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC401'\""); }
    record80.set("courseId", record80_courseIdLookup.id);
    record80.set("semester", "4");
    record80.set("academicYear", "2025-2026");
  try {
    app.save(record80);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record81 = new Record(collection);
    record81.id = "kftycdavtv69m04";
    const record81_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC002'");
    if (!record81_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC002'\""); }
    record81.set("studentId", record81_studentIdLookup.id);
    const record81_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC501'");
    if (!record81_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC501'\""); }
    record81.set("courseId", record81_courseIdLookup.id);
    record81.set("semester", "5");
    record81.set("academicYear", "2025-2026");
  try {
    app.save(record81);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record82 = new Record(collection);
    record82.id = "mu1wlprfy0qpdmd";
    const record82_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC002'");
    if (!record82_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC002'\""); }
    record82.set("studentId", record82_studentIdLookup.id);
    const record82_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101L'");
    if (!record82_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101L'\""); }
    record82.set("courseId", record82_courseIdLookup.id);
    record82.set("semester", "1");
    record82.set("academicYear", "2025-2026");
  try {
    app.save(record82);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record83 = new Record(collection);
    record83.id = "8983wata6ned6sr";
    const record83_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC002'");
    if (!record83_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC002'\""); }
    record83.set("studentId", record83_studentIdLookup.id);
    const record83_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201L'");
    if (!record83_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201L'\""); }
    record83.set("courseId", record83_courseIdLookup.id);
    record83.set("semester", "2");
    record83.set("academicYear", "2025-2026");
  try {
    app.save(record83);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record84 = new Record(collection);
    record84.id = "2raj7l941m241e8";
    const record84_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC003'");
    if (!record84_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC003'\""); }
    record84.set("studentId", record84_studentIdLookup.id);
    const record84_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101'");
    if (!record84_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101'\""); }
    record84.set("courseId", record84_courseIdLookup.id);
    record84.set("semester", "1");
    record84.set("academicYear", "2025-2026");
  try {
    app.save(record84);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record85 = new Record(collection);
    record85.id = "bs3yoiwyax39b53";
    const record85_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC003'");
    if (!record85_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC003'\""); }
    record85.set("studentId", record85_studentIdLookup.id);
    const record85_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201'");
    if (!record85_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201'\""); }
    record85.set("courseId", record85_courseIdLookup.id);
    record85.set("semester", "2");
    record85.set("academicYear", "2025-2026");
  try {
    app.save(record85);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record86 = new Record(collection);
    record86.id = "wbhr4agxge4msce";
    const record86_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC003'");
    if (!record86_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC003'\""); }
    record86.set("studentId", record86_studentIdLookup.id);
    const record86_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301'");
    if (!record86_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301'\""); }
    record86.set("courseId", record86_courseIdLookup.id);
    record86.set("semester", "3");
    record86.set("academicYear", "2025-2026");
  try {
    app.save(record86);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record87 = new Record(collection);
    record87.id = "4td4e2m26kv6x5a";
    const record87_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC003'");
    if (!record87_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC003'\""); }
    record87.set("studentId", record87_studentIdLookup.id);
    const record87_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC401'");
    if (!record87_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC401'\""); }
    record87.set("courseId", record87_courseIdLookup.id);
    record87.set("semester", "4");
    record87.set("academicYear", "2025-2026");
  try {
    app.save(record87);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record88 = new Record(collection);
    record88.id = "q3r0e1ilvbjr9vt";
    const record88_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC003'");
    if (!record88_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC003'\""); }
    record88.set("studentId", record88_studentIdLookup.id);
    const record88_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC601'");
    if (!record88_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC601'\""); }
    record88.set("courseId", record88_courseIdLookup.id);
    record88.set("semester", "6");
    record88.set("academicYear", "2025-2026");
  try {
    app.save(record88);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record89 = new Record(collection);
    record89.id = "pnvk5d0wb48psf9";
    const record89_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC003'");
    if (!record89_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC003'\""); }
    record89.set("studentId", record89_studentIdLookup.id);
    const record89_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101L'");
    if (!record89_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101L'\""); }
    record89.set("courseId", record89_courseIdLookup.id);
    record89.set("semester", "1");
    record89.set("academicYear", "2025-2026");
  try {
    app.save(record89);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record90 = new Record(collection);
    record90.id = "r6zxyhij7lergp6";
    const record90_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC003'");
    if (!record90_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC003'\""); }
    record90.set("studentId", record90_studentIdLookup.id);
    const record90_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301L'");
    if (!record90_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301L'\""); }
    record90.set("courseId", record90_courseIdLookup.id);
    record90.set("semester", "3");
    record90.set("academicYear", "2025-2026");
  try {
    app.save(record90);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record91 = new Record(collection);
    record91.id = "vsakojpxeme7yag";
    const record91_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC004'");
    if (!record91_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC004'\""); }
    record91.set("studentId", record91_studentIdLookup.id);
    const record91_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101'");
    if (!record91_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101'\""); }
    record91.set("courseId", record91_courseIdLookup.id);
    record91.set("semester", "1");
    record91.set("academicYear", "2025-2026");
  try {
    app.save(record91);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record92 = new Record(collection);
    record92.id = "jtfm9aix6nh6796";
    const record92_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC004'");
    if (!record92_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC004'\""); }
    record92.set("studentId", record92_studentIdLookup.id);
    const record92_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201'");
    if (!record92_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201'\""); }
    record92.set("courseId", record92_courseIdLookup.id);
    record92.set("semester", "2");
    record92.set("academicYear", "2025-2026");
  try {
    app.save(record92);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record93 = new Record(collection);
    record93.id = "bqsed7mqzhm2toz";
    const record93_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC004'");
    if (!record93_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC004'\""); }
    record93.set("studentId", record93_studentIdLookup.id);
    const record93_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301'");
    if (!record93_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301'\""); }
    record93.set("courseId", record93_courseIdLookup.id);
    record93.set("semester", "3");
    record93.set("academicYear", "2025-2026");
  try {
    app.save(record93);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record94 = new Record(collection);
    record94.id = "ef5ielw7rofgsph";
    const record94_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC004'");
    if (!record94_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC004'\""); }
    record94.set("studentId", record94_studentIdLookup.id);
    const record94_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC401'");
    if (!record94_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC401'\""); }
    record94.set("courseId", record94_courseIdLookup.id);
    record94.set("semester", "4");
    record94.set("academicYear", "2025-2026");
  try {
    app.save(record94);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record95 = new Record(collection);
    record95.id = "vysb15hdbyi9i4h";
    const record95_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC004'");
    if (!record95_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC004'\""); }
    record95.set("studentId", record95_studentIdLookup.id);
    const record95_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC501'");
    if (!record95_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC501'\""); }
    record95.set("courseId", record95_courseIdLookup.id);
    record95.set("semester", "5");
    record95.set("academicYear", "2025-2026");
  try {
    app.save(record95);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record96 = new Record(collection);
    record96.id = "b7717ggxs9cicl1";
    const record96_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC004'");
    if (!record96_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC004'\""); }
    record96.set("studentId", record96_studentIdLookup.id);
    const record96_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201L'");
    if (!record96_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201L'\""); }
    record96.set("courseId", record96_courseIdLookup.id);
    record96.set("semester", "2");
    record96.set("academicYear", "2025-2026");
  try {
    app.save(record96);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record97 = new Record(collection);
    record97.id = "fo3lky9ue4dp05v";
    const record97_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC004'");
    if (!record97_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC004'\""); }
    record97.set("studentId", record97_studentIdLookup.id);
    const record97_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301L'");
    if (!record97_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301L'\""); }
    record97.set("courseId", record97_courseIdLookup.id);
    record97.set("semester", "3");
    record97.set("academicYear", "2025-2026");
  try {
    app.save(record97);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record98 = new Record(collection);
    record98.id = "9cduxp630v73gjf";
    const record98_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC005'");
    if (!record98_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC005'\""); }
    record98.set("studentId", record98_studentIdLookup.id);
    const record98_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101'");
    if (!record98_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101'\""); }
    record98.set("courseId", record98_courseIdLookup.id);
    record98.set("semester", "1");
    record98.set("academicYear", "2025-2026");
  try {
    app.save(record98);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record99 = new Record(collection);
    record99.id = "ifodpbdyfhaykpf";
    const record99_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC005'");
    if (!record99_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC005'\""); }
    record99.set("studentId", record99_studentIdLookup.id);
    const record99_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201'");
    if (!record99_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201'\""); }
    record99.set("courseId", record99_courseIdLookup.id);
    record99.set("semester", "2");
    record99.set("academicYear", "2025-2026");
  try {
    app.save(record99);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record100 = new Record(collection);
    record100.id = "i37vmoc8zdfbt6e";
    const record100_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC005'");
    if (!record100_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC005'\""); }
    record100.set("studentId", record100_studentIdLookup.id);
    const record100_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301'");
    if (!record100_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301'\""); }
    record100.set("courseId", record100_courseIdLookup.id);
    record100.set("semester", "3");
    record100.set("academicYear", "2025-2026");
  try {
    app.save(record100);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record101 = new Record(collection);
    record101.id = "kem8w4om7tlla81";
    const record101_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC005'");
    if (!record101_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC005'\""); }
    record101.set("studentId", record101_studentIdLookup.id);
    const record101_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC401'");
    if (!record101_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC401'\""); }
    record101.set("courseId", record101_courseIdLookup.id);
    record101.set("semester", "4");
    record101.set("academicYear", "2025-2026");
  try {
    app.save(record101);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record102 = new Record(collection);
    record102.id = "8tz0e0wzcbr3m88";
    const record102_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC005'");
    if (!record102_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC005'\""); }
    record102.set("studentId", record102_studentIdLookup.id);
    const record102_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC601'");
    if (!record102_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC601'\""); }
    record102.set("courseId", record102_courseIdLookup.id);
    record102.set("semester", "6");
    record102.set("academicYear", "2025-2026");
  try {
    app.save(record102);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record103 = new Record(collection);
    record103.id = "6sd7x220q9hy4eg";
    const record103_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC005'");
    if (!record103_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC005'\""); }
    record103.set("studentId", record103_studentIdLookup.id);
    const record103_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101L'");
    if (!record103_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101L'\""); }
    record103.set("courseId", record103_courseIdLookup.id);
    record103.set("semester", "1");
    record103.set("academicYear", "2025-2026");
  try {
    app.save(record103);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record104 = new Record(collection);
    record104.id = "anbsr6xii5ip18b";
    const record104_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC005'");
    if (!record104_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC005'\""); }
    record104.set("studentId", record104_studentIdLookup.id);
    const record104_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201L'");
    if (!record104_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201L'\""); }
    record104.set("courseId", record104_courseIdLookup.id);
    record104.set("semester", "2");
    record104.set("academicYear", "2025-2026");
  try {
    app.save(record104);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record105 = new Record(collection);
    record105.id = "qbxiyob6rtgku6c";
    const record105_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC006'");
    if (!record105_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC006'\""); }
    record105.set("studentId", record105_studentIdLookup.id);
    const record105_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101'");
    if (!record105_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101'\""); }
    record105.set("courseId", record105_courseIdLookup.id);
    record105.set("semester", "1");
    record105.set("academicYear", "2025-2026");
  try {
    app.save(record105);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record106 = new Record(collection);
    record106.id = "bvrbg45uxsi6m3k";
    const record106_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC006'");
    if (!record106_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC006'\""); }
    record106.set("studentId", record106_studentIdLookup.id);
    const record106_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201'");
    if (!record106_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201'\""); }
    record106.set("courseId", record106_courseIdLookup.id);
    record106.set("semester", "2");
    record106.set("academicYear", "2025-2026");
  try {
    app.save(record106);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record107 = new Record(collection);
    record107.id = "wjd99nf2hcv1o0b";
    const record107_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC006'");
    if (!record107_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC006'\""); }
    record107.set("studentId", record107_studentIdLookup.id);
    const record107_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301'");
    if (!record107_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301'\""); }
    record107.set("courseId", record107_courseIdLookup.id);
    record107.set("semester", "3");
    record107.set("academicYear", "2025-2026");
  try {
    app.save(record107);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record108 = new Record(collection);
    record108.id = "lk3so876drqshub";
    const record108_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC006'");
    if (!record108_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC006'\""); }
    record108.set("studentId", record108_studentIdLookup.id);
    const record108_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC401'");
    if (!record108_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC401'\""); }
    record108.set("courseId", record108_courseIdLookup.id);
    record108.set("semester", "4");
    record108.set("academicYear", "2025-2026");
  try {
    app.save(record108);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record109 = new Record(collection);
    record109.id = "9e307nhkx1pgeqr";
    const record109_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC006'");
    if (!record109_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC006'\""); }
    record109.set("studentId", record109_studentIdLookup.id);
    const record109_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC501'");
    if (!record109_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC501'\""); }
    record109.set("courseId", record109_courseIdLookup.id);
    record109.set("semester", "5");
    record109.set("academicYear", "2025-2026");
  try {
    app.save(record109);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record110 = new Record(collection);
    record110.id = "zp12o1u9r6mcqqe";
    const record110_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC006'");
    if (!record110_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC006'\""); }
    record110.set("studentId", record110_studentIdLookup.id);
    const record110_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101L'");
    if (!record110_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101L'\""); }
    record110.set("courseId", record110_courseIdLookup.id);
    record110.set("semester", "1");
    record110.set("academicYear", "2025-2026");
  try {
    app.save(record110);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record111 = new Record(collection);
    record111.id = "phnixhnb2i9nedi";
    const record111_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC006'");
    if (!record111_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC006'\""); }
    record111.set("studentId", record111_studentIdLookup.id);
    const record111_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301L'");
    if (!record111_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301L'\""); }
    record111.set("courseId", record111_courseIdLookup.id);
    record111.set("semester", "3");
    record111.set("academicYear", "2025-2026");
  try {
    app.save(record111);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record112 = new Record(collection);
    record112.id = "9ynskd173dmif8j";
    const record112_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC007'");
    if (!record112_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC007'\""); }
    record112.set("studentId", record112_studentIdLookup.id);
    const record112_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101'");
    if (!record112_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101'\""); }
    record112.set("courseId", record112_courseIdLookup.id);
    record112.set("semester", "1");
    record112.set("academicYear", "2025-2026");
  try {
    app.save(record112);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record113 = new Record(collection);
    record113.id = "cefxsjvkp1eayhe";
    const record113_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC007'");
    if (!record113_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC007'\""); }
    record113.set("studentId", record113_studentIdLookup.id);
    const record113_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201'");
    if (!record113_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201'\""); }
    record113.set("courseId", record113_courseIdLookup.id);
    record113.set("semester", "2");
    record113.set("academicYear", "2025-2026");
  try {
    app.save(record113);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record114 = new Record(collection);
    record114.id = "ehio4zhqgh9yvyt";
    const record114_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC007'");
    if (!record114_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC007'\""); }
    record114.set("studentId", record114_studentIdLookup.id);
    const record114_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301'");
    if (!record114_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301'\""); }
    record114.set("courseId", record114_courseIdLookup.id);
    record114.set("semester", "3");
    record114.set("academicYear", "2025-2026");
  try {
    app.save(record114);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record115 = new Record(collection);
    record115.id = "6c3rrc2haunwroa";
    const record115_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC007'");
    if (!record115_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC007'\""); }
    record115.set("studentId", record115_studentIdLookup.id);
    const record115_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC401'");
    if (!record115_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC401'\""); }
    record115.set("courseId", record115_courseIdLookup.id);
    record115.set("semester", "4");
    record115.set("academicYear", "2025-2026");
  try {
    app.save(record115);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record116 = new Record(collection);
    record116.id = "dvzoqsbxh0olv10";
    const record116_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC007'");
    if (!record116_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC007'\""); }
    record116.set("studentId", record116_studentIdLookup.id);
    const record116_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC601'");
    if (!record116_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC601'\""); }
    record116.set("courseId", record116_courseIdLookup.id);
    record116.set("semester", "6");
    record116.set("academicYear", "2025-2026");
  try {
    app.save(record116);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record117 = new Record(collection);
    record117.id = "kvp8wx6cf7f8b67";
    const record117_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC007'");
    if (!record117_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC007'\""); }
    record117.set("studentId", record117_studentIdLookup.id);
    const record117_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201L'");
    if (!record117_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201L'\""); }
    record117.set("courseId", record117_courseIdLookup.id);
    record117.set("semester", "2");
    record117.set("academicYear", "2025-2026");
  try {
    app.save(record117);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record118 = new Record(collection);
    record118.id = "j5lmini1cd1bj7u";
    const record118_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC007'");
    if (!record118_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC007'\""); }
    record118.set("studentId", record118_studentIdLookup.id);
    const record118_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301L'");
    if (!record118_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301L'\""); }
    record118.set("courseId", record118_courseIdLookup.id);
    record118.set("semester", "3");
    record118.set("academicYear", "2025-2026");
  try {
    app.save(record118);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record119 = new Record(collection);
    record119.id = "9gegka9gem2rkda";
    const record119_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC008'");
    if (!record119_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC008'\""); }
    record119.set("studentId", record119_studentIdLookup.id);
    const record119_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101'");
    if (!record119_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101'\""); }
    record119.set("courseId", record119_courseIdLookup.id);
    record119.set("semester", "1");
    record119.set("academicYear", "2025-2026");
  try {
    app.save(record119);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record120 = new Record(collection);
    record120.id = "t3zxjec9ftmel98";
    const record120_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC008'");
    if (!record120_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC008'\""); }
    record120.set("studentId", record120_studentIdLookup.id);
    const record120_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201'");
    if (!record120_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201'\""); }
    record120.set("courseId", record120_courseIdLookup.id);
    record120.set("semester", "2");
    record120.set("academicYear", "2025-2026");
  try {
    app.save(record120);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record121 = new Record(collection);
    record121.id = "qq344k9zzp5gjaz";
    const record121_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC008'");
    if (!record121_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC008'\""); }
    record121.set("studentId", record121_studentIdLookup.id);
    const record121_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301'");
    if (!record121_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301'\""); }
    record121.set("courseId", record121_courseIdLookup.id);
    record121.set("semester", "3");
    record121.set("academicYear", "2025-2026");
  try {
    app.save(record121);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record122 = new Record(collection);
    record122.id = "4hxobsaurc5j5cb";
    const record122_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC008'");
    if (!record122_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC008'\""); }
    record122.set("studentId", record122_studentIdLookup.id);
    const record122_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC401'");
    if (!record122_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC401'\""); }
    record122.set("courseId", record122_courseIdLookup.id);
    record122.set("semester", "4");
    record122.set("academicYear", "2025-2026");
  try {
    app.save(record122);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record123 = new Record(collection);
    record123.id = "m4ly8at1as3on4u";
    const record123_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC008'");
    if (!record123_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC008'\""); }
    record123.set("studentId", record123_studentIdLookup.id);
    const record123_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC501'");
    if (!record123_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC501'\""); }
    record123.set("courseId", record123_courseIdLookup.id);
    record123.set("semester", "5");
    record123.set("academicYear", "2025-2026");
  try {
    app.save(record123);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record124 = new Record(collection);
    record124.id = "7jd6x8d9j4t4q4b";
    const record124_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC008'");
    if (!record124_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC008'\""); }
    record124.set("studentId", record124_studentIdLookup.id);
    const record124_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101L'");
    if (!record124_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101L'\""); }
    record124.set("courseId", record124_courseIdLookup.id);
    record124.set("semester", "1");
    record124.set("academicYear", "2025-2026");
  try {
    app.save(record124);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record125 = new Record(collection);
    record125.id = "nkt8yyxjemvm94i";
    const record125_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC008'");
    if (!record125_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC008'\""); }
    record125.set("studentId", record125_studentIdLookup.id);
    const record125_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201L'");
    if (!record125_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201L'\""); }
    record125.set("courseId", record125_courseIdLookup.id);
    record125.set("semester", "2");
    record125.set("academicYear", "2025-2026");
  try {
    app.save(record125);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record126 = new Record(collection);
    record126.id = "bez2clheof3kk9q";
    const record126_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC009'");
    if (!record126_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC009'\""); }
    record126.set("studentId", record126_studentIdLookup.id);
    const record126_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101'");
    if (!record126_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101'\""); }
    record126.set("courseId", record126_courseIdLookup.id);
    record126.set("semester", "1");
    record126.set("academicYear", "2025-2026");
  try {
    app.save(record126);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record127 = new Record(collection);
    record127.id = "7iyeoqf79rudbga";
    const record127_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC009'");
    if (!record127_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC009'\""); }
    record127.set("studentId", record127_studentIdLookup.id);
    const record127_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201'");
    if (!record127_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201'\""); }
    record127.set("courseId", record127_courseIdLookup.id);
    record127.set("semester", "2");
    record127.set("academicYear", "2025-2026");
  try {
    app.save(record127);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record128 = new Record(collection);
    record128.id = "hqke8nm660rx1nw";
    const record128_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC009'");
    if (!record128_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC009'\""); }
    record128.set("studentId", record128_studentIdLookup.id);
    const record128_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301'");
    if (!record128_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301'\""); }
    record128.set("courseId", record128_courseIdLookup.id);
    record128.set("semester", "3");
    record128.set("academicYear", "2025-2026");
  try {
    app.save(record128);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record129 = new Record(collection);
    record129.id = "ew0vy5eteb7c562";
    const record129_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC009'");
    if (!record129_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC009'\""); }
    record129.set("studentId", record129_studentIdLookup.id);
    const record129_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC401'");
    if (!record129_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC401'\""); }
    record129.set("courseId", record129_courseIdLookup.id);
    record129.set("semester", "4");
    record129.set("academicYear", "2025-2026");
  try {
    app.save(record129);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record130 = new Record(collection);
    record130.id = "ol92xgv3dq45vve";
    const record130_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC009'");
    if (!record130_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC009'\""); }
    record130.set("studentId", record130_studentIdLookup.id);
    const record130_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC601'");
    if (!record130_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC601'\""); }
    record130.set("courseId", record130_courseIdLookup.id);
    record130.set("semester", "6");
    record130.set("academicYear", "2025-2026");
  try {
    app.save(record130);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record131 = new Record(collection);
    record131.id = "n05n6oueiwz561t";
    const record131_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC009'");
    if (!record131_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC009'\""); }
    record131.set("studentId", record131_studentIdLookup.id);
    const record131_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101L'");
    if (!record131_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101L'\""); }
    record131.set("courseId", record131_courseIdLookup.id);
    record131.set("semester", "1");
    record131.set("academicYear", "2025-2026");
  try {
    app.save(record131);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record132 = new Record(collection);
    record132.id = "ouetf6wz4gtlhg3";
    const record132_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC009'");
    if (!record132_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC009'\""); }
    record132.set("studentId", record132_studentIdLookup.id);
    const record132_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301L'");
    if (!record132_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301L'\""); }
    record132.set("courseId", record132_courseIdLookup.id);
    record132.set("semester", "3");
    record132.set("academicYear", "2025-2026");
  try {
    app.save(record132);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record133 = new Record(collection);
    record133.id = "1otf86rpvogeo3m";
    const record133_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC010'");
    if (!record133_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC010'\""); }
    record133.set("studentId", record133_studentIdLookup.id);
    const record133_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC101'");
    if (!record133_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC101'\""); }
    record133.set("courseId", record133_courseIdLookup.id);
    record133.set("semester", "1");
    record133.set("academicYear", "2025-2026");
  try {
    app.save(record133);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record134 = new Record(collection);
    record134.id = "m010p29sekfvn7c";
    const record134_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC010'");
    if (!record134_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC010'\""); }
    record134.set("studentId", record134_studentIdLookup.id);
    const record134_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201'");
    if (!record134_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201'\""); }
    record134.set("courseId", record134_courseIdLookup.id);
    record134.set("semester", "2");
    record134.set("academicYear", "2025-2026");
  try {
    app.save(record134);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record135 = new Record(collection);
    record135.id = "99dgyk01pclz6sz";
    const record135_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC010'");
    if (!record135_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC010'\""); }
    record135.set("studentId", record135_studentIdLookup.id);
    const record135_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301'");
    if (!record135_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301'\""); }
    record135.set("courseId", record135_courseIdLookup.id);
    record135.set("semester", "3");
    record135.set("academicYear", "2025-2026");
  try {
    app.save(record135);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record136 = new Record(collection);
    record136.id = "52k7obxegybkvvg";
    const record136_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC010'");
    if (!record136_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC010'\""); }
    record136.set("studentId", record136_studentIdLookup.id);
    const record136_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC401'");
    if (!record136_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC401'\""); }
    record136.set("courseId", record136_courseIdLookup.id);
    record136.set("semester", "4");
    record136.set("academicYear", "2025-2026");
  try {
    app.save(record136);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record137 = new Record(collection);
    record137.id = "xqbrt05o2wsfctf";
    const record137_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC010'");
    if (!record137_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC010'\""); }
    record137.set("studentId", record137_studentIdLookup.id);
    const record137_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC501'");
    if (!record137_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC501'\""); }
    record137.set("courseId", record137_courseIdLookup.id);
    record137.set("semester", "5");
    record137.set("academicYear", "2025-2026");
  try {
    app.save(record137);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record138 = new Record(collection);
    record138.id = "9j7etsngkgposf0";
    const record138_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC010'");
    if (!record138_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC010'\""); }
    record138.set("studentId", record138_studentIdLookup.id);
    const record138_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC201L'");
    if (!record138_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC201L'\""); }
    record138.set("courseId", record138_courseIdLookup.id);
    record138.set("semester", "2");
    record138.set("academicYear", "2025-2026");
  try {
    app.save(record138);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record139 = new Record(collection);
    record139.id = "e25sxo2w5fcgqli";
    const record139_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'EC010'");
    if (!record139_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'EC010'\""); }
    record139.set("studentId", record139_studentIdLookup.id);
    const record139_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'EC301L'");
    if (!record139_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'EC301L'\""); }
    record139.set("courseId", record139_courseIdLookup.id);
    record139.set("semester", "3");
    record139.set("academicYear", "2025-2026");
  try {
    app.save(record139);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record140 = new Record(collection);
    record140.id = "n5qk469nntn3az9";
    const record140_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME001'");
    if (!record140_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME001'\""); }
    record140.set("studentId", record140_studentIdLookup.id);
    const record140_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101'");
    if (!record140_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101'\""); }
    record140.set("courseId", record140_courseIdLookup.id);
    record140.set("semester", "1");
    record140.set("academicYear", "2025-2026");
  try {
    app.save(record140);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record141 = new Record(collection);
    record141.id = "ryft0hogal5qrme";
    const record141_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME001'");
    if (!record141_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME001'\""); }
    record141.set("studentId", record141_studentIdLookup.id);
    const record141_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201'");
    if (!record141_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201'\""); }
    record141.set("courseId", record141_courseIdLookup.id);
    record141.set("semester", "2");
    record141.set("academicYear", "2025-2026");
  try {
    app.save(record141);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record142 = new Record(collection);
    record142.id = "iiego2nftbgs5xs";
    const record142_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME001'");
    if (!record142_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME001'\""); }
    record142.set("studentId", record142_studentIdLookup.id);
    const record142_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301'");
    if (!record142_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301'\""); }
    record142.set("courseId", record142_courseIdLookup.id);
    record142.set("semester", "3");
    record142.set("academicYear", "2025-2026");
  try {
    app.save(record142);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record143 = new Record(collection);
    record143.id = "xpvolnet01djgvz";
    const record143_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME001'");
    if (!record143_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME001'\""); }
    record143.set("studentId", record143_studentIdLookup.id);
    const record143_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME401'");
    if (!record143_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME401'\""); }
    record143.set("courseId", record143_courseIdLookup.id);
    record143.set("semester", "4");
    record143.set("academicYear", "2025-2026");
  try {
    app.save(record143);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record144 = new Record(collection);
    record144.id = "d3f9ag54rayg8k6";
    const record144_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME001'");
    if (!record144_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME001'\""); }
    record144.set("studentId", record144_studentIdLookup.id);
    const record144_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME501'");
    if (!record144_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME501'\""); }
    record144.set("courseId", record144_courseIdLookup.id);
    record144.set("semester", "5");
    record144.set("academicYear", "2025-2026");
  try {
    app.save(record144);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record145 = new Record(collection);
    record145.id = "22jnvpzj9z7b9vc";
    const record145_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME001'");
    if (!record145_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME001'\""); }
    record145.set("studentId", record145_studentIdLookup.id);
    const record145_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101L'");
    if (!record145_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101L'\""); }
    record145.set("courseId", record145_courseIdLookup.id);
    record145.set("semester", "1");
    record145.set("academicYear", "2025-2026");
  try {
    app.save(record145);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record146 = new Record(collection);
    record146.id = "7y1z6jmtf3w5qvm";
    const record146_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME001'");
    if (!record146_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME001'\""); }
    record146.set("studentId", record146_studentIdLookup.id);
    const record146_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201L'");
    if (!record146_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201L'\""); }
    record146.set("courseId", record146_courseIdLookup.id);
    record146.set("semester", "2");
    record146.set("academicYear", "2025-2026");
  try {
    app.save(record146);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record147 = new Record(collection);
    record147.id = "hc9jgelsui9qcnv";
    const record147_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME002'");
    if (!record147_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME002'\""); }
    record147.set("studentId", record147_studentIdLookup.id);
    const record147_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101'");
    if (!record147_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101'\""); }
    record147.set("courseId", record147_courseIdLookup.id);
    record147.set("semester", "1");
    record147.set("academicYear", "2025-2026");
  try {
    app.save(record147);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record148 = new Record(collection);
    record148.id = "agmjdw9094tsq0b";
    const record148_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME002'");
    if (!record148_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME002'\""); }
    record148.set("studentId", record148_studentIdLookup.id);
    const record148_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201'");
    if (!record148_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201'\""); }
    record148.set("courseId", record148_courseIdLookup.id);
    record148.set("semester", "2");
    record148.set("academicYear", "2025-2026");
  try {
    app.save(record148);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record149 = new Record(collection);
    record149.id = "jxh7kmxc8fg1xwg";
    const record149_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME002'");
    if (!record149_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME002'\""); }
    record149.set("studentId", record149_studentIdLookup.id);
    const record149_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301'");
    if (!record149_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301'\""); }
    record149.set("courseId", record149_courseIdLookup.id);
    record149.set("semester", "3");
    record149.set("academicYear", "2025-2026");
  try {
    app.save(record149);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record150 = new Record(collection);
    record150.id = "xeitke9jqbx4kmi";
    const record150_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME002'");
    if (!record150_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME002'\""); }
    record150.set("studentId", record150_studentIdLookup.id);
    const record150_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME401'");
    if (!record150_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME401'\""); }
    record150.set("courseId", record150_courseIdLookup.id);
    record150.set("semester", "4");
    record150.set("academicYear", "2025-2026");
  try {
    app.save(record150);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record151 = new Record(collection);
    record151.id = "p8maoj4wvs9j9h6";
    const record151_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME002'");
    if (!record151_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME002'\""); }
    record151.set("studentId", record151_studentIdLookup.id);
    const record151_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME501'");
    if (!record151_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME501'\""); }
    record151.set("courseId", record151_courseIdLookup.id);
    record151.set("semester", "5");
    record151.set("academicYear", "2025-2026");
  try {
    app.save(record151);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record152 = new Record(collection);
    record152.id = "l408m5u3n2nqcup";
    const record152_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME002'");
    if (!record152_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME002'\""); }
    record152.set("studentId", record152_studentIdLookup.id);
    const record152_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101L'");
    if (!record152_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101L'\""); }
    record152.set("courseId", record152_courseIdLookup.id);
    record152.set("semester", "1");
    record152.set("academicYear", "2025-2026");
  try {
    app.save(record152);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record153 = new Record(collection);
    record153.id = "saps1roj2zolrz5";
    const record153_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME002'");
    if (!record153_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME002'\""); }
    record153.set("studentId", record153_studentIdLookup.id);
    const record153_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201L'");
    if (!record153_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201L'\""); }
    record153.set("courseId", record153_courseIdLookup.id);
    record153.set("semester", "2");
    record153.set("academicYear", "2025-2026");
  try {
    app.save(record153);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record154 = new Record(collection);
    record154.id = "1ns5tw2j301tr69";
    const record154_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME003'");
    if (!record154_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME003'\""); }
    record154.set("studentId", record154_studentIdLookup.id);
    const record154_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101'");
    if (!record154_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101'\""); }
    record154.set("courseId", record154_courseIdLookup.id);
    record154.set("semester", "1");
    record154.set("academicYear", "2025-2026");
  try {
    app.save(record154);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record155 = new Record(collection);
    record155.id = "eu0oe55hbcvam1j";
    const record155_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME003'");
    if (!record155_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME003'\""); }
    record155.set("studentId", record155_studentIdLookup.id);
    const record155_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201'");
    if (!record155_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201'\""); }
    record155.set("courseId", record155_courseIdLookup.id);
    record155.set("semester", "2");
    record155.set("academicYear", "2025-2026");
  try {
    app.save(record155);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record156 = new Record(collection);
    record156.id = "4t43gam7zoh3etv";
    const record156_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME003'");
    if (!record156_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME003'\""); }
    record156.set("studentId", record156_studentIdLookup.id);
    const record156_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301'");
    if (!record156_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301'\""); }
    record156.set("courseId", record156_courseIdLookup.id);
    record156.set("semester", "3");
    record156.set("academicYear", "2025-2026");
  try {
    app.save(record156);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record157 = new Record(collection);
    record157.id = "22pqoooekdgx1v1";
    const record157_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME003'");
    if (!record157_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME003'\""); }
    record157.set("studentId", record157_studentIdLookup.id);
    const record157_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME401'");
    if (!record157_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME401'\""); }
    record157.set("courseId", record157_courseIdLookup.id);
    record157.set("semester", "4");
    record157.set("academicYear", "2025-2026");
  try {
    app.save(record157);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record158 = new Record(collection);
    record158.id = "stq5ipug0ziw2dv";
    const record158_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME003'");
    if (!record158_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME003'\""); }
    record158.set("studentId", record158_studentIdLookup.id);
    const record158_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME601'");
    if (!record158_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME601'\""); }
    record158.set("courseId", record158_courseIdLookup.id);
    record158.set("semester", "6");
    record158.set("academicYear", "2025-2026");
  try {
    app.save(record158);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record159 = new Record(collection);
    record159.id = "cp74ligojz91ajb";
    const record159_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME003'");
    if (!record159_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME003'\""); }
    record159.set("studentId", record159_studentIdLookup.id);
    const record159_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101L'");
    if (!record159_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101L'\""); }
    record159.set("courseId", record159_courseIdLookup.id);
    record159.set("semester", "1");
    record159.set("academicYear", "2025-2026");
  try {
    app.save(record159);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record160 = new Record(collection);
    record160.id = "54gxzi9x6x4qrz4";
    const record160_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME003'");
    if (!record160_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME003'\""); }
    record160.set("studentId", record160_studentIdLookup.id);
    const record160_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301L'");
    if (!record160_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301L'\""); }
    record160.set("courseId", record160_courseIdLookup.id);
    record160.set("semester", "3");
    record160.set("academicYear", "2025-2026");
  try {
    app.save(record160);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record161 = new Record(collection);
    record161.id = "og1m801eifeotfz";
    const record161_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME004'");
    if (!record161_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME004'\""); }
    record161.set("studentId", record161_studentIdLookup.id);
    const record161_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101'");
    if (!record161_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101'\""); }
    record161.set("courseId", record161_courseIdLookup.id);
    record161.set("semester", "1");
    record161.set("academicYear", "2025-2026");
  try {
    app.save(record161);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record162 = new Record(collection);
    record162.id = "2pxtu0vx395mupv";
    const record162_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME004'");
    if (!record162_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME004'\""); }
    record162.set("studentId", record162_studentIdLookup.id);
    const record162_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201'");
    if (!record162_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201'\""); }
    record162.set("courseId", record162_courseIdLookup.id);
    record162.set("semester", "2");
    record162.set("academicYear", "2025-2026");
  try {
    app.save(record162);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record163 = new Record(collection);
    record163.id = "x45xa54m21ddbx6";
    const record163_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME004'");
    if (!record163_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME004'\""); }
    record163.set("studentId", record163_studentIdLookup.id);
    const record163_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301'");
    if (!record163_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301'\""); }
    record163.set("courseId", record163_courseIdLookup.id);
    record163.set("semester", "3");
    record163.set("academicYear", "2025-2026");
  try {
    app.save(record163);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record164 = new Record(collection);
    record164.id = "vu0571ruh855qte";
    const record164_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME004'");
    if (!record164_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME004'\""); }
    record164.set("studentId", record164_studentIdLookup.id);
    const record164_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME401'");
    if (!record164_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME401'\""); }
    record164.set("courseId", record164_courseIdLookup.id);
    record164.set("semester", "4");
    record164.set("academicYear", "2025-2026");
  try {
    app.save(record164);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record165 = new Record(collection);
    record165.id = "kyy599c4sxmmzjn";
    const record165_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME004'");
    if (!record165_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME004'\""); }
    record165.set("studentId", record165_studentIdLookup.id);
    const record165_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME501'");
    if (!record165_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME501'\""); }
    record165.set("courseId", record165_courseIdLookup.id);
    record165.set("semester", "5");
    record165.set("academicYear", "2025-2026");
  try {
    app.save(record165);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record166 = new Record(collection);
    record166.id = "203pc4bbl9kt5g9";
    const record166_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME004'");
    if (!record166_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME004'\""); }
    record166.set("studentId", record166_studentIdLookup.id);
    const record166_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201L'");
    if (!record166_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201L'\""); }
    record166.set("courseId", record166_courseIdLookup.id);
    record166.set("semester", "2");
    record166.set("academicYear", "2025-2026");
  try {
    app.save(record166);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record167 = new Record(collection);
    record167.id = "ixoy9s883jbnz6w";
    const record167_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME004'");
    if (!record167_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME004'\""); }
    record167.set("studentId", record167_studentIdLookup.id);
    const record167_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301L'");
    if (!record167_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301L'\""); }
    record167.set("courseId", record167_courseIdLookup.id);
    record167.set("semester", "3");
    record167.set("academicYear", "2025-2026");
  try {
    app.save(record167);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record168 = new Record(collection);
    record168.id = "lud6xuyrupua1pl";
    const record168_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME005'");
    if (!record168_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME005'\""); }
    record168.set("studentId", record168_studentIdLookup.id);
    const record168_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101'");
    if (!record168_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101'\""); }
    record168.set("courseId", record168_courseIdLookup.id);
    record168.set("semester", "1");
    record168.set("academicYear", "2025-2026");
  try {
    app.save(record168);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record169 = new Record(collection);
    record169.id = "9a263jn9x4lwx23";
    const record169_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME005'");
    if (!record169_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME005'\""); }
    record169.set("studentId", record169_studentIdLookup.id);
    const record169_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201'");
    if (!record169_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201'\""); }
    record169.set("courseId", record169_courseIdLookup.id);
    record169.set("semester", "2");
    record169.set("academicYear", "2025-2026");
  try {
    app.save(record169);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record170 = new Record(collection);
    record170.id = "oacf5qon9jez5ab";
    const record170_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME005'");
    if (!record170_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME005'\""); }
    record170.set("studentId", record170_studentIdLookup.id);
    const record170_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301'");
    if (!record170_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301'\""); }
    record170.set("courseId", record170_courseIdLookup.id);
    record170.set("semester", "3");
    record170.set("academicYear", "2025-2026");
  try {
    app.save(record170);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record171 = new Record(collection);
    record171.id = "zd3t0ale2srsplq";
    const record171_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME005'");
    if (!record171_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME005'\""); }
    record171.set("studentId", record171_studentIdLookup.id);
    const record171_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME401'");
    if (!record171_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME401'\""); }
    record171.set("courseId", record171_courseIdLookup.id);
    record171.set("semester", "4");
    record171.set("academicYear", "2025-2026");
  try {
    app.save(record171);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record172 = new Record(collection);
    record172.id = "j9gc48bvnbwt5tl";
    const record172_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME005'");
    if (!record172_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME005'\""); }
    record172.set("studentId", record172_studentIdLookup.id);
    const record172_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME601'");
    if (!record172_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME601'\""); }
    record172.set("courseId", record172_courseIdLookup.id);
    record172.set("semester", "6");
    record172.set("academicYear", "2025-2026");
  try {
    app.save(record172);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record173 = new Record(collection);
    record173.id = "bqqooi44uo01un3";
    const record173_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME005'");
    if (!record173_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME005'\""); }
    record173.set("studentId", record173_studentIdLookup.id);
    const record173_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101L'");
    if (!record173_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101L'\""); }
    record173.set("courseId", record173_courseIdLookup.id);
    record173.set("semester", "1");
    record173.set("academicYear", "2025-2026");
  try {
    app.save(record173);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record174 = new Record(collection);
    record174.id = "uubrg8p24jwa7r1";
    const record174_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME005'");
    if (!record174_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME005'\""); }
    record174.set("studentId", record174_studentIdLookup.id);
    const record174_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201L'");
    if (!record174_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201L'\""); }
    record174.set("courseId", record174_courseIdLookup.id);
    record174.set("semester", "2");
    record174.set("academicYear", "2025-2026");
  try {
    app.save(record174);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record175 = new Record(collection);
    record175.id = "zmlue90jmt5on6b";
    const record175_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME006'");
    if (!record175_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME006'\""); }
    record175.set("studentId", record175_studentIdLookup.id);
    const record175_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101'");
    if (!record175_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101'\""); }
    record175.set("courseId", record175_courseIdLookup.id);
    record175.set("semester", "1");
    record175.set("academicYear", "2025-2026");
  try {
    app.save(record175);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record176 = new Record(collection);
    record176.id = "fyurnedcj9lnvc8";
    const record176_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME006'");
    if (!record176_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME006'\""); }
    record176.set("studentId", record176_studentIdLookup.id);
    const record176_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201'");
    if (!record176_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201'\""); }
    record176.set("courseId", record176_courseIdLookup.id);
    record176.set("semester", "2");
    record176.set("academicYear", "2025-2026");
  try {
    app.save(record176);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record177 = new Record(collection);
    record177.id = "56fn5nf9cibohfb";
    const record177_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME006'");
    if (!record177_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME006'\""); }
    record177.set("studentId", record177_studentIdLookup.id);
    const record177_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301'");
    if (!record177_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301'\""); }
    record177.set("courseId", record177_courseIdLookup.id);
    record177.set("semester", "3");
    record177.set("academicYear", "2025-2026");
  try {
    app.save(record177);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record178 = new Record(collection);
    record178.id = "ez350mek37ts5u1";
    const record178_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME006'");
    if (!record178_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME006'\""); }
    record178.set("studentId", record178_studentIdLookup.id);
    const record178_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME401'");
    if (!record178_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME401'\""); }
    record178.set("courseId", record178_courseIdLookup.id);
    record178.set("semester", "4");
    record178.set("academicYear", "2025-2026");
  try {
    app.save(record178);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record179 = new Record(collection);
    record179.id = "3grme0efs29nzzw";
    const record179_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME006'");
    if (!record179_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME006'\""); }
    record179.set("studentId", record179_studentIdLookup.id);
    const record179_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME501'");
    if (!record179_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME501'\""); }
    record179.set("courseId", record179_courseIdLookup.id);
    record179.set("semester", "5");
    record179.set("academicYear", "2025-2026");
  try {
    app.save(record179);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record180 = new Record(collection);
    record180.id = "2nf1i1dg50g40tj";
    const record180_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME006'");
    if (!record180_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME006'\""); }
    record180.set("studentId", record180_studentIdLookup.id);
    const record180_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101L'");
    if (!record180_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101L'\""); }
    record180.set("courseId", record180_courseIdLookup.id);
    record180.set("semester", "1");
    record180.set("academicYear", "2025-2026");
  try {
    app.save(record180);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record181 = new Record(collection);
    record181.id = "sp9hs1bodnw0i88";
    const record181_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME006'");
    if (!record181_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME006'\""); }
    record181.set("studentId", record181_studentIdLookup.id);
    const record181_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301L'");
    if (!record181_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301L'\""); }
    record181.set("courseId", record181_courseIdLookup.id);
    record181.set("semester", "3");
    record181.set("academicYear", "2025-2026");
  try {
    app.save(record181);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record182 = new Record(collection);
    record182.id = "89twvyzb42owplu";
    const record182_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME007'");
    if (!record182_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME007'\""); }
    record182.set("studentId", record182_studentIdLookup.id);
    const record182_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101'");
    if (!record182_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101'\""); }
    record182.set("courseId", record182_courseIdLookup.id);
    record182.set("semester", "1");
    record182.set("academicYear", "2025-2026");
  try {
    app.save(record182);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record183 = new Record(collection);
    record183.id = "4jlmtamjn2l9uwp";
    const record183_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME007'");
    if (!record183_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME007'\""); }
    record183.set("studentId", record183_studentIdLookup.id);
    const record183_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201'");
    if (!record183_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201'\""); }
    record183.set("courseId", record183_courseIdLookup.id);
    record183.set("semester", "2");
    record183.set("academicYear", "2025-2026");
  try {
    app.save(record183);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record184 = new Record(collection);
    record184.id = "bfvgk9fgrn1xe01";
    const record184_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME007'");
    if (!record184_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME007'\""); }
    record184.set("studentId", record184_studentIdLookup.id);
    const record184_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301'");
    if (!record184_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301'\""); }
    record184.set("courseId", record184_courseIdLookup.id);
    record184.set("semester", "3");
    record184.set("academicYear", "2025-2026");
  try {
    app.save(record184);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record185 = new Record(collection);
    record185.id = "4tk09sn27nwvm3z";
    const record185_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME007'");
    if (!record185_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME007'\""); }
    record185.set("studentId", record185_studentIdLookup.id);
    const record185_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME401'");
    if (!record185_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME401'\""); }
    record185.set("courseId", record185_courseIdLookup.id);
    record185.set("semester", "4");
    record185.set("academicYear", "2025-2026");
  try {
    app.save(record185);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record186 = new Record(collection);
    record186.id = "rtv3607d8sc0nl4";
    const record186_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME007'");
    if (!record186_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME007'\""); }
    record186.set("studentId", record186_studentIdLookup.id);
    const record186_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME601'");
    if (!record186_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME601'\""); }
    record186.set("courseId", record186_courseIdLookup.id);
    record186.set("semester", "6");
    record186.set("academicYear", "2025-2026");
  try {
    app.save(record186);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record187 = new Record(collection);
    record187.id = "bgz1ezslb7e1xu6";
    const record187_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME007'");
    if (!record187_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME007'\""); }
    record187.set("studentId", record187_studentIdLookup.id);
    const record187_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201L'");
    if (!record187_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201L'\""); }
    record187.set("courseId", record187_courseIdLookup.id);
    record187.set("semester", "2");
    record187.set("academicYear", "2025-2026");
  try {
    app.save(record187);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record188 = new Record(collection);
    record188.id = "etejm58k0h1e504";
    const record188_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME007'");
    if (!record188_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME007'\""); }
    record188.set("studentId", record188_studentIdLookup.id);
    const record188_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301L'");
    if (!record188_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301L'\""); }
    record188.set("courseId", record188_courseIdLookup.id);
    record188.set("semester", "3");
    record188.set("academicYear", "2025-2026");
  try {
    app.save(record188);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record189 = new Record(collection);
    record189.id = "6ksr4sl5ea674ce";
    const record189_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME008'");
    if (!record189_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME008'\""); }
    record189.set("studentId", record189_studentIdLookup.id);
    const record189_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101'");
    if (!record189_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101'\""); }
    record189.set("courseId", record189_courseIdLookup.id);
    record189.set("semester", "1");
    record189.set("academicYear", "2025-2026");
  try {
    app.save(record189);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record190 = new Record(collection);
    record190.id = "fry1xuzwanvhtaq";
    const record190_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME008'");
    if (!record190_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME008'\""); }
    record190.set("studentId", record190_studentIdLookup.id);
    const record190_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201'");
    if (!record190_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201'\""); }
    record190.set("courseId", record190_courseIdLookup.id);
    record190.set("semester", "2");
    record190.set("academicYear", "2025-2026");
  try {
    app.save(record190);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record191 = new Record(collection);
    record191.id = "8yciitdgrj7timp";
    const record191_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME008'");
    if (!record191_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME008'\""); }
    record191.set("studentId", record191_studentIdLookup.id);
    const record191_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301'");
    if (!record191_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301'\""); }
    record191.set("courseId", record191_courseIdLookup.id);
    record191.set("semester", "3");
    record191.set("academicYear", "2025-2026");
  try {
    app.save(record191);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record192 = new Record(collection);
    record192.id = "12wh6psajl5xcvj";
    const record192_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME008'");
    if (!record192_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME008'\""); }
    record192.set("studentId", record192_studentIdLookup.id);
    const record192_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME401'");
    if (!record192_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME401'\""); }
    record192.set("courseId", record192_courseIdLookup.id);
    record192.set("semester", "4");
    record192.set("academicYear", "2025-2026");
  try {
    app.save(record192);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record193 = new Record(collection);
    record193.id = "f69vng66j1i2ejs";
    const record193_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME008'");
    if (!record193_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME008'\""); }
    record193.set("studentId", record193_studentIdLookup.id);
    const record193_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME501'");
    if (!record193_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME501'\""); }
    record193.set("courseId", record193_courseIdLookup.id);
    record193.set("semester", "5");
    record193.set("academicYear", "2025-2026");
  try {
    app.save(record193);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record194 = new Record(collection);
    record194.id = "kc5itfigm24pimg";
    const record194_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME008'");
    if (!record194_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME008'\""); }
    record194.set("studentId", record194_studentIdLookup.id);
    const record194_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101L'");
    if (!record194_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101L'\""); }
    record194.set("courseId", record194_courseIdLookup.id);
    record194.set("semester", "1");
    record194.set("academicYear", "2025-2026");
  try {
    app.save(record194);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record195 = new Record(collection);
    record195.id = "72gzjkn8esibwgr";
    const record195_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME008'");
    if (!record195_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME008'\""); }
    record195.set("studentId", record195_studentIdLookup.id);
    const record195_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201L'");
    if (!record195_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201L'\""); }
    record195.set("courseId", record195_courseIdLookup.id);
    record195.set("semester", "2");
    record195.set("academicYear", "2025-2026");
  try {
    app.save(record195);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record196 = new Record(collection);
    record196.id = "8jq0zgmim86mxj0";
    const record196_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME009'");
    if (!record196_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME009'\""); }
    record196.set("studentId", record196_studentIdLookup.id);
    const record196_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101'");
    if (!record196_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101'\""); }
    record196.set("courseId", record196_courseIdLookup.id);
    record196.set("semester", "1");
    record196.set("academicYear", "2025-2026");
  try {
    app.save(record196);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record197 = new Record(collection);
    record197.id = "mornupkef52pf1d";
    const record197_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME009'");
    if (!record197_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME009'\""); }
    record197.set("studentId", record197_studentIdLookup.id);
    const record197_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201'");
    if (!record197_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201'\""); }
    record197.set("courseId", record197_courseIdLookup.id);
    record197.set("semester", "2");
    record197.set("academicYear", "2025-2026");
  try {
    app.save(record197);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record198 = new Record(collection);
    record198.id = "5eb8nngjyce6sf5";
    const record198_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME009'");
    if (!record198_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME009'\""); }
    record198.set("studentId", record198_studentIdLookup.id);
    const record198_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301'");
    if (!record198_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301'\""); }
    record198.set("courseId", record198_courseIdLookup.id);
    record198.set("semester", "3");
    record198.set("academicYear", "2025-2026");
  try {
    app.save(record198);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record199 = new Record(collection);
    record199.id = "fkjpa7i2a3mnc0c";
    const record199_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME009'");
    if (!record199_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME009'\""); }
    record199.set("studentId", record199_studentIdLookup.id);
    const record199_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME401'");
    if (!record199_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME401'\""); }
    record199.set("courseId", record199_courseIdLookup.id);
    record199.set("semester", "4");
    record199.set("academicYear", "2025-2026");
  try {
    app.save(record199);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record200 = new Record(collection);
    record200.id = "1581x2xqtzy09su";
    const record200_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME009'");
    if (!record200_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME009'\""); }
    record200.set("studentId", record200_studentIdLookup.id);
    const record200_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME601'");
    if (!record200_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME601'\""); }
    record200.set("courseId", record200_courseIdLookup.id);
    record200.set("semester", "6");
    record200.set("academicYear", "2025-2026");
  try {
    app.save(record200);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record201 = new Record(collection);
    record201.id = "mznlfy96rmnt4j3";
    const record201_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME009'");
    if (!record201_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME009'\""); }
    record201.set("studentId", record201_studentIdLookup.id);
    const record201_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101L'");
    if (!record201_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101L'\""); }
    record201.set("courseId", record201_courseIdLookup.id);
    record201.set("semester", "1");
    record201.set("academicYear", "2025-2026");
  try {
    app.save(record201);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record202 = new Record(collection);
    record202.id = "96wd9fqmtiu9hrr";
    const record202_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME009'");
    if (!record202_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME009'\""); }
    record202.set("studentId", record202_studentIdLookup.id);
    const record202_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301L'");
    if (!record202_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301L'\""); }
    record202.set("courseId", record202_courseIdLookup.id);
    record202.set("semester", "3");
    record202.set("academicYear", "2025-2026");
  try {
    app.save(record202);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record203 = new Record(collection);
    record203.id = "9r24rbh056bkovb";
    const record203_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME010'");
    if (!record203_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME010'\""); }
    record203.set("studentId", record203_studentIdLookup.id);
    const record203_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME101'");
    if (!record203_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME101'\""); }
    record203.set("courseId", record203_courseIdLookup.id);
    record203.set("semester", "1");
    record203.set("academicYear", "2025-2026");
  try {
    app.save(record203);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record204 = new Record(collection);
    record204.id = "z9npasu3htl5qqg";
    const record204_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME010'");
    if (!record204_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME010'\""); }
    record204.set("studentId", record204_studentIdLookup.id);
    const record204_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201'");
    if (!record204_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201'\""); }
    record204.set("courseId", record204_courseIdLookup.id);
    record204.set("semester", "2");
    record204.set("academicYear", "2025-2026");
  try {
    app.save(record204);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record205 = new Record(collection);
    record205.id = "6qclgjc446a7hnr";
    const record205_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME010'");
    if (!record205_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME010'\""); }
    record205.set("studentId", record205_studentIdLookup.id);
    const record205_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301'");
    if (!record205_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301'\""); }
    record205.set("courseId", record205_courseIdLookup.id);
    record205.set("semester", "3");
    record205.set("academicYear", "2025-2026");
  try {
    app.save(record205);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record206 = new Record(collection);
    record206.id = "vq1541oa4n52b5t";
    const record206_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME010'");
    if (!record206_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME010'\""); }
    record206.set("studentId", record206_studentIdLookup.id);
    const record206_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME401'");
    if (!record206_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME401'\""); }
    record206.set("courseId", record206_courseIdLookup.id);
    record206.set("semester", "4");
    record206.set("academicYear", "2025-2026");
  try {
    app.save(record206);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record207 = new Record(collection);
    record207.id = "a7rbttygbcbhwfw";
    const record207_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME010'");
    if (!record207_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME010'\""); }
    record207.set("studentId", record207_studentIdLookup.id);
    const record207_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME501'");
    if (!record207_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME501'\""); }
    record207.set("courseId", record207_courseIdLookup.id);
    record207.set("semester", "5");
    record207.set("academicYear", "2025-2026");
  try {
    app.save(record207);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record208 = new Record(collection);
    record208.id = "alr9u016z3mrkl5";
    const record208_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME010'");
    if (!record208_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME010'\""); }
    record208.set("studentId", record208_studentIdLookup.id);
    const record208_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME201L'");
    if (!record208_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME201L'\""); }
    record208.set("courseId", record208_courseIdLookup.id);
    record208.set("semester", "2");
    record208.set("academicYear", "2025-2026");
  try {
    app.save(record208);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record209 = new Record(collection);
    record209.id = "zyu2xq5jv3eru9f";
    const record209_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'ME010'");
    if (!record209_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'ME010'\""); }
    record209.set("studentId", record209_studentIdLookup.id);
    const record209_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'ME301L'");
    if (!record209_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'ME301L'\""); }
    record209.set("courseId", record209_courseIdLookup.id);
    record209.set("semester", "3");
    record209.set("academicYear", "2025-2026");
  try {
    app.save(record209);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record210 = new Record(collection);
    record210.id = "ulhvnml0tso6plj";
    const record210_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE001'");
    if (!record210_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE001'\""); }
    record210.set("studentId", record210_studentIdLookup.id);
    const record210_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101'");
    if (!record210_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101'\""); }
    record210.set("courseId", record210_courseIdLookup.id);
    record210.set("semester", "1");
    record210.set("academicYear", "2025-2026");
  try {
    app.save(record210);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record211 = new Record(collection);
    record211.id = "dnu17b4x3a0l24c";
    const record211_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE001'");
    if (!record211_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE001'\""); }
    record211.set("studentId", record211_studentIdLookup.id);
    const record211_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201'");
    if (!record211_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201'\""); }
    record211.set("courseId", record211_courseIdLookup.id);
    record211.set("semester", "2");
    record211.set("academicYear", "2025-2026");
  try {
    app.save(record211);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record212 = new Record(collection);
    record212.id = "s2iyinjc2lgsp09";
    const record212_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE001'");
    if (!record212_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE001'\""); }
    record212.set("studentId", record212_studentIdLookup.id);
    const record212_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301'");
    if (!record212_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301'\""); }
    record212.set("courseId", record212_courseIdLookup.id);
    record212.set("semester", "3");
    record212.set("academicYear", "2025-2026");
  try {
    app.save(record212);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record213 = new Record(collection);
    record213.id = "ocpacccckktp0m5";
    const record213_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE001'");
    if (!record213_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE001'\""); }
    record213.set("studentId", record213_studentIdLookup.id);
    const record213_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE401'");
    if (!record213_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE401'\""); }
    record213.set("courseId", record213_courseIdLookup.id);
    record213.set("semester", "4");
    record213.set("academicYear", "2025-2026");
  try {
    app.save(record213);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record214 = new Record(collection);
    record214.id = "47cwj7iirw3hhvo";
    const record214_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE001'");
    if (!record214_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE001'\""); }
    record214.set("studentId", record214_studentIdLookup.id);
    const record214_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE501'");
    if (!record214_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE501'\""); }
    record214.set("courseId", record214_courseIdLookup.id);
    record214.set("semester", "5");
    record214.set("academicYear", "2025-2026");
  try {
    app.save(record214);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record215 = new Record(collection);
    record215.id = "06xzo7koxs2oooj";
    const record215_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE001'");
    if (!record215_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE001'\""); }
    record215.set("studentId", record215_studentIdLookup.id);
    const record215_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101L'");
    if (!record215_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101L'\""); }
    record215.set("courseId", record215_courseIdLookup.id);
    record215.set("semester", "1");
    record215.set("academicYear", "2025-2026");
  try {
    app.save(record215);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record216 = new Record(collection);
    record216.id = "1f3pv95ts93f7mk";
    const record216_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE001'");
    if (!record216_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE001'\""); }
    record216.set("studentId", record216_studentIdLookup.id);
    const record216_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201L'");
    if (!record216_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201L'\""); }
    record216.set("courseId", record216_courseIdLookup.id);
    record216.set("semester", "2");
    record216.set("academicYear", "2025-2026");
  try {
    app.save(record216);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record217 = new Record(collection);
    record217.id = "nsw5qyhimr4dpo8";
    const record217_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE002'");
    if (!record217_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE002'\""); }
    record217.set("studentId", record217_studentIdLookup.id);
    const record217_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101'");
    if (!record217_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101'\""); }
    record217.set("courseId", record217_courseIdLookup.id);
    record217.set("semester", "1");
    record217.set("academicYear", "2025-2026");
  try {
    app.save(record217);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record218 = new Record(collection);
    record218.id = "ma7m52ekjfmwn55";
    const record218_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE002'");
    if (!record218_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE002'\""); }
    record218.set("studentId", record218_studentIdLookup.id);
    const record218_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201'");
    if (!record218_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201'\""); }
    record218.set("courseId", record218_courseIdLookup.id);
    record218.set("semester", "2");
    record218.set("academicYear", "2025-2026");
  try {
    app.save(record218);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record219 = new Record(collection);
    record219.id = "snprcsm77d1ywnn";
    const record219_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE002'");
    if (!record219_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE002'\""); }
    record219.set("studentId", record219_studentIdLookup.id);
    const record219_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301'");
    if (!record219_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301'\""); }
    record219.set("courseId", record219_courseIdLookup.id);
    record219.set("semester", "3");
    record219.set("academicYear", "2025-2026");
  try {
    app.save(record219);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record220 = new Record(collection);
    record220.id = "f9g48q7zd4fd7ro";
    const record220_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE002'");
    if (!record220_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE002'\""); }
    record220.set("studentId", record220_studentIdLookup.id);
    const record220_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE401'");
    if (!record220_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE401'\""); }
    record220.set("courseId", record220_courseIdLookup.id);
    record220.set("semester", "4");
    record220.set("academicYear", "2025-2026");
  try {
    app.save(record220);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record221 = new Record(collection);
    record221.id = "nmz46jacohupvqj";
    const record221_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE002'");
    if (!record221_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE002'\""); }
    record221.set("studentId", record221_studentIdLookup.id);
    const record221_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE501'");
    if (!record221_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE501'\""); }
    record221.set("courseId", record221_courseIdLookup.id);
    record221.set("semester", "5");
    record221.set("academicYear", "2025-2026");
  try {
    app.save(record221);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record222 = new Record(collection);
    record222.id = "snax2pzdleshkpo";
    const record222_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE002'");
    if (!record222_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE002'\""); }
    record222.set("studentId", record222_studentIdLookup.id);
    const record222_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101L'");
    if (!record222_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101L'\""); }
    record222.set("courseId", record222_courseIdLookup.id);
    record222.set("semester", "1");
    record222.set("academicYear", "2025-2026");
  try {
    app.save(record222);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record223 = new Record(collection);
    record223.id = "vy9uims2a70rkbs";
    const record223_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE002'");
    if (!record223_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE002'\""); }
    record223.set("studentId", record223_studentIdLookup.id);
    const record223_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201L'");
    if (!record223_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201L'\""); }
    record223.set("courseId", record223_courseIdLookup.id);
    record223.set("semester", "2");
    record223.set("academicYear", "2025-2026");
  try {
    app.save(record223);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record224 = new Record(collection);
    record224.id = "m8fykk4g34vm8wt";
    const record224_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE003'");
    if (!record224_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE003'\""); }
    record224.set("studentId", record224_studentIdLookup.id);
    const record224_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101'");
    if (!record224_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101'\""); }
    record224.set("courseId", record224_courseIdLookup.id);
    record224.set("semester", "1");
    record224.set("academicYear", "2025-2026");
  try {
    app.save(record224);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record225 = new Record(collection);
    record225.id = "ewcmy9cdn4q8vny";
    const record225_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE003'");
    if (!record225_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE003'\""); }
    record225.set("studentId", record225_studentIdLookup.id);
    const record225_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201'");
    if (!record225_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201'\""); }
    record225.set("courseId", record225_courseIdLookup.id);
    record225.set("semester", "2");
    record225.set("academicYear", "2025-2026");
  try {
    app.save(record225);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record226 = new Record(collection);
    record226.id = "xyiiiom34e656p3";
    const record226_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE003'");
    if (!record226_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE003'\""); }
    record226.set("studentId", record226_studentIdLookup.id);
    const record226_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301'");
    if (!record226_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301'\""); }
    record226.set("courseId", record226_courseIdLookup.id);
    record226.set("semester", "3");
    record226.set("academicYear", "2025-2026");
  try {
    app.save(record226);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record227 = new Record(collection);
    record227.id = "3r9olagsc1h7bqd";
    const record227_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE003'");
    if (!record227_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE003'\""); }
    record227.set("studentId", record227_studentIdLookup.id);
    const record227_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE401'");
    if (!record227_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE401'\""); }
    record227.set("courseId", record227_courseIdLookup.id);
    record227.set("semester", "4");
    record227.set("academicYear", "2025-2026");
  try {
    app.save(record227);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record228 = new Record(collection);
    record228.id = "mpk08c9e6w9pzpe";
    const record228_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE003'");
    if (!record228_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE003'\""); }
    record228.set("studentId", record228_studentIdLookup.id);
    const record228_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE601'");
    if (!record228_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE601'\""); }
    record228.set("courseId", record228_courseIdLookup.id);
    record228.set("semester", "6");
    record228.set("academicYear", "2025-2026");
  try {
    app.save(record228);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record229 = new Record(collection);
    record229.id = "6ztnfywtn3p3w3g";
    const record229_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE003'");
    if (!record229_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE003'\""); }
    record229.set("studentId", record229_studentIdLookup.id);
    const record229_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101L'");
    if (!record229_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101L'\""); }
    record229.set("courseId", record229_courseIdLookup.id);
    record229.set("semester", "1");
    record229.set("academicYear", "2025-2026");
  try {
    app.save(record229);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record230 = new Record(collection);
    record230.id = "uenmvzj6q3qyn6v";
    const record230_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE003'");
    if (!record230_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE003'\""); }
    record230.set("studentId", record230_studentIdLookup.id);
    const record230_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301L'");
    if (!record230_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301L'\""); }
    record230.set("courseId", record230_courseIdLookup.id);
    record230.set("semester", "3");
    record230.set("academicYear", "2025-2026");
  try {
    app.save(record230);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record231 = new Record(collection);
    record231.id = "j2tf34b6mvjclhg";
    const record231_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE004'");
    if (!record231_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE004'\""); }
    record231.set("studentId", record231_studentIdLookup.id);
    const record231_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101'");
    if (!record231_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101'\""); }
    record231.set("courseId", record231_courseIdLookup.id);
    record231.set("semester", "1");
    record231.set("academicYear", "2025-2026");
  try {
    app.save(record231);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record232 = new Record(collection);
    record232.id = "ijgfq40ayxybf6h";
    const record232_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE004'");
    if (!record232_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE004'\""); }
    record232.set("studentId", record232_studentIdLookup.id);
    const record232_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201'");
    if (!record232_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201'\""); }
    record232.set("courseId", record232_courseIdLookup.id);
    record232.set("semester", "2");
    record232.set("academicYear", "2025-2026");
  try {
    app.save(record232);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record233 = new Record(collection);
    record233.id = "sae8fyiuxzscztn";
    const record233_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE004'");
    if (!record233_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE004'\""); }
    record233.set("studentId", record233_studentIdLookup.id);
    const record233_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301'");
    if (!record233_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301'\""); }
    record233.set("courseId", record233_courseIdLookup.id);
    record233.set("semester", "3");
    record233.set("academicYear", "2025-2026");
  try {
    app.save(record233);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record234 = new Record(collection);
    record234.id = "sow8ne6tew7j86k";
    const record234_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE004'");
    if (!record234_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE004'\""); }
    record234.set("studentId", record234_studentIdLookup.id);
    const record234_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE401'");
    if (!record234_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE401'\""); }
    record234.set("courseId", record234_courseIdLookup.id);
    record234.set("semester", "4");
    record234.set("academicYear", "2025-2026");
  try {
    app.save(record234);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record235 = new Record(collection);
    record235.id = "f5unup2aj65qbfi";
    const record235_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE004'");
    if (!record235_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE004'\""); }
    record235.set("studentId", record235_studentIdLookup.id);
    const record235_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE501'");
    if (!record235_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE501'\""); }
    record235.set("courseId", record235_courseIdLookup.id);
    record235.set("semester", "5");
    record235.set("academicYear", "2025-2026");
  try {
    app.save(record235);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record236 = new Record(collection);
    record236.id = "9oqoekzvaxgrdxw";
    const record236_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE004'");
    if (!record236_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE004'\""); }
    record236.set("studentId", record236_studentIdLookup.id);
    const record236_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201L'");
    if (!record236_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201L'\""); }
    record236.set("courseId", record236_courseIdLookup.id);
    record236.set("semester", "2");
    record236.set("academicYear", "2025-2026");
  try {
    app.save(record236);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record237 = new Record(collection);
    record237.id = "dnwctod540q4oxy";
    const record237_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE004'");
    if (!record237_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE004'\""); }
    record237.set("studentId", record237_studentIdLookup.id);
    const record237_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301L'");
    if (!record237_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301L'\""); }
    record237.set("courseId", record237_courseIdLookup.id);
    record237.set("semester", "3");
    record237.set("academicYear", "2025-2026");
  try {
    app.save(record237);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record238 = new Record(collection);
    record238.id = "ln122qbsbp8a78y";
    const record238_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE005'");
    if (!record238_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE005'\""); }
    record238.set("studentId", record238_studentIdLookup.id);
    const record238_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101'");
    if (!record238_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101'\""); }
    record238.set("courseId", record238_courseIdLookup.id);
    record238.set("semester", "1");
    record238.set("academicYear", "2025-2026");
  try {
    app.save(record238);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record239 = new Record(collection);
    record239.id = "938173o7qiod5be";
    const record239_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE005'");
    if (!record239_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE005'\""); }
    record239.set("studentId", record239_studentIdLookup.id);
    const record239_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201'");
    if (!record239_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201'\""); }
    record239.set("courseId", record239_courseIdLookup.id);
    record239.set("semester", "2");
    record239.set("academicYear", "2025-2026");
  try {
    app.save(record239);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record240 = new Record(collection);
    record240.id = "t45fd1jiru68b51";
    const record240_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE005'");
    if (!record240_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE005'\""); }
    record240.set("studentId", record240_studentIdLookup.id);
    const record240_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301'");
    if (!record240_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301'\""); }
    record240.set("courseId", record240_courseIdLookup.id);
    record240.set("semester", "3");
    record240.set("academicYear", "2025-2026");
  try {
    app.save(record240);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record241 = new Record(collection);
    record241.id = "nz07tdve392ni4y";
    const record241_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE005'");
    if (!record241_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE005'\""); }
    record241.set("studentId", record241_studentIdLookup.id);
    const record241_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE401'");
    if (!record241_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE401'\""); }
    record241.set("courseId", record241_courseIdLookup.id);
    record241.set("semester", "4");
    record241.set("academicYear", "2025-2026");
  try {
    app.save(record241);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record242 = new Record(collection);
    record242.id = "bo9syufszozt4u0";
    const record242_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE005'");
    if (!record242_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE005'\""); }
    record242.set("studentId", record242_studentIdLookup.id);
    const record242_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE601'");
    if (!record242_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE601'\""); }
    record242.set("courseId", record242_courseIdLookup.id);
    record242.set("semester", "6");
    record242.set("academicYear", "2025-2026");
  try {
    app.save(record242);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record243 = new Record(collection);
    record243.id = "a50n50e3v8bqp2t";
    const record243_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE005'");
    if (!record243_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE005'\""); }
    record243.set("studentId", record243_studentIdLookup.id);
    const record243_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101L'");
    if (!record243_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101L'\""); }
    record243.set("courseId", record243_courseIdLookup.id);
    record243.set("semester", "1");
    record243.set("academicYear", "2025-2026");
  try {
    app.save(record243);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record244 = new Record(collection);
    record244.id = "rytw2u5x3kva375";
    const record244_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE005'");
    if (!record244_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE005'\""); }
    record244.set("studentId", record244_studentIdLookup.id);
    const record244_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201L'");
    if (!record244_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201L'\""); }
    record244.set("courseId", record244_courseIdLookup.id);
    record244.set("semester", "2");
    record244.set("academicYear", "2025-2026");
  try {
    app.save(record244);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record245 = new Record(collection);
    record245.id = "jgqmf6t9uxvs3kk";
    const record245_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE006'");
    if (!record245_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE006'\""); }
    record245.set("studentId", record245_studentIdLookup.id);
    const record245_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101'");
    if (!record245_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101'\""); }
    record245.set("courseId", record245_courseIdLookup.id);
    record245.set("semester", "1");
    record245.set("academicYear", "2025-2026");
  try {
    app.save(record245);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record246 = new Record(collection);
    record246.id = "61dtg1ib27qn6ev";
    const record246_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE006'");
    if (!record246_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE006'\""); }
    record246.set("studentId", record246_studentIdLookup.id);
    const record246_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201'");
    if (!record246_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201'\""); }
    record246.set("courseId", record246_courseIdLookup.id);
    record246.set("semester", "2");
    record246.set("academicYear", "2025-2026");
  try {
    app.save(record246);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record247 = new Record(collection);
    record247.id = "pfp98upes6fozmn";
    const record247_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE006'");
    if (!record247_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE006'\""); }
    record247.set("studentId", record247_studentIdLookup.id);
    const record247_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301'");
    if (!record247_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301'\""); }
    record247.set("courseId", record247_courseIdLookup.id);
    record247.set("semester", "3");
    record247.set("academicYear", "2025-2026");
  try {
    app.save(record247);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record248 = new Record(collection);
    record248.id = "pvluvrhlce9hoq8";
    const record248_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE006'");
    if (!record248_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE006'\""); }
    record248.set("studentId", record248_studentIdLookup.id);
    const record248_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE401'");
    if (!record248_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE401'\""); }
    record248.set("courseId", record248_courseIdLookup.id);
    record248.set("semester", "4");
    record248.set("academicYear", "2025-2026");
  try {
    app.save(record248);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record249 = new Record(collection);
    record249.id = "x10e8b7bnxq5sgd";
    const record249_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE006'");
    if (!record249_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE006'\""); }
    record249.set("studentId", record249_studentIdLookup.id);
    const record249_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE501'");
    if (!record249_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE501'\""); }
    record249.set("courseId", record249_courseIdLookup.id);
    record249.set("semester", "5");
    record249.set("academicYear", "2025-2026");
  try {
    app.save(record249);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record250 = new Record(collection);
    record250.id = "h68oy98f4lr9dhb";
    const record250_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE006'");
    if (!record250_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE006'\""); }
    record250.set("studentId", record250_studentIdLookup.id);
    const record250_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101L'");
    if (!record250_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101L'\""); }
    record250.set("courseId", record250_courseIdLookup.id);
    record250.set("semester", "1");
    record250.set("academicYear", "2025-2026");
  try {
    app.save(record250);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record251 = new Record(collection);
    record251.id = "gdbhxmxo9siiby2";
    const record251_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE006'");
    if (!record251_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE006'\""); }
    record251.set("studentId", record251_studentIdLookup.id);
    const record251_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301L'");
    if (!record251_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301L'\""); }
    record251.set("courseId", record251_courseIdLookup.id);
    record251.set("semester", "3");
    record251.set("academicYear", "2025-2026");
  try {
    app.save(record251);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record252 = new Record(collection);
    record252.id = "quv4zir7r84x648";
    const record252_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE007'");
    if (!record252_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE007'\""); }
    record252.set("studentId", record252_studentIdLookup.id);
    const record252_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101'");
    if (!record252_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101'\""); }
    record252.set("courseId", record252_courseIdLookup.id);
    record252.set("semester", "1");
    record252.set("academicYear", "2025-2026");
  try {
    app.save(record252);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record253 = new Record(collection);
    record253.id = "j705rt8qd3hswtb";
    const record253_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE007'");
    if (!record253_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE007'\""); }
    record253.set("studentId", record253_studentIdLookup.id);
    const record253_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201'");
    if (!record253_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201'\""); }
    record253.set("courseId", record253_courseIdLookup.id);
    record253.set("semester", "2");
    record253.set("academicYear", "2025-2026");
  try {
    app.save(record253);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record254 = new Record(collection);
    record254.id = "ptu1x53ll3loah9";
    const record254_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE007'");
    if (!record254_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE007'\""); }
    record254.set("studentId", record254_studentIdLookup.id);
    const record254_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301'");
    if (!record254_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301'\""); }
    record254.set("courseId", record254_courseIdLookup.id);
    record254.set("semester", "3");
    record254.set("academicYear", "2025-2026");
  try {
    app.save(record254);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record255 = new Record(collection);
    record255.id = "3ze2h1o0zya9psy";
    const record255_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE007'");
    if (!record255_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE007'\""); }
    record255.set("studentId", record255_studentIdLookup.id);
    const record255_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE401'");
    if (!record255_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE401'\""); }
    record255.set("courseId", record255_courseIdLookup.id);
    record255.set("semester", "4");
    record255.set("academicYear", "2025-2026");
  try {
    app.save(record255);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record256 = new Record(collection);
    record256.id = "74sj04l026yscya";
    const record256_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE007'");
    if (!record256_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE007'\""); }
    record256.set("studentId", record256_studentIdLookup.id);
    const record256_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE601'");
    if (!record256_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE601'\""); }
    record256.set("courseId", record256_courseIdLookup.id);
    record256.set("semester", "6");
    record256.set("academicYear", "2025-2026");
  try {
    app.save(record256);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record257 = new Record(collection);
    record257.id = "u8rajyw1b3hlmmn";
    const record257_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE007'");
    if (!record257_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE007'\""); }
    record257.set("studentId", record257_studentIdLookup.id);
    const record257_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201L'");
    if (!record257_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201L'\""); }
    record257.set("courseId", record257_courseIdLookup.id);
    record257.set("semester", "2");
    record257.set("academicYear", "2025-2026");
  try {
    app.save(record257);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record258 = new Record(collection);
    record258.id = "lwyt814mjmcqqd8";
    const record258_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE007'");
    if (!record258_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE007'\""); }
    record258.set("studentId", record258_studentIdLookup.id);
    const record258_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301L'");
    if (!record258_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301L'\""); }
    record258.set("courseId", record258_courseIdLookup.id);
    record258.set("semester", "3");
    record258.set("academicYear", "2025-2026");
  try {
    app.save(record258);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record259 = new Record(collection);
    record259.id = "bnq799h8qy4k9c1";
    const record259_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE008'");
    if (!record259_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE008'\""); }
    record259.set("studentId", record259_studentIdLookup.id);
    const record259_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101'");
    if (!record259_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101'\""); }
    record259.set("courseId", record259_courseIdLookup.id);
    record259.set("semester", "1");
    record259.set("academicYear", "2025-2026");
  try {
    app.save(record259);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record260 = new Record(collection);
    record260.id = "b9ioxa635omq4qz";
    const record260_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE008'");
    if (!record260_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE008'\""); }
    record260.set("studentId", record260_studentIdLookup.id);
    const record260_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201'");
    if (!record260_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201'\""); }
    record260.set("courseId", record260_courseIdLookup.id);
    record260.set("semester", "2");
    record260.set("academicYear", "2025-2026");
  try {
    app.save(record260);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record261 = new Record(collection);
    record261.id = "riphcs4thczubcl";
    const record261_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE008'");
    if (!record261_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE008'\""); }
    record261.set("studentId", record261_studentIdLookup.id);
    const record261_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301'");
    if (!record261_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301'\""); }
    record261.set("courseId", record261_courseIdLookup.id);
    record261.set("semester", "3");
    record261.set("academicYear", "2025-2026");
  try {
    app.save(record261);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record262 = new Record(collection);
    record262.id = "vus988v60y9o8w6";
    const record262_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE008'");
    if (!record262_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE008'\""); }
    record262.set("studentId", record262_studentIdLookup.id);
    const record262_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE401'");
    if (!record262_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE401'\""); }
    record262.set("courseId", record262_courseIdLookup.id);
    record262.set("semester", "4");
    record262.set("academicYear", "2025-2026");
  try {
    app.save(record262);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record263 = new Record(collection);
    record263.id = "zyahdg74en7c04x";
    const record263_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE008'");
    if (!record263_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE008'\""); }
    record263.set("studentId", record263_studentIdLookup.id);
    const record263_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE501'");
    if (!record263_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE501'\""); }
    record263.set("courseId", record263_courseIdLookup.id);
    record263.set("semester", "5");
    record263.set("academicYear", "2025-2026");
  try {
    app.save(record263);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record264 = new Record(collection);
    record264.id = "nlnohqg7v0q7u5z";
    const record264_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE008'");
    if (!record264_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE008'\""); }
    record264.set("studentId", record264_studentIdLookup.id);
    const record264_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101L'");
    if (!record264_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101L'\""); }
    record264.set("courseId", record264_courseIdLookup.id);
    record264.set("semester", "1");
    record264.set("academicYear", "2025-2026");
  try {
    app.save(record264);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record265 = new Record(collection);
    record265.id = "5nmfxroprpdjl0m";
    const record265_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE008'");
    if (!record265_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE008'\""); }
    record265.set("studentId", record265_studentIdLookup.id);
    const record265_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201L'");
    if (!record265_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201L'\""); }
    record265.set("courseId", record265_courseIdLookup.id);
    record265.set("semester", "2");
    record265.set("academicYear", "2025-2026");
  try {
    app.save(record265);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record266 = new Record(collection);
    record266.id = "rbbaes1kgeyjvyq";
    const record266_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE009'");
    if (!record266_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE009'\""); }
    record266.set("studentId", record266_studentIdLookup.id);
    const record266_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101'");
    if (!record266_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101'\""); }
    record266.set("courseId", record266_courseIdLookup.id);
    record266.set("semester", "1");
    record266.set("academicYear", "2025-2026");
  try {
    app.save(record266);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record267 = new Record(collection);
    record267.id = "dg615uedhxcl6wu";
    const record267_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE009'");
    if (!record267_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE009'\""); }
    record267.set("studentId", record267_studentIdLookup.id);
    const record267_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201'");
    if (!record267_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201'\""); }
    record267.set("courseId", record267_courseIdLookup.id);
    record267.set("semester", "2");
    record267.set("academicYear", "2025-2026");
  try {
    app.save(record267);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record268 = new Record(collection);
    record268.id = "gl6qtonj6e8a7sk";
    const record268_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE009'");
    if (!record268_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE009'\""); }
    record268.set("studentId", record268_studentIdLookup.id);
    const record268_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301'");
    if (!record268_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301'\""); }
    record268.set("courseId", record268_courseIdLookup.id);
    record268.set("semester", "3");
    record268.set("academicYear", "2025-2026");
  try {
    app.save(record268);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record269 = new Record(collection);
    record269.id = "x2herjnada8n09t";
    const record269_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE009'");
    if (!record269_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE009'\""); }
    record269.set("studentId", record269_studentIdLookup.id);
    const record269_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE401'");
    if (!record269_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE401'\""); }
    record269.set("courseId", record269_courseIdLookup.id);
    record269.set("semester", "4");
    record269.set("academicYear", "2025-2026");
  try {
    app.save(record269);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record270 = new Record(collection);
    record270.id = "ve0osc2gilpi3rw";
    const record270_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE009'");
    if (!record270_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE009'\""); }
    record270.set("studentId", record270_studentIdLookup.id);
    const record270_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE601'");
    if (!record270_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE601'\""); }
    record270.set("courseId", record270_courseIdLookup.id);
    record270.set("semester", "6");
    record270.set("academicYear", "2025-2026");
  try {
    app.save(record270);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record271 = new Record(collection);
    record271.id = "v3esrzltaagldwj";
    const record271_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE009'");
    if (!record271_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE009'\""); }
    record271.set("studentId", record271_studentIdLookup.id);
    const record271_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101L'");
    if (!record271_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101L'\""); }
    record271.set("courseId", record271_courseIdLookup.id);
    record271.set("semester", "1");
    record271.set("academicYear", "2025-2026");
  try {
    app.save(record271);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record272 = new Record(collection);
    record272.id = "ay7hopr5nrndvcs";
    const record272_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE009'");
    if (!record272_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE009'\""); }
    record272.set("studentId", record272_studentIdLookup.id);
    const record272_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301L'");
    if (!record272_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301L'\""); }
    record272.set("courseId", record272_courseIdLookup.id);
    record272.set("semester", "3");
    record272.set("academicYear", "2025-2026");
  try {
    app.save(record272);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record273 = new Record(collection);
    record273.id = "c0hh411xbgfkxrh";
    const record273_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE010'");
    if (!record273_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE010'\""); }
    record273.set("studentId", record273_studentIdLookup.id);
    const record273_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE101'");
    if (!record273_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE101'\""); }
    record273.set("courseId", record273_courseIdLookup.id);
    record273.set("semester", "1");
    record273.set("academicYear", "2025-2026");
  try {
    app.save(record273);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record274 = new Record(collection);
    record274.id = "mds3wtf2cemzfn1";
    const record274_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE010'");
    if (!record274_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE010'\""); }
    record274.set("studentId", record274_studentIdLookup.id);
    const record274_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201'");
    if (!record274_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201'\""); }
    record274.set("courseId", record274_courseIdLookup.id);
    record274.set("semester", "2");
    record274.set("academicYear", "2025-2026");
  try {
    app.save(record274);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record275 = new Record(collection);
    record275.id = "mnnpj0dy3i2ty0h";
    const record275_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE010'");
    if (!record275_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE010'\""); }
    record275.set("studentId", record275_studentIdLookup.id);
    const record275_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301'");
    if (!record275_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301'\""); }
    record275.set("courseId", record275_courseIdLookup.id);
    record275.set("semester", "3");
    record275.set("academicYear", "2025-2026");
  try {
    app.save(record275);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record276 = new Record(collection);
    record276.id = "d0wwu9tut11yjuo";
    const record276_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE010'");
    if (!record276_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE010'\""); }
    record276.set("studentId", record276_studentIdLookup.id);
    const record276_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE401'");
    if (!record276_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE401'\""); }
    record276.set("courseId", record276_courseIdLookup.id);
    record276.set("semester", "4");
    record276.set("academicYear", "2025-2026");
  try {
    app.save(record276);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record277 = new Record(collection);
    record277.id = "3q75wff2yg26xk7";
    const record277_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE010'");
    if (!record277_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE010'\""); }
    record277.set("studentId", record277_studentIdLookup.id);
    const record277_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE501'");
    if (!record277_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE501'\""); }
    record277.set("courseId", record277_courseIdLookup.id);
    record277.set("semester", "5");
    record277.set("academicYear", "2025-2026");
  try {
    app.save(record277);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record278 = new Record(collection);
    record278.id = "ox9hjo9q10gnwke";
    const record278_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE010'");
    if (!record278_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE010'\""); }
    record278.set("studentId", record278_studentIdLookup.id);
    const record278_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE201L'");
    if (!record278_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE201L'\""); }
    record278.set("courseId", record278_courseIdLookup.id);
    record278.set("semester", "2");
    record278.set("academicYear", "2025-2026");
  try {
    app.save(record278);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record279 = new Record(collection);
    record279.id = "j8040ilr1ipiy2i";
    const record279_studentIdLookup = app.findFirstRecordByFilter("students", "rollNumber = 'CE010'");
    if (!record279_studentIdLookup) { throw new Error("Lookup failed for studentId: no record in 'students' matching \"rollNumber = 'CE010'\""); }
    record279.set("studentId", record279_studentIdLookup.id);
    const record279_courseIdLookup = app.findFirstRecordByFilter("courses", "courseCode = 'CE301L'");
    if (!record279_courseIdLookup) { throw new Error("Lookup failed for courseId: no record in 'courses' matching \"courseCode = 'CE301L'\""); }
    record279.set("courseId", record279_courseIdLookup.id);
    record279.set("semester", "3");
    record279.set("academicYear", "2025-2026");
  try {
    app.save(record279);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["j8040ilr1ipiy2i", "ox9hjo9q10gnwke", "3q75wff2yg26xk7", "d0wwu9tut11yjuo", "mnnpj0dy3i2ty0h", "mds3wtf2cemzfn1", "c0hh411xbgfkxrh", "ay7hopr5nrndvcs", "v3esrzltaagldwj", "ve0osc2gilpi3rw", "x2herjnada8n09t", "gl6qtonj6e8a7sk", "dg615uedhxcl6wu", "rbbaes1kgeyjvyq", "5nmfxroprpdjl0m", "nlnohqg7v0q7u5z", "zyahdg74en7c04x", "vus988v60y9o8w6", "riphcs4thczubcl", "b9ioxa635omq4qz", "bnq799h8qy4k9c1", "lwyt814mjmcqqd8", "u8rajyw1b3hlmmn", "74sj04l026yscya", "3ze2h1o0zya9psy", "ptu1x53ll3loah9", "j705rt8qd3hswtb", "quv4zir7r84x648", "gdbhxmxo9siiby2", "h68oy98f4lr9dhb", "x10e8b7bnxq5sgd", "pvluvrhlce9hoq8", "pfp98upes6fozmn", "61dtg1ib27qn6ev", "jgqmf6t9uxvs3kk", "rytw2u5x3kva375", "a50n50e3v8bqp2t", "bo9syufszozt4u0", "nz07tdve392ni4y", "t45fd1jiru68b51", "938173o7qiod5be", "ln122qbsbp8a78y", "dnwctod540q4oxy", "9oqoekzvaxgrdxw", "f5unup2aj65qbfi", "sow8ne6tew7j86k", "sae8fyiuxzscztn", "ijgfq40ayxybf6h", "j2tf34b6mvjclhg", "uenmvzj6q3qyn6v", "6ztnfywtn3p3w3g", "mpk08c9e6w9pzpe", "3r9olagsc1h7bqd", "xyiiiom34e656p3", "ewcmy9cdn4q8vny", "m8fykk4g34vm8wt", "vy9uims2a70rkbs", "snax2pzdleshkpo", "nmz46jacohupvqj", "f9g48q7zd4fd7ro", "snprcsm77d1ywnn", "ma7m52ekjfmwn55", "nsw5qyhimr4dpo8", "1f3pv95ts93f7mk", "06xzo7koxs2oooj", "47cwj7iirw3hhvo", "ocpacccckktp0m5", "s2iyinjc2lgsp09", "dnu17b4x3a0l24c", "ulhvnml0tso6plj", "zyu2xq5jv3eru9f", "alr9u016z3mrkl5", "a7rbttygbcbhwfw", "vq1541oa4n52b5t", "6qclgjc446a7hnr", "z9npasu3htl5qqg", "9r24rbh056bkovb", "96wd9fqmtiu9hrr", "mznlfy96rmnt4j3", "1581x2xqtzy09su", "fkjpa7i2a3mnc0c", "5eb8nngjyce6sf5", "mornupkef52pf1d", "8jq0zgmim86mxj0", "72gzjkn8esibwgr", "kc5itfigm24pimg", "f69vng66j1i2ejs", "12wh6psajl5xcvj", "8yciitdgrj7timp", "fry1xuzwanvhtaq", "6ksr4sl5ea674ce", "etejm58k0h1e504", "bgz1ezslb7e1xu6", "rtv3607d8sc0nl4", "4tk09sn27nwvm3z", "bfvgk9fgrn1xe01", "4jlmtamjn2l9uwp", "89twvyzb42owplu", "sp9hs1bodnw0i88", "2nf1i1dg50g40tj", "3grme0efs29nzzw", "ez350mek37ts5u1", "56fn5nf9cibohfb", "fyurnedcj9lnvc8", "zmlue90jmt5on6b", "uubrg8p24jwa7r1", "bqqooi44uo01un3", "j9gc48bvnbwt5tl", "zd3t0ale2srsplq", "oacf5qon9jez5ab", "9a263jn9x4lwx23", "lud6xuyrupua1pl", "ixoy9s883jbnz6w", "203pc4bbl9kt5g9", "kyy599c4sxmmzjn", "vu0571ruh855qte", "x45xa54m21ddbx6", "2pxtu0vx395mupv", "og1m801eifeotfz", "54gxzi9x6x4qrz4", "cp74ligojz91ajb", "stq5ipug0ziw2dv", "22pqoooekdgx1v1", "4t43gam7zoh3etv", "eu0oe55hbcvam1j", "1ns5tw2j301tr69", "saps1roj2zolrz5", "l408m5u3n2nqcup", "p8maoj4wvs9j9h6", "xeitke9jqbx4kmi", "jxh7kmxc8fg1xwg", "agmjdw9094tsq0b", "hc9jgelsui9qcnv", "7y1z6jmtf3w5qvm", "22jnvpzj9z7b9vc", "d3f9ag54rayg8k6", "xpvolnet01djgvz", "iiego2nftbgs5xs", "ryft0hogal5qrme", "n5qk469nntn3az9", "e25sxo2w5fcgqli", "9j7etsngkgposf0", "xqbrt05o2wsfctf", "52k7obxegybkvvg", "99dgyk01pclz6sz", "m010p29sekfvn7c", "1otf86rpvogeo3m", "ouetf6wz4gtlhg3", "n05n6oueiwz561t", "ol92xgv3dq45vve", "ew0vy5eteb7c562", "hqke8nm660rx1nw", "7iyeoqf79rudbga", "bez2clheof3kk9q", "nkt8yyxjemvm94i", "7jd6x8d9j4t4q4b", "m4ly8at1as3on4u", "4hxobsaurc5j5cb", "qq344k9zzp5gjaz", "t3zxjec9ftmel98", "9gegka9gem2rkda", "j5lmini1cd1bj7u", "kvp8wx6cf7f8b67", "dvzoqsbxh0olv10", "6c3rrc2haunwroa", "ehio4zhqgh9yvyt", "cefxsjvkp1eayhe", "9ynskd173dmif8j", "phnixhnb2i9nedi", "zp12o1u9r6mcqqe", "9e307nhkx1pgeqr", "lk3so876drqshub", "wjd99nf2hcv1o0b", "bvrbg45uxsi6m3k", "qbxiyob6rtgku6c", "anbsr6xii5ip18b", "6sd7x220q9hy4eg", "8tz0e0wzcbr3m88", "kem8w4om7tlla81", "i37vmoc8zdfbt6e", "ifodpbdyfhaykpf", "9cduxp630v73gjf", "fo3lky9ue4dp05v", "b7717ggxs9cicl1", "vysb15hdbyi9i4h", "ef5ielw7rofgsph", "bqsed7mqzhm2toz", "jtfm9aix6nh6796", "vsakojpxeme7yag", "r6zxyhij7lergp6", "pnvk5d0wb48psf9", "q3r0e1ilvbjr9vt", "4td4e2m26kv6x5a", "wbhr4agxge4msce", "bs3yoiwyax39b53", "2raj7l941m241e8", "8983wata6ned6sr", "mu1wlprfy0qpdmd", "kftycdavtv69m04", "4efe7vp1d4pzahj", "yvzdzjgmwgefvev", "ha01b3p50qhkr9c", "en9zhvzkuz2sbcf", "uniybq1f4bxs3a8", "dea1548o4c6chv6", "zt0h1jeosxh24ei", "u37mqi84vif9tma", "841otvaaa25brwv", "jpa0gc4c920yyzv", "rf76uxzhqzjyeqt", "3qo6rqwjxxnbg6f", "bzlh85ko17q6442", "nw9c1gaspxqzs5s", "k8zn9wht5r05wxq", "xe33g6wuovu5qt3", "lwhyik0plexdw9g", "5ifc9ams3g2zebl", "bg2aumxfsnsli8d", "wlxbn9it2qnsppy", "667zd841n58ux24", "c3wyy3r4uj5dr3j", "tmhxjdjtfkwn6or", "796dmm2vpq8b0a5", "a2jgyl1a4aak6co", "al5xf3gnb6i31fh", "6xua6zpidtu7uxl", "5cf64h6j1ef8r0y", "btbdufhvkm9l0lt", "q90yrb2q1fje2dc", "5wjywo997w1xxib", "ao3egw1g7dirtax", "e3cvxz1t1bmlcs4", "x16286pg06umprh", "gs6zrzy4jkl8hum", "xom7q7b5dyc95bb", "3uw40ysetzffkgg", "pbr9of6rg39gujg", "vyogpjwv233hjxa", "eaqyirbgdj205wl", "z9tpq2c1jvof633", "bdl6j059vyuqkaa", "5eqaam62hn91dot", "niu8910twhmp4xp", "w2gf82xowq965dw", "p7vix90436yz7bz", "894gwetmrrivcp1", "njk7gr41gz4kbjs", "dfk5iq02wr04ear", "it3kgtgptagxbyp", "q4fs6nm20l8swac", "vipu57vqlonm85l", "b9409if7j3l84l8", "x2ipd1n9ikgz8o2", "bxnmtw7rr8gdz1y", "a8uk5tsb1a1xy57", "vtrrsmr1batroui", "juap7vd9jtg6mor", "epleunlev9x6kuh", "r65sfipmc1bccyv", "zyfhq0jscncvo5c", "nmag20ugtvr51wt", "ul7vyt9otjfdl7u", "4lf7tl3m4ro2jfr", "0pe6i13dmoybjpp", "xe9hp9azejfnqs2", "700uw50sols8ejy", "9v847ypcfiuaiiy", "bahbuyhxop0d8td", "7jxvn2piw3yr5hi", "4qetrf57qbtn6mx", "czw0hqtm8gubuf8", "kfzz9n5om6m9q85", "jw7re27llpd85mj", "bb294gjx67jlyij", "h2fh4c7aip96jl9", "8jg24w4sx1kaje9", "hfxwhbc3kb0eiph", "6116kfqo2q60wmz", "gi6vf6nzoiutjae", "o3ud9l2pejpn0kq"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("enrollments", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
