/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("students");

  const record0 = new Record(collection);
    record0.id = "rimz13ujmhy60it";
    record0.set("rollNumber", "CS001");
    record0.set("name", "Rajesh Kumar");
    record0.set("email", "cs001@university.edu");
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
    record1.id = "u24bhfl6nir95i2";
    record1.set("rollNumber", "CS002");
    record1.set("name", "Priya Sharma");
    record1.set("email", "cs002@university.edu");
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
    record2.id = "jvvdw9jka5ungrt";
    record2.set("rollNumber", "CS003");
    record2.set("name", "Arjun Singh");
    record2.set("email", "cs003@university.edu");
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
    record3.id = "w7ts0l7pybwrq72";
    record3.set("rollNumber", "CS004");
    record3.set("name", "Neha Patel");
    record3.set("email", "cs004@university.edu");
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
    record4.id = "ppgmuc92292h1qh";
    record4.set("rollNumber", "CS005");
    record4.set("name", "Vikram Reddy");
    record4.set("email", "cs005@university.edu");
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
    record5.id = "bp7x6i5acleje6f";
    record5.set("rollNumber", "CS006");
    record5.set("name", "Anjali Gupta");
    record5.set("email", "cs006@university.edu");
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
    record6.id = "85z3to595rupr40";
    record6.set("rollNumber", "CS007");
    record6.set("name", "Rohan Verma");
    record6.set("email", "cs007@university.edu");
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
    record7.id = "34hdvjo41obz65n";
    record7.set("rollNumber", "CS008");
    record7.set("name", "Divya Nair");
    record7.set("email", "cs008@university.edu");
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
    record8.id = "r59tgoud9arfsxf";
    record8.set("rollNumber", "CS009");
    record8.set("name", "Aditya Malhotra");
    record8.set("email", "cs009@university.edu");
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
    record9.id = "d92ilgx1cnl0u86";
    record9.set("rollNumber", "CS010");
    record9.set("name", "Sneha Desai");
    record9.set("email", "cs010@university.edu");
    const record9_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Computer Science'");
    if (!record9_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Computer Science'\""); }
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
    record10.id = "22eg4shtb0dq1wc";
    record10.set("rollNumber", "EC001");
    record10.set("name", "Karan Joshi");
    record10.set("email", "ec001@university.edu");
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
    record11.id = "1j3vu6qnk25f2nv";
    record11.set("rollNumber", "EC002");
    record11.set("name", "Meera Singh");
    record11.set("email", "ec002@university.edu");
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
    record12.id = "6rnp9x75nbcuavj";
    record12.set("rollNumber", "EC003");
    record12.set("name", "Nikhil Patel");
    record12.set("email", "ec003@university.edu");
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
    record13.id = "su7yvr38v9qecks";
    record13.set("rollNumber", "EC004");
    record13.set("name", "Pooja Verma");
    record13.set("email", "ec004@university.edu");
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
    record14.id = "vge7smq1g592kt4";
    record14.set("rollNumber", "EC005");
    record14.set("name", "Sameer Khan");
    record14.set("email", "ec005@university.edu");
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
    record15.id = "zxh0nl4i6n290x9";
    record15.set("rollNumber", "EC006");
    record15.set("name", "Tanvi Sharma");
    record15.set("email", "ec006@university.edu");
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
    record16.id = "gq3r0ftgqe8pz7k";
    record16.set("rollNumber", "EC007");
    record16.set("name", "Varun Nair");
    record16.set("email", "ec007@university.edu");
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
    record17.id = "fu16f9scnntxkdb";
    record17.set("rollNumber", "EC008");
    record17.set("name", "Yuki Tanaka");
    record17.set("email", "ec008@university.edu");
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
    record18.id = "zn6hk4fldmkwo3e";
    record18.set("rollNumber", "EC009");
    record18.set("name", "Zara Ahmed");
    record18.set("email", "ec009@university.edu");
    const record18_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Electronics & Communication'");
    if (!record18_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Electronics & Communication'\""); }
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
    record19.id = "eywqi6b2loa1tjb";
    record19.set("rollNumber", "EC010");
    record19.set("name", "Aryan Kapoor");
    record19.set("email", "ec010@university.edu");
    const record19_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Electronics & Communication'");
    if (!record19_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Electronics & Communication'\""); }
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
    record20.id = "9eqoxpu55m8lgs5";
    record20.set("rollNumber", "ME001");
    record20.set("name", "Bhavesh Desai");
    record20.set("email", "me001@university.edu");
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
    record21.id = "8tu4vw6nrfcqdop";
    record21.set("rollNumber", "ME002");
    record21.set("name", "Chitra Rao");
    record21.set("email", "me002@university.edu");
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
    record22.id = "6hf9grlu6550j9x";
    record22.set("rollNumber", "ME003");
    record22.set("name", "Deepak Kumar");
    record22.set("email", "me003@university.edu");
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
    record23.id = "30gzahpg7rkv5ki";
    record23.set("rollNumber", "ME004");
    record23.set("name", "Esha Patel");
    record23.set("email", "me004@university.edu");
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
    record24.id = "50lh95dbzvfnhre";
    record24.set("rollNumber", "ME005");
    record24.set("name", "Faisal Khan");
    record24.set("email", "me005@university.edu");
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
    record25.id = "dq61j6r03619m6q";
    record25.set("rollNumber", "ME006");
    record25.set("name", "Gita Sharma");
    record25.set("email", "me006@university.edu");
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
    record26.id = "ss2lljci156mi8w";
    record26.set("rollNumber", "ME007");
    record26.set("name", "Harsh Verma");
    record26.set("email", "me007@university.edu");
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
    record27.id = "5v54ppnnkjms49j";
    record27.set("rollNumber", "ME008");
    record27.set("name", "Ishita Gupta");
    record27.set("email", "me008@university.edu");
    const record27_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Mechanical Engineering'");
    if (!record27_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Mechanical Engineering'\""); }
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
    record28.id = "9o1hb4qhrg06pe6";
    record28.set("rollNumber", "ME009");
    record28.set("name", "Jatin Singh");
    record28.set("email", "me009@university.edu");
    const record28_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Mechanical Engineering'");
    if (!record28_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Mechanical Engineering'\""); }
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
    record29.id = "ktzq5x8joiypi29";
    record29.set("rollNumber", "ME010");
    record29.set("name", "Kavya Nair");
    record29.set("email", "me010@university.edu");
    const record29_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Mechanical Engineering'");
    if (!record29_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Mechanical Engineering'\""); }
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
    record30.id = "rd57nutcuh3scoq";
    record30.set("rollNumber", "CE001");
    record30.set("name", "Lakshmi Reddy");
    record30.set("email", "ce001@university.edu");
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
    record31.id = "nfry01j7k6wnzaw";
    record31.set("rollNumber", "CE002");
    record31.set("name", "Manish Patel");
    record31.set("email", "ce002@university.edu");
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
    record32.id = "2mqiuh6th5mvnva";
    record32.set("rollNumber", "CE003");
    record32.set("name", "Nisha Sharma");
    record32.set("email", "ce003@university.edu");
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
    record33.id = "vtz6yz1q3qm9fv9";
    record33.set("rollNumber", "CE004");
    record33.set("name", "Omkar Singh");
    record33.set("email", "ce004@university.edu");
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
    record34.id = "9hx3ny50udrlhen";
    record34.set("rollNumber", "CE005");
    record34.set("name", "Priya Verma");
    record34.set("email", "ce005@university.edu");
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
    record35.id = "b7v86gqfo6fbng6";
    record35.set("rollNumber", "CE006");
    record35.set("name", "Qasim Khan");
    record35.set("email", "ce006@university.edu");
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

  const record36 = new Record(collection);
    record36.id = "epjvzppccsi6p1j";
    record36.set("rollNumber", "CE007");
    record36.set("name", "Ravi Kumar");
    record36.set("email", "ce007@university.edu");
    const record36_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record36_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record36.set("departmentId", record36_departmentIdLookup.id);
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
    record37.id = "q4g077ef1ugr0pd";
    record37.set("rollNumber", "CE008");
    record37.set("name", "Shreya Gupta");
    record37.set("email", "ce008@university.edu");
    const record37_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record37_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record37.set("departmentId", record37_departmentIdLookup.id);
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
    record38.id = "ctb2dj0eaythg0e";
    record38.set("rollNumber", "CE009");
    record38.set("name", "Tushar Nair");
    record38.set("email", "ce009@university.edu");
    const record38_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record38_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record38.set("departmentId", record38_departmentIdLookup.id);
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
    record39.id = "bfai21szgjgqiks";
    record39.set("rollNumber", "CE010");
    record39.set("name", "Usha Desai");
    record39.set("email", "ce010@university.edu");
    const record39_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName = 'Civil Engineering'");
    if (!record39_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName = 'Civil Engineering'\""); }
    record39.set("departmentId", record39_departmentIdLookup.id);
  try {
    app.save(record39);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["bfai21szgjgqiks", "ctb2dj0eaythg0e", "q4g077ef1ugr0pd", "epjvzppccsi6p1j", "b7v86gqfo6fbng6", "9hx3ny50udrlhen", "vtz6yz1q3qm9fv9", "2mqiuh6th5mvnva", "nfry01j7k6wnzaw", "rd57nutcuh3scoq", "ktzq5x8joiypi29", "9o1hb4qhrg06pe6", "5v54ppnnkjms49j", "ss2lljci156mi8w", "dq61j6r03619m6q", "50lh95dbzvfnhre", "30gzahpg7rkv5ki", "6hf9grlu6550j9x", "8tu4vw6nrfcqdop", "9eqoxpu55m8lgs5", "eywqi6b2loa1tjb", "zn6hk4fldmkwo3e", "fu16f9scnntxkdb", "gq3r0ftgqe8pz7k", "zxh0nl4i6n290x9", "vge7smq1g592kt4", "su7yvr38v9qecks", "6rnp9x75nbcuavj", "1j3vu6qnk25f2nv", "22eg4shtb0dq1wc", "d92ilgx1cnl0u86", "r59tgoud9arfsxf", "34hdvjo41obz65n", "85z3to595rupr40", "bp7x6i5acleje6f", "ppgmuc92292h1qh", "w7ts0l7pybwrq72", "jvvdw9jka5ungrt", "u24bhfl6nir95i2", "rimz13ujmhy60it"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("students", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
