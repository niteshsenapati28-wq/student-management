/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter("enrollments", "studentId.rollNumber ~ '^CS00[6-9]' || studentId.rollNumber ~ '^CS[1-3][0-9]' || studentId.rollNumber ~ '^EC00[6-9]' || studentId.rollNumber ~ '^EC[1-3][0-9]' || studentId.rollNumber ~ '^ME00[6-9]' || studentId.rollNumber ~ '^ME[1-3][0-9]' || studentId.rollNumber ~ '^CE00[6-9]' || studentId.rollNumber ~ '^CE[1-3][0-9]'");
  for (const record of records) {
    app.delete(record);
  }
}, (app) => {
  // Rollback: record data not stored, manual restore needed
})
