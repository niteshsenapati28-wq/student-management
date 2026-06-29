
import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';

const EnrollmentForm = ({ open, onOpenChange, enrollment, onSuccess }) => {
  const [formData, setFormData] = useState({
    studentId: '',
    courseId: '',
    semester: '',
    academicYear: '',
  });
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (enrollment) {
      setFormData({
        studentId: enrollment.studentId || '',
        courseId: enrollment.courseId || '',
        semester: enrollment.semester || '',
        academicYear: enrollment.academicYear || '',
      });
    } else {
      setFormData({
        studentId: '',
        courseId: '',
        semester: '',
        academicYear: '',
      });
    }
  }, [enrollment, open]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [studentsData, coursesData] = await Promise.all([
          pb.collection('students').getFullList({ $autoCancel: false }),
          pb.collection('courses').getFullList({ $autoCancel: false }),
        ]);
        setStudents(studentsData);
        setCourses(coursesData);
      } catch (error) {
        toast.error('Failed to load data');
      }
    };
    if (open) {
      fetchData();
    }
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (enrollment) {
        await pb.collection('enrollments').update(enrollment.id, formData, { $autoCancel: false });
        toast.success('Enrollment updated successfully');
      } else {
        await pb.collection('enrollments').create(formData, { $autoCancel: false });
        toast.success('Enrollment created successfully');
      }
      onSuccess();
      onOpenChange(false);
    } catch (error) {
      toast.error(enrollment ? 'Failed to update enrollment' : 'Failed to create enrollment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{enrollment ? 'Edit Enrollment' : 'Add Enrollment'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="studentId">Student *</Label>
            <Select value={formData.studentId} onValueChange={(value) => setFormData({ ...formData, studentId: value })} required>
              <SelectTrigger className="text-foreground">
                <SelectValue placeholder="Select student" />
              </SelectTrigger>
              <SelectContent>
                {students.map((student) => (
                  <SelectItem key={student.id} value={student.id}>
                    {student.name} ({student.rollNumber})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="courseId">Course *</Label>
            <Select value={formData.courseId} onValueChange={(value) => setFormData({ ...formData, courseId: value })} required>
              <SelectTrigger className="text-foreground">
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.courseName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="semester">Semester *</Label>
            <Input
              id="semester"
              value={formData.semester}
              onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
              required
              placeholder="e.g., Fall 2026"
              className="text-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="academicYear">Academic Year *</Label>
            <Input
              id="academicYear"
              value={formData.academicYear}
              onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
              required
              placeholder="e.g., 2026-2027"
              className="text-foreground"
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="transition-all duration-200 active:scale-95">
              {loading ? 'Saving...' : enrollment ? 'Update' : 'Create'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentForm;
