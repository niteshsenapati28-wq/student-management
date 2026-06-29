
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import CourseForm from '@/components/CourseForm';
import ConfirmDialog from '@/components/ConfirmDialog';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Plus, Edit, Trash2, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('courseName');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const result = await pb.collection('courses').getList(page, perPage, {
        sort: sortBy,
        expand: 'departmentId',
        $autoCancel: false,
      });
      setCourses(result.items);
      setTotalPages(result.totalPages);
    } catch (error) {
      toast.error('Failed to load courses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [page, perPage, sortBy]);

  const handleAdd = () => {
    setSelectedCourse(null);
    setIsFormOpen(true);
  };

  const handleEdit = (course) => {
    setSelectedCourse(course);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (course) => {
    setCourseToDelete(course);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await pb.collection('courses').delete(courseToDelete.id, { $autoCancel: false });
      toast.success('Course deleted successfully');
      fetchCourses();
    } catch (error) {
      toast.error('Failed to delete course');
    } finally {
      setDeleteDialogOpen(false);
      setCourseToDelete(null);
    }
  };

  return (
    <>
      <Helmet>
        <title>Courses - StudentHub</title>
        <meta name="description" content="Manage academic courses" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 lg:pl-64">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ letterSpacing: '-0.02em' }}>
                  Courses
                </h1>
                <p className="mt-2 text-muted-foreground">
                  Manage academic courses
                </p>
              </div>
              <Button onClick={handleAdd} className="transition-all duration-200 active:scale-95">
                <Plus className="mr-2 h-4 w-4" />
                Add Course
              </Button>
            </div>

            <div className="mb-4 flex flex-col sm:flex-row gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="courseName">Name (A-Z)</SelectItem>
                  <SelectItem value="-courseName">Name (Z-A)</SelectItem>
                  <SelectItem value="-created">Newest first</SelectItem>
                  <SelectItem value="created">Oldest first</SelectItem>
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
            ) : courses.length > 0 ? (
              <>
                <div className="rounded-lg border bg-card overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Course Name</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {courses.map((course) => (
                        <TableRow key={course.id}>
                          <TableCell className="font-medium">{course.courseName}</TableCell>
                          <TableCell>{course.expand?.departmentId?.departmentName || 'N/A'}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleEdit(course)}
                                className="transition-all duration-200 active:scale-95"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDeleteClick(course)}
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
                <BookOpen className="mx-auto h-16 w-16 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-semibold">No courses found</h3>
                <p className="mt-2 text-sm text-muted-foreground">Get started by adding your first course.</p>
                <Button onClick={handleAdd} className="mt-6 transition-all duration-200 active:scale-95">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Course
                </Button>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>

      <CourseForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        course={selectedCourse}
        onSuccess={fetchCourses}
      />

      <ConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        onConfirm={handleDeleteConfirm}
        title="Delete course"
        description={`Are you sure you want to delete ${courseToDelete?.courseName}? This action cannot be undone.`}
      />
    </>
  );
};

export default CoursePage;
