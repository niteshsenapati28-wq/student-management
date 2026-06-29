
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { Users, Building2, BookOpen, ClipboardList, Plus, ArrowRight } from 'lucide-react';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    students: 0,
    departments: 0,
    courses: 0,
    enrollments: 0,
  });
  const [recentStudents, setRecentStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [students, departments, courses, enrollments, recent] = await Promise.all([
          pb.collection('students').getList(1, 1, { $autoCancel: false }),
          pb.collection('departments').getList(1, 1, { $autoCancel: false }),
          pb.collection('courses').getList(1, 1, { $autoCancel: false }),
          pb.collection('enrollments').getList(1, 1, { $autoCancel: false }),
          pb.collection('students').getList(1, 5, { sort: '-created', expand: 'departmentId', $autoCancel: false }),
        ]);

        setStats({
          students: students.totalItems,
          departments: departments.totalItems,
          courses: courses.totalItems,
          enrollments: enrollments.totalItems,
        });
        setRecentStudents(recent.items);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const statCards = [
    { title: 'Total Students', value: stats.students, icon: Users, color: 'text-blue-600', link: '/students' },
    { title: 'Departments', value: stats.departments, icon: Building2, color: 'text-green-600', link: '/departments' },
    { title: 'Courses', value: stats.courses, icon: BookOpen, color: 'text-purple-600', link: '/courses' },
    { title: 'Enrollments', value: stats.enrollments, icon: ClipboardList, color: 'text-orange-600', link: '/enrollments' },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard - StudentHub</title>
        <meta name="description" content="View statistics and manage your student management system" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 lg:pl-64">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ letterSpacing: '-0.02em' }}>
                Dashboard
              </h1>
              <p className="mt-2 text-muted-foreground">
                Overview of your student management system
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {[...Array(4)].map((_, i) => (
                  <Card key={i}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-8 w-8 rounded-xl" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-8 w-16" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {statCards.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link to={stat.link}>
                      <Card className="transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                          <CardTitle className="text-sm font-medium text-muted-foreground">
                            {stat.title}
                          </CardTitle>
                          <stat.icon className={`h-8 w-8 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold">{stat.value}</div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent registrations</CardTitle>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="space-y-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-4">
                          <Skeleton className="h-10 w-10 rounded-xl" />
                          <div className="space-y-2 flex-1">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-3 w-3/4" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : recentStudents.length > 0 ? (
                    <div className="space-y-4">
                      {recentStudents.map((student) => (
                        <div key={student.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-semibold">
                              {student.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {student.expand?.departmentId?.departmentName || 'No department'}
                              </p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/students`}>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Users className="mx-auto h-12 w-12 text-muted-foreground/50" />
                      <p className="mt-4 text-sm text-muted-foreground">No students registered yet</p>
                      <Button asChild className="mt-4" size="sm">
                        <Link to="/students">
                          <Plus className="mr-2 h-4 w-4" />
                          Add student
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full justify-start transition-all duration-200 active:scale-95" variant="outline">
                    <Link to="/students">
                      <Plus className="mr-2 h-4 w-4" />
                      Add new student
                    </Link>
                  </Button>
                  <Button asChild className="w-full justify-start transition-all duration-200 active:scale-95" variant="outline">
                    <Link to="/departments">
                      <Plus className="mr-2 h-4 w-4" />
                      Add department
                    </Link>
                  </Button>
                  <Button asChild className="w-full justify-start transition-all duration-200 active:scale-95" variant="outline">
                    <Link to="/courses">
                      <Plus className="mr-2 h-4 w-4" />
                      Add course
                    </Link>
                  </Button>
                  <Button asChild className="w-full justify-start transition-all duration-200 active:scale-95" variant="outline">
                    <Link to="/enrollments">
                      <Plus className="mr-2 h-4 w-4" />
                      Add enrollment
                    </Link>
                  </Button>
                  <Button asChild className="w-full justify-start transition-all duration-200 active:scale-95" variant="outline">
                    <Link to="/search">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Advanced search
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DashboardPage;
