/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("courses");

  const existing = collection.fields.getByName("courseType");
  if (existing) {
    if (existing.type === "select") {
      return; // field already exists with correct type, skip
    }
    collection.fields.removeByName("courseType"); // exists with wrong type, remove first
  }

  collection.fields.add(new SelectField({
    name: "courseType",
    required: true,
    values: ["Regular Course", "Lab", "Software Project"]
  }));

  return app.save(collection);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("courses");
    collection.fields.removeByName("courseType");
    return app.save(collection);
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("Collection not found, skipping revert");
      return;
    }
    throw e;
  }
})
