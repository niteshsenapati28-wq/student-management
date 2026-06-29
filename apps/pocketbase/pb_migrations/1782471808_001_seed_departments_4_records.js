/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("departments");

  const record0 = new Record(collection);
    record0.id = "tr3cfoeb1es1zw6";
    record0.set("departmentName", "Computer Science");
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
    record1.id = "bjereq78cs9y66h";
    record1.set("departmentName", "Electronics & Communication");
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
    record2.id = "n98zxzppsrwz2of";
    record2.set("departmentName", "Mechanical Engineering");
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
    record3.id = "3xsidtqxee7ixdi";
    record3.set("departmentName", "Civil Engineering");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["3xsidtqxee7ixdi", "n98zxzppsrwz2of", "bjereq78cs9y66h", "tr3cfoeb1es1zw6"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("departments", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
