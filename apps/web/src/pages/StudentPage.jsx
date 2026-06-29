
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import StudentForm from '@/components/StudentForm';
import ConfirmDialog from '@/components/ConfirmDialog';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Plus, Edit, Trash2, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { toast } from 'sonner';

const StudentPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('-created');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const result = await pb.collection('students').getList(page, perPage, {
        sort: sortBy,
        expand: 'departmentId',
        $autoCancel: false,
      });
      setStudents(result.items);
      setTotalPages(result.totalPages);
    } catch (error) {
      toast.error('Failed to load students');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [page, perPage, sortBy]);

  const handleAdd = () => {
    setSelectedStudent(null);
    setIsFormOpen(true);
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (student) => {
    setStudentToDelete(student);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await pb.collection('students').delete(studentToDelete.id, { $autoCancel: false });
      toast.success('Student deleted successfully');
      fetchStudents();
    } catch (error) {
      toast.error('Failed to delete student');
    } finally {
      setDeleteDialogOpen(false);
      setStudentToDelete(null);
    }
  };

  return (
    <>
      <Helmet>
        <title>Students - StudentHub</title>
        <meta name="description" content="Manage student records and information" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 lg:pl-64">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ letterSpacing: '-0.02em' }}>
                  Students
                </h1>
                <p className="mt-2 text-muted-foreground">
                  Manage student records and information
                </p>
              </div>
              <Button onClick={handleAdd} className="transition-all duration-200 active:scale-95">
                <Plus className="mr-2 h-4 w-4" />
                Add Student
              </Button>
            </div>

            <div className="mb-4 flex flex-col sm:flex-row gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="-created">Newest first</SelectItem>
                  <SelectItem value="created">Oldest first</SelectItem>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="-name">Name (Z-A)</SelectItem>
                  <SelectItem value="rollNumber">Roll number</SelectItem>
                </SelectContent>
              </Select>

              <Select value={perPage.toString()} onValueChange={(value) => setPerPage(Number(value))}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Per page" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 per page</SelectItem>
                  <SelectItem value="25">25 per page</SelectItem>
                  <SelectItem value="50">50 per page</SelectItem>
                  <SelectItem value="100">100 per page</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {loading ? (
              <LoadingSpinner count={perPage} />
            ) : students.length > 0 ? (
              <>
                <div className="rounded-lg border bg-card overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Roll Number</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">{student.rollNumber}</TableCell>
                          <TableCell>{student.name}</TableCell>
                          <TableCell>{student.email}</TableCell>
                          <TableCell>{student.expand?.departmentId?.departmentName || 'N/A'}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleEdit(student)}
                                className="transition-all duration-200 active:scale-95"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDeleteClick(student)}
                                className="text-destructive hover:text-destructive transition-all duration-200 active:scale-95"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Page {page} of {totalPages}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="transition-all duration-200 active:scale-95"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="transition-all duration-200 active:scale-95"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-muted/50 rounded-lg">
                <Users className="mx-auto h-16 w-16 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-semibold">No students found</h3>
                <p className="mt-2 text-sm text-muted-foreground">Get started by adding your first student.</p>
                <Button onClick={handleAdd} className="mt-6 transition-all duration-200 active:scale-95">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Student
                </Button>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>

      <StudentForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        student={selectedStudent}
        onSuccess={fetchStudents}
      />

      <ConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        title="Delete student"
        description={`Are you sure you want to delete ${studentToDelete?.name}? This action cannot be undone.`}
      />
    </>
  );
};

export default StudentPage;
