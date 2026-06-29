/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const records = app.findRecordsByFilter("students", "rollNumber = 'CS006' || rollNumber = 'CS007' || rollNumber = 'CS008' || rollNumber = 'CS009' || rollNumber = 'CS010' || rollNumber = 'EC006' || rollNumber = 'EC007' || rollNumber = 'EC008' || rollNumber = 'EC009' || rollNumber = 'EC010' || rollNumber = 'ME006' || rollNumber = 'ME007' || rollNumber = 'ME008' || rollNumber = 'ME009' || rollNumber = 'ME010' || rollNumber = 'CE006' || rollNumber = 'CE007' || rollNumber = 'CE008' || rollNumber = 'CE009' || rollNumber = 'CE010'");
  for (const record of records) {
    app.delete(record);
  }
}, (app) => {
  // Rollback: record data not stored, manual restore needed
})
