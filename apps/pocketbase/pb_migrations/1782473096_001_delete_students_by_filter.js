/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter("students", "rollNumber ~ '^CS00[6-9]' || rollNumber ~ '^CS[1-3][0-9]' || rollNumber ~ '^EC00[6-9]' || rollNumber ~ '^EC[1-3][0-9]' || rollNumber ~ '^ME00[6-9]' || rollNumber ~ '^ME[1-3][0-9]' || rollNumber ~ '^CE00[6-9]' || rollNumber ~ '^CE[1-3][0-9]'");
  for (const record of records) {
    app.delete(record);
  }
}, (app) => {
  // Rollback: record data not stored, manual restore needed
})
