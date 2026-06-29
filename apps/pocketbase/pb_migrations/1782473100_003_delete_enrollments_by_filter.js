/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter("enrollments", "id != '' && (studentId.rollNumber ~ '^CS00[1-5]' || studentId.rollNumber ~ '^EC00[1-5]' || studentId.rollNumber ~ '^ME00[1-5]' || studentId.rollNumber ~ '^CE00[1-5]')");
  for (const record of records) {
    app.delete(record);
  }
}, (app) => {
  // Rollback: record data not stored, manual restore needed
})
