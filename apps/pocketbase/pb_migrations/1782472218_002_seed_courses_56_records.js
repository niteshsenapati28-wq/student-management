/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const record0 = new Record(collection);
    record0.id = "vpfepbjjmqon116";
    record0.set("courseName", "Data Structures & Algorithms");
    record0.set("courseCode", "CS101");
    record0.set("credits", 4);
    record0.set("semester", 3);
    record0.set("courseType", "Regular Course");
    record0.set("description", "Fundamental data structures including arrays, linked lists, trees, graphs and algorithm analysis with time/space complexity");
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
    record1.id = "kpaa41hdvl8lam9";
    record1.set("courseName", "Database Management Systems");
    record1.set("courseCode", "CS201");
    record1.set("credits", 4);
    record1.set("semester", 4);
    record1.set("courseType", "Regular Course");
    record1.set("description", "Relational database design, SQL, normalization, transactions, indexing and query optimization");
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
    record2.id = "qrgtljfu1z8za27";
    record2.set("courseName", "Web Development");
    record2.set("courseCode", "CS301");
    record2.set("credits", 3);
    record2.set("semester", 5);
    record2.set("courseType", "Regular Course");
    record2.set("description", "Frontend and backend web technologies including HTML, CSS, JavaScript, frameworks and REST APIs");
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
    record3.id = "zk24fph1hothato";
    record3.set("courseName", "Operating Systems");
    record3.set("courseCode", "CS401");
    record3.set("credits", 4);
    record3.set("semester", 5);
    record3.set("courseType", "Regular Course");
    record3.set("description", "Process management, memory management, file systems, scheduling algorithms and synchronization");
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
    record4.id = "btz0xn4uhq0mwvc";
    record4.set("courseName", "Artificial Intelligence");
    record4.set("courseCode", "CS501");
    record4.set("credits", 4);
    record4.set("semester", 6);
    record4.set("courseType", "Regular Course");
    record4.set("description", "Machine learning, neural networks, natural language processing and AI applications");
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
    record5.id = "qn0dvrqc2dzlatz";
    record5.set("courseName", "Cloud Computing");
    record5.set("courseCode", "CS601");
    record5.set("credits", 3);
    record5.set("semester", 7);
    record5.set("courseType", "Regular Course");
    record5.set("description", "Cloud platforms, virtualization, containerization, serverless computing and cloud security");
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
    record6.id = "lo6cevf095l9lit";
    record6.set("courseName", "Data Structures Lab");
    record6.set("courseCode", "CS101L");
    record6.set("credits", 2);
    record6.set("semester", 3);
    record6.set("courseType", "Lab");
    record6.set("description", "Hands-on implementation of data structures and algorithm analysis using programming languages");
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
    record7.id = "elmqxx7tw5wsy6n";
    record7.set("courseName", "Database Lab");
    record7.set("courseCode", "CS201L");
    record7.set("credits", 2);
    record7.set("semester", 4);
    record7.set("courseType", "Lab");
    record7.set("description", "Practical SQL programming, database design and optimization exercises");
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
    record8.id = "5cri6qno9udfqk5";
    record8.set("courseName", "Web Development Lab");
    record8.set("courseCode", "CS301L");
    record8.set("credits", 2);
    record8.set("semester", 5);
    record8.set("courseType", "Lab");
    record8.set("description", "Building web applications with modern frameworks and deployment practices");
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
    record9.id = "ptp47nkzyahh6xs";
    record9.set("courseName", "E-Commerce Platform");
    record9.set("courseCode", "CS-PROJ-001");
    record9.set("credits", 4);
    record9.set("semester", 6);
    record9.set("courseType", "Software Project");
    record9.set("description", "Full-stack e-commerce application with product catalog, shopping cart and payment integration");
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
    record10.id = "vvayhozzom73ldb";
    record10.set("courseName", "Social Media Application");
    record10.set("courseCode", "CS-PROJ-002");
    record10.set("credits", 4);
    record10.set("semester", 6);
    record10.set("courseType", "Software Project");
    record10.set("description", "Social networking platform with user profiles, messaging and feed functionality");
    const record10_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record10_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record11.id = "nrl9gvi8immkhgf";
    record11.set("courseName", "AI Chatbot System");
    record11.set("courseCode", "CS-PROJ-003");
    record11.set("credits", 4);
    record11.set("semester", 7);
    record11.set("courseType", "Software Project");
    record11.set("description", "Intelligent chatbot using NLP and machine learning for conversational AI");
    const record11_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record11_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record12.id = "gnl3jjgpol2feb6";
    record12.set("courseName", "Cloud Storage System");
    record12.set("courseCode", "CS-PROJ-004");
    record12.set("credits", 4);
    record12.set("semester", 7);
    record12.set("courseType", "Software Project");
    record12.set("description", "Cloud-based file storage and synchronization system with security features");
    const record12_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record12_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record13.id = "j9spd1k7nrjcrjv";
    record13.set("courseName", "Mobile App Development");
    record13.set("courseCode", "CS-PROJ-005");
    record13.set("credits", 3);
    record13.set("semester", 8);
    record13.set("courseType", "Software Project");
    record13.set("description", "Cross-platform mobile application development with native features");
    const record13_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Computer Science'");
    if (!record13_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Computer Science'\""); }
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
    record14.id = "ew577bsimlmy2zg";
    record14.set("courseName", "Digital Electronics");
    record14.set("courseCode", "EC101");
    record14.set("credits", 4);
    record14.set("semester", 3);
    record14.set("courseType", "Regular Course");
    record14.set("description", "Boolean algebra, logic gates, combinational and sequential circuits, digital design principles");
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
    record15.id = "rmhbznkkiyzfl4v";
    record15.set("courseName", "Microprocessors & Microcontrollers");
    record15.set("courseCode", "EC201");
    record15.set("credits", 4);
    record15.set("semester", 4);
    record15.set("courseType", "Regular Course");
    record15.set("description", "Microprocessor architecture, assembly language, microcontroller programming and embedded systems");
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
    record16.id = "bb40krlrywjdz8f";
    record16.set("courseName", "Communication Systems");
    record16.set("courseCode", "EC301");
    record16.set("credits", 4);
    record16.set("semester", 5);
    record16.set("courseType", "Regular Course");
    record16.set("description", "Analog and digital communication, modulation techniques, channel coding and information theory");
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
    record17.id = "5wl0bufjfnnmfcd";
    record17.set("courseName", "Signal Processing");
    record17.set("courseCode", "EC401");
    record17.set("credits", 4);
    record17.set("semester", 5);
    record17.set("courseType", "Regular Course");
    record17.set("description", "Digital signal processing, filtering, Fourier analysis, signal analysis and applications");
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
    record18.id = "6jo7hnz4x9qqmiw";
    record18.set("courseName", "VLSI Design");
    record18.set("courseCode", "EC501");
    record18.set("credits", 4);
    record18.set("semester", 6);
    record18.set("courseType", "Regular Course");
    record18.set("description", "VLSI design methodology, circuit design, layout, simulation and fabrication processes");
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
    record19.id = "1rnu0adibhu0ssm";
    record19.set("courseName", "Wireless Networks");
    record19.set("courseCode", "EC601");
    record19.set("credits", 3);
    record19.set("semester", 7);
    record19.set("courseType", "Regular Course");
    record19.set("description", "Wireless communication standards, network protocols, antenna design and spectrum management");
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
    record20.id = "ums2hrvh8cnnrlq";
    record20.set("courseName", "Digital Electronics Lab");
    record20.set("courseCode", "EC101L");
    record20.set("credits", 2);
    record20.set("semester", 3);
    record20.set("courseType", "Lab");
    record20.set("description", "Experimental verification of digital circuits and logic design using hardware tools");
    const record20_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record20_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record21.id = "y4zolgdbuw1z77e";
    record21.set("courseName", "Microcontroller Lab");
    record21.set("courseCode", "EC201L");
    record21.set("credits", 2);
    record21.set("semester", 4);
    record21.set("courseType", "Lab");
    record21.set("description", "Hands-on microcontroller programming and embedded system development");
    const record21_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record21_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record22.id = "7sf4iue5fq7jqr3";
    record22.set("courseName", "Communication Lab");
    record22.set("courseCode", "EC301L");
    record22.set("credits", 2);
    record22.set("semester", 5);
    record22.set("courseType", "Lab");
    record22.set("description", "Communication system experiments including modulation and signal transmission");
    const record22_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record22_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record23.id = "p2y4w9wcv7ciqvk";
    record23.set("courseName", "IoT Home Automation System");
    record23.set("courseCode", "EC-PROJ-001");
    record23.set("credits", 4);
    record23.set("semester", 6);
    record23.set("courseType", "Software Project");
    record23.set("description", "Smart home system with IoT sensors, wireless communication and mobile control");
    const record23_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record23_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record24.id = "z0gl53uv7la7uxf";
    record24.set("courseName", "Signal Processing Application");
    record24.set("courseCode", "EC-PROJ-002");
    record24.set("credits", 4);
    record24.set("semester", 7);
    record24.set("courseType", "Software Project");
    record24.set("description", "Real-time signal processing application for audio or image processing");
    const record24_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record24_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record25.id = "v0gkts7lrwoxnwq";
    record25.set("courseName", "FPGA Design Project");
    record25.set("courseCode", "EC-PROJ-003");
    record25.set("credits", 4);
    record25.set("semester", 7);
    record25.set("courseType", "Software Project");
    record25.set("description", "FPGA-based digital system design and implementation");
    const record25_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record25_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record26.id = "z521bk47aw6o2s2";
    record26.set("courseName", "5G Network Simulator");
    record26.set("courseCode", "EC-PROJ-004");
    record26.set("credits", 4);
    record26.set("semester", 8);
    record26.set("courseType", "Software Project");
    record26.set("description", "5G network simulation and performance analysis tool");
    const record26_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record26_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record27.id = "m3w9hg1dntnwxce";
    record27.set("courseName", "Smart Wearable Device");
    record27.set("courseCode", "EC-PROJ-005");
    record27.set("credits", 3);
    record27.set("semester", 8);
    record27.set("courseType", "Software Project");
    record27.set("description", "Wearable device design with sensors, wireless connectivity and health monitoring");
    const record27_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Electronics & Communication'");
    if (!record27_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Electronics & Communication'\""); }
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
    record28.id = "g6v5eqkqp59urq5";
    record28.set("courseName", "Thermodynamics");
    record28.set("courseCode", "ME101");
    record28.set("credits", 4);
    record28.set("semester", 3);
    record28.set("courseType", "Regular Course");
    record28.set("description", "Laws of thermodynamics, entropy, heat engines, refrigeration cycles and applications");
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
    record29.id = "9n2dzxfayza55kv";
    record29.set("courseName", "Fluid Mechanics");
    record29.set("courseCode", "ME201");
    record29.set("credits", 4);
    record29.set("semester", 4);
    record29.set("courseType", "Regular Course");
    record29.set("description", "Fluid properties, flow analysis, Bernoulli equation, pipe flow and turbomachinery");
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
    record30.id = "4xwx5a35kaqs475";
    record30.set("courseName", "Mechanics of Materials");
    record30.set("courseCode", "ME301");
    record30.set("credits", 4);
    record30.set("semester", 5);
    record30.set("courseType", "Regular Course");
    record30.set("description", "Stress and strain analysis, material properties, failure theories and design principles");
    const record30_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record30_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record31.id = "jey24botlsjiopg";
    record31.set("courseName", "Machine Design");
    record31.set("courseCode", "ME401");
    record31.set("credits", 4);
    record31.set("semester", 5);
    record31.set("courseType", "Regular Course");
    record31.set("description", "Machine component design, bearings, gears, shafts and mechanical system design");
    const record31_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record31_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record32.id = "n5c74ykbkpl5h4h";
    record32.set("courseName", "Heat Transfer");
    record32.set("courseCode", "ME501");
    record32.set("credits", 4);
    record32.set("semester", 6);
    record32.set("courseType", "Regular Course");
    record32.set("description", "Conduction, convection, radiation heat transfer and thermal system analysis");
    const record32_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record32_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record33.id = "r0a1uwkkz8bmnxb";
    record33.set("courseName", "Renewable Energy Systems");
    record33.set("courseCode", "ME601");
    record33.set("credits", 3);
    record33.set("semester", 7);
    record33.set("courseType", "Regular Course");
    record33.set("description", "Solar, wind, hydro and geothermal energy systems with sustainability analysis");
    const record33_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record33_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record34.id = "iwuk40jziws0nje";
    record34.set("courseName", "Thermodynamics Lab");
    record34.set("courseCode", "ME101L");
    record34.set("credits", 2);
    record34.set("semester", 3);
    record34.set("courseType", "Lab");
    record34.set("description", "Experimental study of thermodynamic processes and heat engine performance");
    const record34_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record34_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record35.id = "go3h29le9okfs2z";
    record35.set("courseName", "Fluid Mechanics Lab");
    record35.set("courseCode", "ME201L");
    record35.set("credits", 2);
    record35.set("semester", 4);
    record35.set("courseType", "Lab");
    record35.set("description", "Fluid flow experiments including pipe flow, turbulence and pump characteristics");
    const record35_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record35_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record36.id = "p53c1p6fbxb8668";
    record36.set("courseName", "Materials Testing Lab");
    record36.set("courseCode", "ME301L");
    record36.set("credits", 2);
    record36.set("semester", 5);
    record36.set("courseType", "Lab");
    record36.set("description", "Material testing and characterization including tensile, compression and hardness tests");
    const record36_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record36_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record37.id = "wgq6rafmftpbm0n";
    record37.set("courseName", "CAD Design & Simulation");
    record37.set("courseCode", "ME-PROJ-001");
    record37.set("credits", 4);
    record37.set("semester", 6);
    record37.set("courseType", "Software Project");
    record37.set("description", "3D CAD modeling and finite element analysis of mechanical components");
    const record37_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record37_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record38.id = "luflxx7x3xsmk5d";
    record38.set("courseName", "Thermal Analysis Project");
    record38.set("courseCode", "ME-PROJ-002");
    record38.set("credits", 4);
    record38.set("semester", 7);
    record38.set("courseType", "Software Project");
    record38.set("description", "Thermal simulation and heat transfer analysis of engineering systems");
    const record38_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record38_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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
    record39.id = "2v51sqdwj559hua";
    record39.set("courseName", "Turbine Design Project");
    record39.set("courseCode", "ME-PROJ-003");
    record39.set("credits", 4);
    record39.set("semester", 7);
    record39.set("courseType", "Software Project");
    record39.set("description", "Design and analysis of turbine systems for power generation");
    const record39_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record39_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
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

  const record40 = new Record(collection);
    record40.id = "jfwvcood6pfmlyc";
    record40.set("courseName", "Robotics System Design");
    record40.set("courseCode", "ME-PROJ-004");
    record40.set("credits", 4);
    record40.set("semester", 8);
    record40.set("courseType", "Software Project");
    record40.set("description", "Robotic system design with kinematics, dynamics and control");
    const record40_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record40_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
    record40.set("departmentId", record40_departmentIdLookup.id);
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
    record41.id = "lcd0igx77ozvtmc";
    record41.set("courseName", "Sustainable Energy Solution");
    record41.set("courseCode", "ME-PROJ-005");
    record41.set("credits", 3);
    record41.set("semester", 8);
    record41.set("courseType", "Software Project");
    record41.set("description", "Design of sustainable energy solution with environmental impact analysis");
    const record41_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Mechanical Engineering'");
    if (!record41_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Mechanical Engineering'\""); }
    record41.set("departmentId", record41_departmentIdLookup.id);
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
    record42.id = "k1pj3zu9j79cxm0";
    record42.set("courseName", "Structural Analysis");
    record42.set("courseCode", "CE101");
    record42.set("credits", 4);
    record42.set("semester", 3);
    record42.set("courseType", "Regular Course");
    record42.set("description", "Analysis of beams, frames, trusses using classical and matrix methods");
    const record42_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record42_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record42.set("departmentId", record42_departmentIdLookup.id);
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
    record43.id = "qimf94vlpcbthsy";
    record43.set("courseName", "Concrete Technology");
    record43.set("courseCode", "CE201");
    record43.set("credits", 4);
    record43.set("semester", 4);
    record43.set("courseType", "Regular Course");
    record43.set("description", "Concrete mix design, properties, durability, reinforcement and construction practices");
    const record43_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record43_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record43.set("departmentId", record43_departmentIdLookup.id);
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
    record44.id = "sc9kalpu6jkej72";
    record44.set("courseName", "Geotechnical Engineering");
    record44.set("courseCode", "CE301");
    record44.set("credits", 4);
    record44.set("semester", 5);
    record44.set("courseType", "Regular Course");
    record44.set("description", "Soil mechanics, foundation design, slope stability and ground improvement techniques");
    const record44_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record44_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record44.set("departmentId", record44_departmentIdLookup.id);
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
    record45.id = "9yclc4ubu5qq29v";
    record45.set("courseName", "Transportation Engineering");
    record45.set("courseCode", "CE401");
    record45.set("credits", 4);
    record45.set("semester", 5);
    record45.set("courseType", "Regular Course");
    record45.set("description", "Highway design, traffic engineering, pavement design and transportation planning");
    const record45_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record45_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record45.set("departmentId", record45_departmentIdLookup.id);
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
    record46.id = "jcyp6d5i2onrjo6";
    record46.set("courseName", "Environmental Engineering");
    record46.set("courseCode", "CE501");
    record46.set("credits", 4);
    record46.set("semester", 6);
    record46.set("courseType", "Regular Course");
    record46.set("description", "Water treatment, wastewater management, air pollution control and waste management");
    const record46_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record46_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record46.set("departmentId", record46_departmentIdLookup.id);
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
    record47.id = "do75jyauzc17v27";
    record47.set("courseName", "Water Resources Engineering");
    record47.set("courseCode", "CE601");
    record47.set("credits", 3);
    record47.set("semester", 7);
    record47.set("courseType", "Regular Course");
    record47.set("description", "Hydrology, water supply systems, irrigation design and flood management");
    const record47_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record47_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record47.set("departmentId", record47_departmentIdLookup.id);
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
    record48.id = "8fxd671gv3os71l";
    record48.set("courseName", "Structural Lab");
    record48.set("courseCode", "CE101L");
    record48.set("credits", 2);
    record48.set("semester", 3);
    record48.set("courseType", "Lab");
    record48.set("description", "Structural testing and analysis of beams, columns and composite structures");
    const record48_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record48_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record48.set("departmentId", record48_departmentIdLookup.id);
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
    record49.id = "6wl98fplowbpmte";
    record49.set("courseName", "Concrete Lab");
    record49.set("courseCode", "CE201L");
    record49.set("credits", 2);
    record49.set("semester", 4);
    record49.set("courseType", "Lab");
    record49.set("description", "Concrete testing including compressive strength, workability and durability tests");
    const record49_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record49_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record49.set("departmentId", record49_departmentIdLookup.id);
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
    record50.id = "yrq1n8ujqw81gdm";
    record50.set("courseName", "Geotechnical Lab");
    record50.set("courseCode", "CE301L");
    record50.set("credits", 2);
    record50.set("semester", 5);
    record50.set("courseType", "Lab");
    record50.set("description", "Soil testing and characterization including classification and bearing capacity");
    const record50_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record50_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record50.set("departmentId", record50_departmentIdLookup.id);
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
    record51.id = "8a0yjgb4iw4rd0e";
    record51.set("courseName", "Bridge Design Project");
    record51.set("courseCode", "CE-PROJ-001");
    record51.set("credits", 4);
    record51.set("semester", 6);
    record51.set("courseType", "Software Project");
    record51.set("description", "Design and analysis of bridge structures with load calculations");
    const record51_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record51_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record51.set("departmentId", record51_departmentIdLookup.id);
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
    record52.id = "vorwfxyllfyk79p";
    record52.set("courseName", "Building Design & Analysis");
    record52.set("courseCode", "CE-PROJ-002");
    record52.set("credits", 4);
    record52.set("semester", 7);
    record52.set("courseType", "Software Project");
    record52.set("description", "Multi-story building design with structural analysis and safety compliance");
    const record52_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record52_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record52.set("departmentId", record52_departmentIdLookup.id);
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
    record53.id = "f4k6skqk03oer9b";
    record53.set("courseName", "Highway Design Project");
    record53.set("courseCode", "CE-PROJ-003");
    record53.set("credits", 4);
    record53.set("semester", 7);
    record53.set("courseType", "Software Project");
    record53.set("description", "Highway alignment design and pavement design with traffic analysis");
    const record53_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record53_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record53.set("departmentId", record53_departmentIdLookup.id);
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
    record54.id = "702uvilx3b25j82";
    record54.set("courseName", "Water Treatment Plant Design");
    record54.set("courseCode", "CE-PROJ-004");
    record54.set("credits", 4);
    record54.set("semester", 8);
    record54.set("courseType", "Software Project");
    record54.set("description", "Design of water treatment facility with process optimization");
    const record54_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record54_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record54.set("departmentId", record54_departmentIdLookup.id);
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
    record55.id = "o8sboxyrlehwq1b";
    record55.set("courseName", "Smart City Infrastructure");
    record55.set("courseCode", "CE-PROJ-005");
    record55.set("credits", 3);
    record55.set("semester", 8);
    record55.set("courseType", "Software Project");
    record55.set("description", "Integrated smart city infrastructure design with sustainability features");
    const record55_departmentIdLookup = app.findFirstRecordByFilter("departments", "departmentName='Civil Engineering'");
    if (!record55_departmentIdLookup) { throw new Error("Lookup failed for departmentId: no record in 'departments' matching \"departmentName='Civil Engineering'\""); }
    record55.set("departmentId", record55_departmentIdLookup.id);
  try {
    app.save(record55);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["o8sboxyrlehwq1b", "702uvilx3b25j82", "f4k6skqk03oer9b", "vorwfxyllfyk79p", "8a0yjgb4iw4rd0e", "yrq1n8ujqw81gdm", "6wl98fplowbpmte", "8fxd671gv3os71l", "do75jyauzc17v27", "jcyp6d5i2onrjo6", "9yclc4ubu5qq29v", "sc9kalpu6jkej72", "qimf94vlpcbthsy", "k1pj3zu9j79cxm0", "lcd0igx77ozvtmc", "jfwvcood6pfmlyc", "2v51sqdwj559hua", "luflxx7x3xsmk5d", "wgq6rafmftpbm0n", "p53c1p6fbxb8668", "go3h29le9okfs2z", "iwuk40jziws0nje", "r0a1uwkkz8bmnxb", "n5c74ykbkpl5h4h", "jey24botlsjiopg", "4xwx5a35kaqs475", "9n2dzxfayza55kv", "g6v5eqkqp59urq5", "m3w9hg1dntnwxce", "z521bk47aw6o2s2", "v0gkts7lrwoxnwq", "z0gl53uv7la7uxf", "p2y4w9wcv7ciqvk", "7sf4iue5fq7jqr3", "y4zolgdbuw1z77e", "ums2hrvh8cnnrlq", "1rnu0adibhu0ssm", "6jo7hnz4x9qqmiw", "5wl0bufjfnnmfcd", "bb40krlrywjdz8f", "rmhbznkkiyzfl4v", "ew577bsimlmy2zg", "j9spd1k7nrjcrjv", "gnl3jjgpol2feb6", "nrl9gvi8immkhgf", "vvayhozzom73ldb", "ptp47nkzyahh6xs", "5cri6qno9udfqk5", "elmqxx7tw5wsy6n", "lo6cevf095l9lit", "qn0dvrqc2dzlatz", "btz0xn4uhq0mwvc", "zk24fph1hothato", "qrgtljfu1z8za27", "kpaa41hdvl8lam9", "vpfepbjjmqon116"];
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
