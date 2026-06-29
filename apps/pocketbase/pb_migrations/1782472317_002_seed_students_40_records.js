/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("students");

  const record0 = new Record(collection);
    record0.id = "galgewdvctcbkaw";
    record0.set("rollNumber", "CS001");
    record0.set("name", "Rajesh Kumar");
    record0.set("email", "rajesh.kumar@university.edu");
    record0.set("phone", "+91-9876543210");
    record0.set("gender", "Male");
    record0.set("dateOfBirth", "2002-05-15");
    record0.set("address", "123 Main Street, Delhi, India 110001");
    const record0_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record0_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record1.id = "nabggtohd3pt5tm";
    record1.set("rollNumber", "CS002");
    record1.set("name", "Priya Sharma");
    record1.set("email", "priya.sharma@university.edu");
    record1.set("phone", "+91-9876543211");
    record1.set("gender", "Female");
    record1.set("dateOfBirth", "2003-08-22");
    record1.set("address", "456 Oak Avenue, Mumbai, India 400001");
    const record1_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record1_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record2.id = "jfgh60pmq4rim9u";
    record2.set("rollNumber", "CS003");
    record2.set("name", "Arjun Singh");
    record2.set("email", "arjun.singh@university.edu");
    record2.set("phone", "+91-9876543212");
    record2.set("gender", "Male");
    record2.set("dateOfBirth", "2002-12-10");
    record2.set("address", "789 Pine Road, Bangalore, India 560001");
    const record2_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record2_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record3.id = "hwebjj1zp601tdi";
    record3.set("rollNumber", "CS004");
    record3.set("name", "Neha Patel");
    record3.set("email", "neha.patel@university.edu");
    record3.set("phone", "+91-9876543213");
    record3.set("gender", "Female");
    record3.set("dateOfBirth", "2003-03-18");
    record3.set("address", "321 Elm Street, Ahmedabad, India 380001");
    const record3_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record3_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record4.id = "zkzktupm4tofol8";
    record4.set("rollNumber", "CS005");
    record4.set("name", "Vikram Reddy");
    record4.set("email", "vikram.reddy@university.edu");
    record4.set("phone", "+91-9876543214");
    record4.set("gender", "Male");
    record4.set("dateOfBirth", "2002-07-25");
    record4.set("address", "654 Maple Drive, Hyderabad, India 500001");
    const record4_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record4_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record5.id = "m1ad95ncm6hp0ul";
    record5.set("rollNumber", "CS006");
    record5.set("name", "Anjali Gupta");
    record5.set("email", "anjali.gupta@university.edu");
    record5.set("phone", "+91-9876543215");
    record5.set("gender", "Female");
    record5.set("dateOfBirth", "2003-01-30");
    record5.set("address", "987 Birch Lane, Pune, India 411001");
    const record5_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record5_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record6.id = "n28ktvojf3l31k5";
    record6.set("rollNumber", "CS007");
    record6.set("name", "Rohan Verma");
    record6.set("email", "rohan.verma@university.edu");
    record6.set("phone", "+91-9876543216");
    record6.set("gender", "Male");
    record6.set("dateOfBirth", "2002-09-14");
    record6.set("address", "147 Cedar Street, Jaipur, India 302001");
    const record6_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record6_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record7.id = "cuxtods8r2zbgi1";
    record7.set("rollNumber", "CS008");
    record7.set("name", "Divya Nair");
    record7.set("email", "divya.nair@university.edu");
    record7.set("phone", "+91-9876543217");
    record7.set("gender", "Female");
    record7.set("dateOfBirth", "2003-06-08");
    record7.set("address", "258 Spruce Avenue, Kochi, India 682001");
    const record7_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record7_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record8.id = "s3wu2co2504j5m9";
    record8.set("rollNumber", "CS009");
    record8.set("name", "Aditya Malhotra");
    record8.set("email", "aditya.malhotra@university.edu");
    record8.set("phone", "+91-9876543218");
    record8.set("gender", "Male");
    record8.set("dateOfBirth", "2002-11-20");
    record8.set("address", "369 Walnut Road, Lucknow, India 226001");
    const record8_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record8_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record9.id = "tamhvrvj9ytb6i0";
    record9.set("rollNumber", "CS010");
    record9.set("name", "Sneha Desai");
    record9.set("email", "sneha.desai@university.edu");
    record9.set("phone", "+91-9876543219");
    record9.set("gender", "Female");
    record9.set("dateOfBirth", "2003-04-12");
    record9.set("address", "741 Chestnut Drive, Chandigarh, India 160001");
    const record9_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record9_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record10.id = "bzc2ol1np9k0r6n";
    record10.set("rollNumber", "EC001");
    record10.set("name", "Karan Joshi");
    record10.set("email", "karan.joshi@university.edu");
    record10.set("phone", "+91-9876543220");
    record10.set("gender", "Male");
    record10.set("dateOfBirth", "2002-02-28");
    record10.set("address", "852 Ash Lane, Surat, India 395001");
    const record10_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record10_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record11.id = "vj15me3v523z8s1";
    record11.set("rollNumber", "EC002");
    record11.set("name", "Meera Singh");
    record11.set("email", "meera.singh@university.edu");
    record11.set("phone", "+91-9876543221");
    record11.set("gender", "Female");
    record11.set("dateOfBirth", "2003-07-14");
    record11.set("address", "963 Willow Street, Indore, India 452001");
    const record11_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record11_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record12.id = "tgcd4nt0o7hgv5s";
    record12.set("rollNumber", "EC003");
    record12.set("name", "Nikhil Patel");
    record12.set("email", "nikhil.patel@university.edu");
    record12.set("phone", "+91-9876543222");
    record12.set("gender", "Male");
    record12.set("dateOfBirth", "2002-10-05");
    record12.set("address", "147 Poplar Avenue, Nagpur, India 440001");
    const record12_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record12_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record13.id = "cq9dqblviwu4xoz";
    record13.set("rollNumber", "EC004");
    record13.set("name", "Pooja Verma");
    record13.set("email", "pooja.verma@university.edu");
    record13.set("phone", "+91-9876543223");
    record13.set("gender", "Female");
    record13.set("dateOfBirth", "2003-05-19");
    record13.set("address", "258 Sycamore Road, Thane, India 400601");
    const record13_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record13_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record14.id = "o9nworcr1e56uy3";
    record14.set("rollNumber", "EC005");
    record14.set("name", "Sameer Khan");
    record14.set("email", "sameer.khan@university.edu");
    record14.set("phone", "+91-9876543224");
    record14.set("gender", "Male");
    record14.set("dateOfBirth", "2002-08-30");
    record14.set("address", "369 Hickory Drive, Bhopal, India 462001");
    const record14_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record14_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record15.id = "7mr3d7ubvq088ma";
    record15.set("rollNumber", "EC006");
    record15.set("name", "Tanvi Sharma");
    record15.set("email", "tanvi.sharma@university.edu");
    record15.set("phone", "+91-9876543225");
    record15.set("gender", "Female");
    record15.set("dateOfBirth", "2003-02-11");
    record15.set("address", "741 Juniper Lane, Visakhapatnam, India 530001");
    const record15_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record15_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record16.id = "om4cexpvu3o5hwm";
    record16.set("rollNumber", "EC007");
    record16.set("name", "Varun Nair");
    record16.set("email", "varun.nair@university.edu");
    record16.set("phone", "+91-9876543226");
    record16.set("gender", "Male");
    record16.set("dateOfBirth", "2002-06-22");
    record16.set("address", "852 Laurel Street, Pimpri-Chinchwad, India 411001");
    const record16_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record16_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record17.id = "1w76gkpf1xaiz3x";
    record17.set("rollNumber", "EC008");
    record17.set("name", "Yuki Tanaka");
    record17.set("email", "yuki.tanaka@university.edu");
    record17.set("phone", "+91-9876543227");
    record17.set("gender", "Female");
    record17.set("dateOfBirth", "2003-09-08");
    record17.set("address", "963 Magnolia Avenue, Pune, India 411043");
    const record17_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record17_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record18.id = "vuktn3ncuegf01h";
    record18.set("rollNumber", "EC009");
    record18.set("name", "Zara Ahmed");
    record18.set("email", "zara.ahmed@university.edu");
    record18.set("phone", "+91-9876543228");
    record18.set("gender", "Female");
    record18.set("dateOfBirth", "2002-04-16");
    record18.set("address", "147 Olive Road, Nashik, India 422001");
    const record18_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record18_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record19.id = "d2j9e8s02hd50zi";
    record19.set("rollNumber", "EC010");
    record19.set("name", "Aryan Kapoor");
    record19.set("email", "aryan.kapoor@university.edu");
    record19.set("phone", "+91-9876543229");
    record19.set("gender", "Male");
    record19.set("dateOfBirth", "2003-11-25");
    record19.set("address", "258 Palm Drive, Aurangabad, India 431001");
    const record19_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record19_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record20.id = "2z4exbdppwgsj5g";
    record20.set("rollNumber", "ME001");
    record20.set("name", "Bhavesh Desai");
    record20.set("email", "bhavesh.desai@university.edu");
    record20.set("phone", "+91-9876543230");
    record20.set("gender", "Male");
    record20.set("dateOfBirth", "2002-03-09");
    record20.set("address", "369 Quartz Lane, Dhanbad, India 826001");
    const record20_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record20_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record21.id = "ac7iasgcm61u6mh";
    record21.set("rollNumber", "ME002");
    record21.set("name", "Chitra Rao");
    record21.set("email", "chitra.rao@university.edu");
    record21.set("phone", "+91-9876543231");
    record21.set("gender", "Female");
    record21.set("dateOfBirth", "2003-10-17");
    record21.set("address", "741 Rosewood Street, Amritsar, India 143001");
    const record21_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record21_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record22.id = "0wisxegkmpc70qb";
    record22.set("rollNumber", "ME003");
    record22.set("name", "Deepak Kumar");
    record22.set("email", "deepak.kumar@university.edu");
    record22.set("phone", "+91-9876543232");
    record22.set("gender", "Male");
    record22.set("dateOfBirth", "2002-01-24");
    record22.set("address", "852 Sandalwood Avenue, Varanasi, India 221001");
    const record22_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record22_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record23.id = "oeyni22sxbty14o";
    record23.set("rollNumber", "ME004");
    record23.set("name", "Esha Patel");
    record23.set("email", "esha.patel@university.edu");
    record23.set("phone", "+91-9876543233");
    record23.set("gender", "Female");
    record23.set("dateOfBirth", "2003-08-05");
    record23.set("address", "963 Teak Road, Vadodara, India 390001");
    const record23_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record23_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record24.id = "1bttwsnfeyloe4m";
    record24.set("rollNumber", "ME005");
    record24.set("name", "Faisal Khan");
    record24.set("email", "faisal.khan@university.edu");
    record24.set("phone", "+91-9876543234");
    record24.set("gender", "Male");
    record24.set("dateOfBirth", "2002-05-12");
    record24.set("address", "147 Umber Drive, Ghaziabad, India 201001");
    const record24_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record24_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record25.id = "ajuv3j16r00e6gf";
    record25.set("rollNumber", "ME006");
    record25.set("name", "Gita Sharma");
    record25.set("email", "gita.sharma@university.edu");
    record25.set("phone", "+91-9876543235");
    record25.set("gender", "Female");
    record25.set("dateOfBirth", "2003-12-30");
    record25.set("address", "258 Violet Lane, Ludhiana, India 141001");
    const record25_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record25_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record26.id = "c8rtav5dvb09wgq";
    record26.set("rollNumber", "ME007");
    record26.set("name", "Harsh Verma");
    record26.set("email", "harsh.verma@university.edu");
    record26.set("phone", "+91-9876543236");
    record26.set("gender", "Male");
    record26.set("dateOfBirth", "2002-07-08");
    record26.set("address", "369 Walnut Street, Agra, India 282001");
    const record26_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record26_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record27.id = "9lsaov9vlquaf0q";
    record27.set("rollNumber", "ME008");
    record27.set("name", "Ishita Gupta");
    record27.set("email", "ishita.gupta@university.edu");
    record27.set("phone", "+91-9876543237");
    record27.set("gender", "Female");
    record27.set("dateOfBirth", "2003-04-20");
    record27.set("address", "741 Xanadu Avenue, Meerut, India 250001");
    const record27_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record27_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record28.id = "qxxwgzzd7hzmal9";
    record28.set("rollNumber", "ME009");
    record28.set("name", "Jatin Singh");
    record28.set("email", "jatin.singh@university.edu");
    record28.set("phone", "+91-9876543238");
    record28.set("gender", "Male");
    record28.set("dateOfBirth", "2002-09-03");
    record28.set("address", "852 Yarrow Road, Nashik, India 422001");
    const record28_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record28_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record29.id = "7wy1h2z28jmkt1p";
    record29.set("rollNumber", "ME010");
    record29.set("name", "Kavya Nair");
    record29.set("email", "kavya.nair@university.edu");
    record29.set("phone", "+91-9876543239");
    record29.set("gender", "Female");
    record29.set("dateOfBirth", "2003-06-14");
    record29.set("address", "963 Zinnia Drive, Faridabad, India 121001");
    const record29_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record29_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record30.id = "pc9tdc48091h0z1";
    record30.set("rollNumber", "CE001");
    record30.set("name", "Lakshmi Reddy");
    record30.set("email", "lakshmi.reddy@university.edu");
    record30.set("phone", "+91-9876543240");
    record30.set("gender", "Female");
    record30.set("dateOfBirth", "2002-02-19");
    record30.set("address", "147 Acacia Lane, Goa, India 403001");
    const record30_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record30_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
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
    record31.id = "5feehy4wt2atruv";
    record31.set("rollNumber", "CE002");
    record31.set("name", "Manish Patel");
    record31.set("email", "manish.patel@university.edu");
    record31.set("phone", "+91-9876543241");
    record31.set("gender", "Male");
    record31.set("dateOfBirth", "2003-09-27");
    record31.set("address", "258 Bamboo Street, Indore, India 452002");
    const record31_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record31_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
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
    record32.id = "wy9tow3k8ubut0s";
    record32.set("rollNumber", "CE003");
    record32.set("name", "Nisha Sharma");
    record32.set("email", "nisha.sharma@university.edu");
    record32.set("phone", "+91-9876543242");
    record32.set("gender", "Female");
    record32.set("dateOfBirth", "2002-11-06");
    record32.set("address", "369 Cedar Avenue, Ranchi, India 834001");
    const record32_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record32_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
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
    record33.id = "27g9ymp76bvz158";
    record33.set("rollNumber", "CE004");
    record33.set("name", "Omkar Singh");
    record33.set("email", "omkar.singh@university.edu");
    record33.set("phone", "+91-9876543243");
    record33.set("gender", "Male");
    record33.set("dateOfBirth", "2003-03-15");
    record33.set("address", "741 Dogwood Road, Srinagar, India 190001");
    const record33_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record33_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
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
    record34.id = "4fg7v5vupky6zrs";
    record34.set("rollNumber", "CE005");
    record34.set("name", "Priya Verma");
    record34.set("email", "priya.verma@university.edu");
    record34.set("phone", "+91-9876543244");
    record34.set("gender", "Female");
    record34.set("dateOfBirth", "2002-08-22");
    record34.set("address", "852 Ebony Drive, Aurangabad, India 431002");
    const record34_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record34_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
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
    record35.id = "k9wllkmpbyf2qpe";
    record35.set("rollNumber", "CE006");
    record35.set("name", "Qasim Khan");
    record35.set("email", "qasim.khan@university.edu");
    record35.set("phone", "+91-9876543245");
    record35.set("gender", "Male");
    record35.set("dateOfBirth", "2003-01-10");
    record35.set("address", "963 Fir Lane, Pune, India 411044");
    const record35_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record35_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
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
    record36.id = "kidvj1izf0xb487";
    record36.set("rollNumber", "CE007");
    record36.set("name", "Ravi Kumar");
    record36.set("email", "ravi.kumar@university.edu");
    record36.set("phone", "+91-9876543246");
    record36.set("gender", "Male");
    record36.set("dateOfBirth", "2002-06-28");
    record36.set("address", "147 Ginkgo Street, Nashik, India 422002");
    const record36_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record36_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
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
    record37.id = "yt4b988m2umhj7c";
    record37.set("rollNumber", "CE008");
    record37.set("name", "Shreya Gupta");
    record37.set("email", "shreya.gupta@university.edu");
    record37.set("phone", "+91-9876543247");
    record37.set("gender", "Female");
    record37.set("dateOfBirth", "2003-10-04");
    record37.set("address", "258 Hazel Avenue, Vadodara, India 390002");
    const record37_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record37_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
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
    record38.id = "rx7zfvrxn99pak1";
    record38.set("rollNumber", "CE009");
    record38.set("name", "Tushar Nair");
    record38.set("email", "tushar.nair@university.edu");
    record38.set("phone", "+91-9876543248");
    record38.set("gender", "Male");
    record38.set("dateOfBirth", "2002-04-11");
    record38.set("address", "369 Iris Road, Ghaziabad, India 201002");
    const record38_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record38_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
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
    record39.id = "3lasiixrs8nswsq";
    record39.set("rollNumber", "CE010");
    record39.set("name", "Usha Desai");
    record39.set("email", "usha.desai@university.edu");
    record39.set("phone", "+91-9876543249");
    record39.set("gender", "Female");
    record39.set("dateOfBirth", "2003-07-23");
    record39.set("address", "741 Jasmine Drive, Ludhiana, India 141002");
    const record39_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record39_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
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
  const seededRecordIds = ["3lasiixrs8nswsq", "rx7zfvrxn99pak1", "yt4b988m2umhj7c", "kidvj1izf0xb487", "k9wllkmpbyf2qpe", "4fg7v5vupky6zrs", "27g9ymp76bvz158", "wy9tow3k8ubut0s", "5feehy4wt2atruv", "pc9tdc48091h0z1", "7wy1h2z28jmkt1p", "qxxwgzzd7hzmal9", "9lsaov9vlquaf0q", "c8rtav5dvb09wgq", "ajuv3j16r00e6gf", "1bttwsnfeyloe4m", "oeyni22sxbty14o", "0wisxegkmpc70qb", "ac7iasgcm61u6mh", "2z4exbdppwgsj5g", "d2j9e8s02hd50zi", "vuktn3ncuegf01h", "1w76gkpf1xaiz3x", "om4cexpvu3o5hwm", "7mr3d7ubvq088ma", "o9nworcr1e56uy3", "cq9dqblviwu4xoz", "tgcd4nt0o7hgv5s", "vj15me3v523z8s1", "bzc2ol1np9k0r6n", "tamhvrvj9ytb6i0", "s3wu2co2504j5m9", "cuxtods8r2zbgi1", "n28ktvojf3l31k5", "m1ad95ncm6hp0ul", "zkzktupm4tofol8", "hwebjj1zp601tdi", "jfgh60pmq4rim9u", "nabggtohd3pt5tm", "galgewdvctcbkaw"];
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
