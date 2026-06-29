
import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';

const DepartmentForm = ({ open, onOpenChange, department, onSuccess }) => {
  const [departmentName, setDepartmentName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (department) {
      setDepartmentName(department.departmentName || '');
    } else {
      setDepartmentName('');
    }
  }, [department, open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (department) {
        await pb.collection('departments').update(department.id, { departmentName }, { $autoCancel: false });
        toast.success('Department updated successfully');
      } else {
        await pb.collection('departments').create({ departmentName }, { $autoCancel: false });
        toast.success('Department created successfully');
      }
      onSuccess();
      onOpenChange(false);
    } catch (error) {
      if (error.data?.data?.departmentName) {
        toast.error('Department name already exists');
      } else {
        toast.error(department ? 'Failed to update department' : 'Failed to create department');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{department ? 'Edit Department' : 'Add Department'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="departmentName">Department Name *</Label>
            <Input
              id="departmentName"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              required
              className="text-foreground"
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="transition-all duration-200 active:scale-95">
              {loading ? 'Saving...' : department ? 'Update' : 'Create'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DepartmentForm;
