/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.id = "5741of21i3xk92j";
    record0.set("courseName", "Introduction to Programming");
    record0.set("courseCode", "CS101");
    record0.set("credits", 3);
    record0.set("semester", 1);
    record0.set("courseType", "Regular Course");
    const record0_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Computer Science'");
    if (!record0_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Computer Science'\""); }
    record0.set("departmentId", record0_departmentIdLookup.id);
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
    record1.id = "sxgmfe9nnqwsauo";
    record1.set("courseName", "Data Structures");
    record1.set("courseCode", "CS201");
    record1.set("credits", 3);
    record1.set("semester", 2);
    record1.set("courseType", "Regular Course");
    const record1_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Computer Science'");
    if (!record1_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Computer Science'\""); }
    record1.set("departmentId", record1_departmentIdLookup.id);
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
    record2.id = "aixy930o4kqpwnd";
    record2.set("courseName", "Algorithms");
    record2.set("courseCode", "CS301");
    record2.set("credits", 3);
    record2.set("semester", 3);
    record2.set("courseType", "Regular Course");
    const record2_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Computer Science'");
    if (!record2_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Computer Science'\""); }
    record2.set("departmentId", record2_departmentIdLookup.id);
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
    record3.id = "363x6ptmsksp6cw";
    record3.set("courseName", "Database Systems");
    record3.set("courseCode", "CS401");
    record3.set("credits", 3);
    record3.set("semester", 4);
    record3.set("courseType", "Regular Course");
    const record3_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Computer Science'");
    if (!record3_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Computer Science'\""); }
    record3.set("departmentId", record3_departmentIdLookup.id);
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
    record4.id = "ysilk4y5ycrl9e1";
    record4.set("courseName", "Operating Systems");
    record4.set("courseCode", "CS501");
    record4.set("credits", 3);
    record4.set("semester", 5);
    record4.set("courseType", "Regular Course");
    const record4_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Computer Science'");
    if (!record4_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Computer Science'\""); }
    record4.set("departmentId", record4_departmentIdLookup.id);
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
    record5.id = "zxqbbqugmh8kx2k";
    record5.set("courseName", "Artificial Intelligence");
    record5.set("courseCode", "CS601");
    record5.set("credits", 3);
    record5.set("semester", 6);
    record5.set("courseType", "Regular Course");
    const record5_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Computer Science'");
    if (!record5_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Computer Science'\""); }
    record5.set("departmentId", record5_departmentIdLookup.id);
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
    record6.id = "f55dykz59dw733d";
    record6.set("courseName", "Programming Lab");
    record6.set("courseCode", "CS101L");
    record6.set("credits", 1);
    record6.set("semester", 1);
    record6.set("courseType", "Lab");
    const record6_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Computer Science'");
    if (!record6_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Computer Science'\""); }
    record6.set("departmentId", record6_departmentIdLookup.id);
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
    record7.id = "zmreiq537egykgg";
    record7.set("courseName", "Data Structures Lab");
    record7.set("courseCode", "CS201L");
    record7.set("credits", 1);
    record7.set("semester", 2);
    record7.set("courseType", "Lab");
    const record7_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Computer Science'");
    if (!record7_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Computer Science'\""); }
    record7.set("departmentId", record7_departmentIdLookup.id);
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
    record8.id = "5yvvi5rx236pvfn";
    record8.set("courseName", "Algorithms Lab");
    record8.set("courseCode", "CS301L");
    record8.set("credits", 1);
    record8.set("semester", 3);
    record8.set("courseType", "Lab");
    const record8_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Computer Science'");
    if (!record8_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Computer Science'\""); }
    record8.set("departmentId", record8_departmentIdLookup.id);
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
    record9.id = "inqgjepym2l5phy";
    record9.set("courseName", "Circuit Theory");
    record9.set("courseCode", "EC101");
    record9.set("credits", 3);
    record9.set("semester", 1);
    record9.set("courseType", "Regular Course");
    const record9_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Electronics & Communication'");
    if (!record9_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Electronics & Communication'\""); }
    record9.set("departmentId", record9_departmentIdLookup.id);
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
    record10.id = "uvfzjf3og9nacx2";
    record10.set("courseName", "Digital Electronics");
    record10.set("courseCode", "EC201");
    record10.set("credits", 3);
    record10.set("semester", 2);
    record10.set("courseType", "Regular Course");
    const record10_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Electronics & Communication'");
    if (!record10_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Electronics & Communication'\""); }
    record10.set("departmentId", record10_departmentIdLookup.id);
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
    record11.id = "thb4ltudb0d74ue";
    record11.set("courseName", "Signals and Systems");
    record11.set("courseCode", "EC301");
    record11.set("credits", 3);
    record11.set("semester", 3);
    record11.set("courseType", "Regular Course");
    const record11_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Electronics & Communication'");
    if (!record11_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Electronics & Communication'\""); }
    record11.set("departmentId", record11_departmentIdLookup.id);
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
    record12.id = "74ry7f58e5r7u0y";
    record12.set("courseName", "Communication Systems");
    record12.set("courseCode", "EC401");
    record12.set("credits", 3);
    record12.set("semester", 4);
    record12.set("courseType", "Regular Course");
    const record12_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Electronics & Communication'");
    if (!record12_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Electronics & Communication'\""); }
    record12.set("departmentId", record12_departmentIdLookup.id);
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
    record13.id = "qv5746m27gzuk7l";
    record13.set("courseName", "Microprocessors");
    record13.set("courseCode", "EC501");
    record13.set("credits", 3);
    record13.set("semester", 5);
    record13.set("courseType", "Regular Course");
    const record13_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Electronics & Communication'");
    if (!record13_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Electronics & Communication'\""); }
    record13.set("departmentId", record13_departmentIdLookup.id);
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
    record14.id = "sto25mbdh7sunv3";
    record14.set("courseName", "VLSI Design");
    record14.set("courseCode", "EC601");
    record14.set("credits", 3);
    record14.set("semester", 6);
    record14.set("courseType", "Regular Course");
    const record14_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Electronics & Communication'");
    if (!record14_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Electronics & Communication'\""); }
    record14.set("departmentId", record14_departmentIdLookup.id);
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
    record15.id = "8rjcoz3l977jq90";
    record15.set("courseName", "Circuit Theory Lab");
    record15.set("courseCode", "EC101L");
    record15.set("credits", 1);
    record15.set("semester", 1);
    record15.set("courseType", "Lab");
    const record15_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Electronics & Communication'");
    if (!record15_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Electronics & Communication'\""); }
    record15.set("departmentId", record15_departmentIdLookup.id);
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
    record16.id = "4m7zr18dotjptfc";
    record16.set("courseName", "Digital Electronics Lab");
    record16.set("courseCode", "EC201L");
    record16.set("credits", 1);
    record16.set("semester", 2);
    record16.set("courseType", "Lab");
    const record16_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Electronics & Communication'");
    if (!record16_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Electronics & Communication'\""); }
    record16.set("departmentId", record16_departmentIdLookup.id);
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
    record17.id = "2q6fbnaz1lijg0o";
    record17.set("courseName", "Signals Lab");
    record17.set("courseCode", "EC301L");
    record17.set("credits", 1);
    record17.set("semester", 3);
    record17.set("courseType", "Lab");
    const record17_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Electronics & Communication'");
    if (!record17_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Electronics & Communication'\""); }
    record17.set("departmentId", record17_departmentIdLookup.id);
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
    record18.id = "oypjo01eq6wz9la";
    record18.set("courseName", "Engineering Mechanics");
    record18.set("courseCode", "ME101");
    record18.set("credits", 3);
    record18.set("semester", 1);
    record18.set("courseType", "Regular Course");
    const record18_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Mechanical Engineering'");
    if (!record18_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Mechanical Engineering'\""); }
    record18.set("departmentId", record18_departmentIdLookup.id);
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
    record19.id = "srymu8u9gseetj0";
    record19.set("courseName", "Thermodynamics");
    record19.set("courseCode", "ME201");
    record19.set("credits", 3);
    record19.set("semester", 2);
    record19.set("courseType", "Regular Course");
    const record19_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Mechanical Engineering'");
    if (!record19_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Mechanical Engineering'\""); }
    record19.set("departmentId", record19_departmentIdLookup.id);
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
    record20.id = "9jhb5h0h5j64cz4";
    record20.set("courseName", "Fluid Mechanics");
    record20.set("courseCode", "ME301");
    record20.set("credits", 3);
    record20.set("semester", 3);
    record20.set("courseType", "Regular Course");
    const record20_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Mechanical Engineering'");
    if (!record20_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Mechanical Engineering'\""); }
    record20.set("departmentId", record20_departmentIdLookup.id);
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
    record21.id = "ar29zwyvkb1rry9";
    record21.set("courseName", "Heat Transfer");
    record21.set("courseCode", "ME401");
    record21.set("credits", 3);
    record21.set("semester", 4);
    record21.set("courseType", "Regular Course");
    const record21_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Mechanical Engineering'");
    if (!record21_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Mechanical Engineering'\""); }
    record21.set("departmentId", record21_departmentIdLookup.id);
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
    record22.id = "29hq0yaf3now4hg";
    record22.set("courseName", "Machine Design");
    record22.set("courseCode", "ME501");
    record22.set("credits", 3);
    record22.set("semester", 5);
    record22.set("courseType", "Regular Course");
    const record22_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Mechanical Engineering'");
    if (!record22_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Mechanical Engineering'\""); }
    record22.set("departmentId", record22_departmentIdLookup.id);
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
    record23.id = "yn65kcutj5i8g1e";
    record23.set("courseName", "Robotics");
    record23.set("courseCode", "ME601");
    record23.set("credits", 3);
    record23.set("semester", 6);
    record23.set("courseType", "Regular Course");
    const record23_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Mechanical Engineering'");
    if (!record23_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Mechanical Engineering'\""); }
    record23.set("departmentId", record23_departmentIdLookup.id);
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
    record24.id = "e4ecsjiiyis6x62";
    record24.set("courseName", "Mechanics Lab");
    record24.set("courseCode", "ME101L");
    record24.set("credits", 1);
    record24.set("semester", 1);
    record24.set("courseType", "Lab");
    const record24_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Mechanical Engineering'");
    if (!record24_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Mechanical Engineering'\""); }
    record24.set("departmentId", record24_departmentIdLookup.id);
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
    record25.id = "7y9lvu91zx3h77d";
    record25.set("courseName", "Thermodynamics Lab");
    record25.set("courseCode", "ME201L");
    record25.set("credits", 1);
    record25.set("semester", 2);
    record25.set("courseType", "Lab");
    const record25_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Mechanical Engineering'");
    if (!record25_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Mechanical Engineering'\""); }
    record25.set("departmentId", record25_departmentIdLookup.id);
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
    record26.id = "1zr84vend5shaax";
    record26.set("courseName", "Fluid Mechanics Lab");
    record26.set("courseCode", "ME301L");
    record26.set("credits", 1);
    record26.set("semester", 3);
    record26.set("courseType", "Lab");
    const record26_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Mechanical Engineering'");
    if (!record26_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Mechanical Engineering'\""); }
    record26.set("departmentId", record26_departmentIdLookup.id);
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
    record27.id = "2oklrk7d7jhk5ks";
    record27.set("courseName", "Structural Analysis");
    record27.set("courseCode", "CE101");
    record27.set("credits", 3);
    record27.set("semester", 1);
    record27.set("courseType", "Regular Course");
    const record27_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record27_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record27.set("departmentId", record27_departmentIdLookup.id);
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
    record28.id = "esarqc1kfv9xqqw";
    record28.set("courseName", "Geotechnical Engineering");
    record28.set("courseCode", "CE201");
    record28.set("credits", 3);
    record28.set("semester", 2);
    record28.set("courseType", "Regular Course");
    const record28_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record28_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record28.set("departmentId", record28_departmentIdLookup.id);
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
    record29.id = "wlm4almdhvr1vmn";
    record29.set("courseName", "Water Resources");
    record29.set("courseCode", "CE301");
    record29.set("credits", 3);
    record29.set("semester", 3);
    record29.set("courseType", "Regular Course");
    const record29_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record29_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record29.set("departmentId", record29_departmentIdLookup.id);
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
    record30.id = "ev29yb7ppgoydsz";
    record30.set("courseName", "Transportation Engineering");
    record30.set("courseCode", "CE401");
    record30.set("credits", 3);
    record30.set("semester", 4);
    record30.set("courseType", "Regular Course");
    const record30_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record30_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record30.set("departmentId", record30_departmentIdLookup.id);
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
    record31.id = "9dnd572maxasbah";
    record31.set("courseName", "Environmental Engineering");
    record31.set("courseCode", "CE501");
    record31.set("credits", 3);
    record31.set("semester", 5);
    record31.set("courseType", "Regular Course");
    const record31_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record31_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record31.set("departmentId", record31_departmentIdLookup.id);
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
    record32.id = "cul2ogjudsl4049";
    record32.set("courseName", "Construction Management");
    record32.set("courseCode", "CE601");
    record32.set("credits", 3);
    record32.set("semester", 6);
    record32.set("courseType", "Regular Course");
    const record32_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record32_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record32.set("departmentId", record32_departmentIdLookup.id);
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
    record33.id = "5d3xtfy4sefrolo";
    record33.set("courseName", "Structural Analysis Lab");
    record33.set("courseCode", "CE101L");
    record33.set("credits", 1);
    record33.set("semester", 1);
    record33.set("courseType", "Lab");
    const record33_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record33_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record33.set("departmentId", record33_departmentIdLookup.id);
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
    record34.id = "dyyajqs6cg81lbg";
    record34.set("courseName", "Geotechnical Lab");
    record34.set("courseCode", "CE201L");
    record34.set("credits", 1);
    record34.set("semester", 2);
    record34.set("courseType", "Lab");
    const record34_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record34_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record34.set("departmentId", record34_departmentIdLookup.id);
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
    record35.id = "30uie8aiokwq4hl";
    record35.set("courseName", "Water Resources Lab");
    record35.set("courseCode", "CE301L");
    record35.set("credits", 1);
    record35.set("semester", 3);
    record35.set("courseType", "Lab");
    const record35_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record35_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record35.set("departmentId", record35_departmentIdLookup.id);
  try {
    app.save(record35);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["30uie8aiokwq4hl", "dyyajqs6cg81lbg", "5d3xtfy4sefrolo", "cul2ogjudsl4049", "9dnd572maxasbah", "ev29yb7ppgoydsz", "wlm4almdhvr1vmn", "esarqc1kfv9xqqw", "2oklrk7d7jhk5ks", "1zr84vend5shaax", "7y9lvu91zx3h77d", "e4ecsjiiyis6x62", "yn65kcutj5i8g1e", "29hq0yaf3now4hg", "ar29zwyvkb1rry9", "9jhb5h0h5j64cz4", "srymu8u9gseetj0", "oypjo01eq6wz9la", "2q6fbnaz1lijg0o", "4m7zr18dotjptfc", "8rjcoz3l977jq90", "sto25mbdh7sunv3", "qv5746m27gzuk7l", "74ry7f58e5r7u0y", "thb4ltudb0d74ue", "uvfzjf3og9nacx2", "inqgjepym2l5phy", "5yvvi5rx236pvfn", "zmreiq537egykgg", "f55dykz59dw733d", "zxqbbqugmh8kx2k", "ysilk4y5ycrl9e1", "363x6ptmsksp6cw", "aixy930o4kqpwnd", "sxgmfe9nnqwsauo", "5741of21i3xk92j"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("courses", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
