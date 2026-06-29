/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter("enrollments", "studentId.rollNumber != 'CS001' && studentId.rollNumber != 'CS002' && studentId.rollNumber != 'CS003' && studentId.rollNumber != 'CS004' && studentId.rollNumber != 'CS005' && studentId.rollNumber != 'EC001' && studentId.rollNumber != 'EC002' && studentId.rollNumber != 'EC003' && studentId.rollNumber != 'EC004' && studentId.rollNumber != 'EC005' && studentId.rollNumber != 'ME001' && studentId.rollNumber != 'ME002' && studentId.rollNumber != 'ME003' && studentId.rollNumber != 'ME004' && studentId.rollNumber != 'ME005' && studentId.rollNumber != 'CE001' && studentId.rollNumber != 'CE002' && studentId.rollNumber != 'CE003' && studentId.rollNumber != 'CE004' && studentId.rollNumber != 'CE005'");
  for (const record of records) {
    app.delete(record);
  }
}, (app) => {
  // Rollback: record data not stored, manual restore needed
})
