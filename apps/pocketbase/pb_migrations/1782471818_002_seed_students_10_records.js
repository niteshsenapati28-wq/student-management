/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("students");

  const record0 = new Record(collection);
    record0.id = "bva2gok7r4bc4rh";
    record0.set("rollNumber", "STU001");
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
    record1.id = "4mvnhmudv6qqp6h";
    record1.set("rollNumber", "STU002");
    record1.set("name", "Priya Sharma");
    record1.set("email", "priya.sharma@university.edu");
    record1.set("phone", "+91-9876543211");
    record1.set("gender", "Female");
    record1.set("dateOfBirth", "2003-08-22");
    record1.set("address", "456 Oak Avenue, Mumbai, India 400001");
    const record1_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record1_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record2.id = "b2vr3b85sycqbnf";
    record2.set("rollNumber", "STU003");
    record2.set("name", "Arjun Singh");
    record2.set("email", "arjun.singh@university.edu");
    record2.set("phone", "+91-9876543212");
    record2.set("gender", "Male");
    record2.set("dateOfBirth", "2002-12-10");
    record2.set("address", "789 Pine Road, Bangalore, India 560001");
    const record2_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record2_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record3.id = "v6f4ghv5nd7nwze";
    record3.set("rollNumber", "STU004");
    record3.set("name", "Neha Patel");
    record3.set("email", "neha.patel@university.edu");
    record3.set("phone", "+91-9876543213");
    record3.set("gender", "Female");
    record3.set("dateOfBirth", "2003-03-18");
    record3.set("address", "321 Elm Street, Ahmedabad, India 380001");
    const record3_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record3_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
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
    record4.id = "noxvdggocsul6t4";
    record4.set("rollNumber", "STU005");
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
    record5.id = "nkeyp7z0h3plmqw";
    record5.set("rollNumber", "STU006");
    record5.set("name", "Anjali Gupta");
    record5.set("email", "anjali.gupta@university.edu");
    record5.set("phone", "+91-9876543215");
    record5.set("gender", "Female");
    record5.set("dateOfBirth", "2003-01-30");
    record5.set("address", "987 Birch Lane, Pune, India 411001");
    const record5_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record5_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record6.id = "fpi6z7zxdqj5a94";
    record6.set("rollNumber", "STU007");
    record6.set("name", "Rohan Verma");
    record6.set("email", "rohan.verma@university.edu");
    record6.set("phone", "+91-9876543216");
    record6.set("gender", "Male");
    record6.set("dateOfBirth", "2002-09-14");
    record6.set("address", "147 Cedar Street, Jaipur, India 302001");
    const record6_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record6_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record7.id = "4xhk1uu0tykp38l";
    record7.set("rollNumber", "STU008");
    record7.set("name", "Divya Nair");
    record7.set("email", "divya.nair@university.edu");
    record7.set("phone", "+91-9876543217");
    record7.set("gender", "Female");
    record7.set("dateOfBirth", "2003-06-08");
    record7.set("address", "258 Spruce Avenue, Kochi, India 682001");
    const record7_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record7_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
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
    record8.id = "bu81jr84joi84zj";
    record8.set("rollNumber", "STU009");
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
    record9.id = "u78d0xj8g0ofcu4";
    record9.set("rollNumber", "STU010");
    record9.set("name", "Sneha Desai");
    record9.set("email", "sneha.desai@university.edu");
    record9.set("phone", "+91-9876543219");
    record9.set("gender", "Female");
    record9.set("dateOfBirth", "2003-04-12");
    record9.set("address", "741 Chestnut Drive, Chandigarh, India 160001");
    const record9_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record9_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
}, (app) => {
  const seededRecordIds = ["u78d0xj8g0ofcu4", "bu81jr84joi84zj", "4xhk1uu0tykp38l", "fpi6z7zxdqj5a94", "nkeyp7z0h3plmqw", "noxvdggocsul6t4", "v6f4ghv5nd7nwze", "b2vr3b85sycqbnf", "4mvnhmudv6qqp6h", "bva2gok7r4bc4rh"];
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
