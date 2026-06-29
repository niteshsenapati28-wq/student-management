/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.id = "pxf1zptau426fp4";
    record0.set("courseName", "Data Structures & Algorithms");
    record0.set("courseCode", "CS101");
    const record0_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record0_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
    record0.set("departmentId", record0_departmentIdLookup.id);
    record0.set("credits", 4);
    record0.set("semester", 3);
    record0.set("description", "Fundamental data structures and algorithm design");
    record0.set("courseType", "Regular Course");
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
    record1.id = "5l32ae2b7hxg4wv";
    record1.set("courseName", "Database Management Systems");
    record1.set("courseCode", "CS201");
    const record1_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record1_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
    record1.set("departmentId", record1_departmentIdLookup.id);
    record1.set("credits", 4);
    record1.set("semester", 4);
    record1.set("description", "Relational databases, SQL, and database design");
    record1.set("courseType", "Regular Course");
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
    record2.id = "7027jue2gcpppsn";
    record2.set("courseName", "Web Development");
    record2.set("courseCode", "CS301");
    const record2_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record2_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
    record2.set("departmentId", record2_departmentIdLookup.id);
    record2.set("credits", 3);
    record2.set("semester", 5);
    record2.set("description", "Frontend and backend web development technologies");
    record2.set("courseType", "Regular Course");
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
    record3.id = "70w4frnw398ll4y";
    record3.set("courseName", "Data Structures Lab");
    record3.set("courseCode", "CS101L");
    const record3_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record3_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
    record3.set("departmentId", record3_departmentIdLookup.id);
    record3.set("credits", 2);
    record3.set("semester", 3);
    record3.set("description", "Practical implementation of data structures in C/C++");
    record3.set("courseType", "Lab");
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
    record4.id = "5qz7ej5alvo1adq";
    record4.set("courseName", "Database Lab");
    record4.set("courseCode", "CS201L");
    const record4_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record4_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
    record4.set("departmentId", record4_departmentIdLookup.id);
    record4.set("credits", 2);
    record4.set("semester", 4);
    record4.set("description", "Hands-on SQL and database design exercises");
    record4.set("courseType", "Lab");
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
    record5.id = "zvlp8z6ukw0g1ac";
    record5.set("courseName", "E-Commerce Platform");
    record5.set("courseCode", "CS-PROJ-001");
    const record5_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record5_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
    record5.set("departmentId", record5_departmentIdLookup.id);
    record5.set("credits", 4);
    record5.set("semester", 6);
    record5.set("description", "Full-stack e-commerce application with payment integration");
    record5.set("courseType", "Software Project");
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
    record6.id = "pypv4hibsnlako9";
    record6.set("courseName", "Social Media Application");
    record6.set("courseCode", "CS-PROJ-002");
    const record6_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record6_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
    record6.set("departmentId", record6_departmentIdLookup.id);
    record6.set("credits", 4);
    record6.set("semester", 6);
    record6.set("description", "Real-time social networking platform with messaging");
    record6.set("courseType", "Software Project");
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
    record7.id = "op4olkeif3awuba";
    record7.set("courseName", "AI Chatbot System");
    record7.set("courseCode", "CS-PROJ-003");
    const record7_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record7_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
    record7.set("departmentId", record7_departmentIdLookup.id);
    record7.set("credits", 3);
    record7.set("semester", 7);
    record7.set("description", "Machine learning-based conversational AI system");
    record7.set("courseType", "Software Project");
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
    record8.id = "1in87sstwpfb4d6";
    record8.set("courseName", "Digital Electronics");
    record8.set("courseCode", "EC101");
    const record8_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record8_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
    record8.set("departmentId", record8_departmentIdLookup.id);
    record8.set("credits", 4);
    record8.set("semester", 3);
    record8.set("description", "Digital logic circuits and design");
    record8.set("courseType", "Regular Course");
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
    record9.id = "l5opn5g8mcoutdl";
    record9.set("courseName", "Microprocessors & Microcontrollers");
    record9.set("courseCode", "EC201");
    const record9_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record9_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
    record9.set("departmentId", record9_departmentIdLookup.id);
    record9.set("credits", 4);
    record9.set("semester", 4);
    record9.set("description", "8086 microprocessor and embedded systems");
    record9.set("courseType", "Regular Course");
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
    record10.id = "9l2n43kkpb6zyzj";
    record10.set("courseName", "Digital Electronics Lab");
    record10.set("courseCode", "EC101L");
    const record10_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record10_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
    record10.set("departmentId", record10_departmentIdLookup.id);
    record10.set("credits", 2);
    record10.set("semester", 3);
    record10.set("description", "Practical digital circuit design and simulation");
    record10.set("courseType", "Lab");
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
    record11.id = "rki2ipktc5k1f6h";
    record11.set("courseName", "IoT Home Automation System");
    record11.set("courseCode", "EC-PROJ-001");
    const record11_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record11_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
    record11.set("departmentId", record11_departmentIdLookup.id);
    record11.set("credits", 4);
    record11.set("semester", 6);
    record11.set("description", "Smart home automation using Arduino and IoT");
    record11.set("courseType", "Software Project");
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
    record12.id = "mnfs4mbx8z2gqy4";
    record12.set("courseName", "Signal Processing Application");
    record12.set("courseCode", "EC-PROJ-002");
    const record12_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record12_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
    record12.set("departmentId", record12_departmentIdLookup.id);
    record12.set("credits", 3);
    record12.set("semester", 7);
    record12.set("description", "Audio and image signal processing system");
    record12.set("courseType", "Software Project");
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
    record13.id = "j7ndfbchl0aaqnt";
    record13.set("courseName", "Thermodynamics");
    record13.set("courseCode", "ME101");
    const record13_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record13_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
    record13.set("departmentId", record13_departmentIdLookup.id);
    record13.set("credits", 4);
    record13.set("semester", 3);
    record13.set("description", "Heat, work, and energy principles");
    record13.set("courseType", "Regular Course");
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
    record14.id = "khx1ofgeg2kfql6";
    record14.set("courseName", "Fluid Mechanics");
    record14.set("courseCode", "ME201");
    const record14_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record14_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
    record14.set("departmentId", record14_departmentIdLookup.id);
    record14.set("credits", 4);
    record14.set("semester", 4);
    record14.set("description", "Fluid flow analysis and applications");
    record14.set("courseType", "Regular Course");
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
    record15.id = "08m3sze3xketv82";
    record15.set("courseName", "Thermodynamics Lab");
    record15.set("courseCode", "ME101L");
    const record15_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record15_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
    record15.set("departmentId", record15_departmentIdLookup.id);
    record15.set("credits", 2);
    record15.set("semester", 3);
    record15.set("description", "Experimental thermodynamics and heat transfer");
    record15.set("courseType", "Lab");
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
    record16.id = "redt6ugjfm5y40y";
    record16.set("courseName", "CAD Design & Simulation");
    record16.set("courseCode", "ME-PROJ-001");
    const record16_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record16_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
    record16.set("departmentId", record16_departmentIdLookup.id);
    record16.set("credits", 4);
    record16.set("semester", 6);
    record16.set("description", "3D CAD modeling and FEA simulation");
    record16.set("courseType", "Software Project");
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
    record17.id = "mys6erwga6y66jg";
    record17.set("courseName", "Structural Analysis");
    record17.set("courseCode", "CE101");
    const record17_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record17_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record17.set("departmentId", record17_departmentIdLookup.id);
    record17.set("credits", 4);
    record17.set("semester", 3);
    record17.set("description", "Analysis of beams, frames, and trusses");
    record17.set("courseType", "Regular Course");
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
    record18.id = "wtu70t4mxdky9j9";
    record18.set("courseName", "Concrete Technology");
    record18.set("courseCode", "CE201");
    const record18_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record18_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record18.set("departmentId", record18_departmentIdLookup.id);
    record18.set("credits", 4);
    record18.set("semester", 4);
    record18.set("description", "Properties and design of concrete structures");
    record18.set("courseType", "Regular Course");
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["wtu70t4mxdky9j9", "mys6erwga6y66jg", "redt6ugjfm5y40y", "08m3sze3xketv82", "khx1ofgeg2kfql6", "j7ndfbchl0aaqnt", "mnfs4mbx8z2gqy4", "rki2ipktc5k1f6h", "9l2n43kkpb6zyzj", "l5opn5g8mcoutdl", "1in87sstwpfb4d6", "op4olkeif3awuba", "pypv4hibsnlako9", "zvlp8z6ukw0g1ac", "5qz7ej5alvo1adq", "70w4frnw398ll4y", "7027jue2gcpppsn", "5l32ae2b7hxg4wv", "pxf1zptau426fp4"];
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
