
import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';

const CourseForm = ({ open, onOpenChange, course, onSuccess }) => {
  const [formData, setFormData] = useState({
    courseName: '',
    departmentId: '',
  });
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (course) {
      setFormData({
        courseName: course.courseName || '',
        departmentId: course.departmentId || '',
      });
    } else {
      setFormData({
        courseName: '',
        departmentId: '',
      });
    }
  }, [course, open]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const records = await pb.collection('departments').getFullList({ $autoCancel: false });
        setDepartments(records);
      } catch (error) {
        toast.error('Failed to load departments');
      }
    };
    if (open) {
      fetchDepartments();
    }
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (course) {
        await pb.collection('courses').update(course.id, formData, { $autoCancel: false });
        toast.success('Course updated successfully');
      } else {
        await pb.collection('courses').create(formData, { $autoCancel: false });
        toast.success('Course created successfully');
      }
      onSuccess();
      onOpenChange(false);
    } catch (error) {
      toast.error(course ? 'Failed to update course' : 'Failed to create course');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{course ? 'Edit Course' : 'Add Course'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="courseName">Course Name *</Label>
            <Input
              id="courseName"
              value={formData.courseName}
              onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
              required
              className="text-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="departmentId">Department *</Label>
            <Select value={formData.departmentId} onValueChange={(value) => setFormData({ ...formData, departmentId: value })} required>
              <SelectTrigger className="text-foreground">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept.id} value={dept.id}>
                    {dept.departmentName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="transition-all duration-200 active:scale-95">
              {loading ? 'Saving...' : course ? 'Update' : 'Create'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CourseForm;
