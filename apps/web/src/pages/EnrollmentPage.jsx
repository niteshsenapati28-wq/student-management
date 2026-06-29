
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import EnrollmentForm from '@/components/EnrollmentForm';
import ConfirmDialog from '@/components/ConfirmDialog';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Plus, Trash2, ChevronLeft, ChevronRight, ClipboardList } from 'lucide-react';
import { toast } from 'sonner';

const EnrollmentPage = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('-created');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [enrollmentToDelete, setEnrollmentToDelete] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchEnrollments = async () => {
    setLoading(true);
    try {
      const result = await pb.collection('enrollments').getList(page, perPage, {
        sort: sortBy,
        expand: 'studentId,courseId',
        $autoCancel: false,
      });
      setEnrollments(result.items);
      setTotalPages(result.totalPages);
    } catch (error) {
      toast.error('Failed to load enrollments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, [page, perPage, sortBy]);

  const handleAdd = () => {
    setIsFormOpen(true);
  };

  const handleDeleteClick = (enrollment) => {
    setEnrollmentToDelete(enrollment);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await pb.collection('enrollments').delete(enrollmentToDelete.id, { $autoCancel: false });
      toast.success('Enrollment deleted successfully');
      fetchEnrollments();
    } catch (error) {
      toast.error('Failed to delete enrollment');
    } finally {
      setDeleteDialogOpen(false);
      setEnrollmentToDelete(null);
    }
  };

  return (
    <>
      <Helmet>
        <title>Enrollments - StudentHub</title>
        <meta name="description" content="Manage student course enrollments" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 lg:pl-64">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ letterSpacing: '-0.02em' }}>
                  Enrollments
                </h1>
                <p className="mt-2 text-muted-foreground">
                  Manage student course enrollments
                </p>
              </div>
              <Button onClick={handleAdd} className="transition-all duration-200 active:scale-95">
                <Plus className="mr-2 h-4 w-4" />
                Add Enrollment
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
                  <SelectItem value="semester">Semester</SelectItem>
                  <SelectItem value="academicYear">Academic year</SelectItem>
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
                </SelectContent>
              </Select>
            </div>

            {loading ? (
              <LoadingSpinner count={perPage} />
            ) : enrollments.length > 0 ? (
              <>
                <div className="rounded-lg border bg-card overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Course Name</TableHead>
                        <TableHead>Semester</TableHead>
                        <TableHead>Academic Year</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {enrollments.map((enrollment) => (
                        <TableRow key={enrollment.id}>
                          <TableCell className="font-medium">
                            {enrollment.expand?.studentId?.name || 'N/A'}
                          </TableCell>
                          <TableCell>{enrollment.expand?.courseId?.courseName || 'N/A'}</TableCell>
                          <TableCell>{enrollment.semester}</TableCell>
                          <TableCell>{enrollment.academicYear}</TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteClick(enrollment)}
                              className="text-destructive hover:text-destructive transition-all duration-200 active:scale-95"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
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
                <ClipboardList className="mx-auto h-16 w-16 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-semibold">No enrollments found</h3>
                <p className="mt-2 text-sm text-muted-foreground">Get started by adding your first enrollment.</p>
                <Button onClick={handleAdd} className="mt-6 transition-all duration-200 active:scale-95">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Enrollment
                </Button>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>

      <EnrollmentForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        onSuccess={fetchEnrollments}
      />

      <ConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        title="Delete enrollment"
        description="Are you sure you want to delete this enrollment? This action cannot be undone."
      />
    </>
  );
};

export default EnrollmentPage;
