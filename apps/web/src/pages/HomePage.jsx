
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, BookOpen, Building2, TrendingUp, Shield, Zap } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Users,
      title: 'Student management',
      description: 'Track and manage student records with comprehensive profiles and enrollment history.',
    },
    {
      icon: Building2,
      title: 'Department organization',
      description: 'Organize courses and students by departments for better academic structure.',
    },
    {
      icon: BookOpen,
      title: 'Course tracking',
      description: 'Monitor course offerings, enrollments, and academic progress in real-time.',
    },
    {
      icon: TrendingUp,
      title: 'Analytics dashboard',
      description: 'Get insights into enrollment trends, department statistics, and student performance.',
    },
    {
      icon: Shield,
      title: 'Secure access',
      description: 'Role-based authentication ensures data privacy and controlled access.',
    },
    {
      icon: Zap,
      title: 'Fast operations',
      description: 'Perform CRUD operations quickly with an intuitive, responsive interface.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>StudentHub - Modern student management system</title>
        <meta name="description" content="Comprehensive student management system for tracking students, departments, courses, and enrollments with powerful analytics." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
            
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl" style={{ letterSpacing: '-0.02em' }}>
                  Modern student management
                  <span className="block text-primary mt-2">made simple</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto sm:text-xl">
                  Streamline your academic operations with a comprehensive platform for managing students, departments, courses, and enrollments.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-base transition-all duration-200 hover:scale-105 active:scale-95">
                    <Link to="/login">Get started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base transition-all duration-200 hover:scale-105 active:scale-95">
                    <Link to="#features">Learn more</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-16"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
                  <Card className="shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-primary">2,847</div>
                      <div className="text-sm text-muted-foreground mt-1">Active students</div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-primary">47</div>
                      <div className="text-sm text-muted-foreground mt-1">Departments</div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-bold text-primary">312</div>
                      <div className="text-sm text-muted-foreground mt-1">Courses offered</div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="features" className="py-24 bg-muted/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" style={{ letterSpacing: '-0.02em' }}>
                  Everything you need to manage your institution
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Built with modern technology to provide a fast, secure, and intuitive experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                              <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl" style={{ letterSpacing: '-0.02em' }}>
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Join institutions already using StudentHub to manage their academic operations.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="text-base transition-all duration-200 hover:scale-105 active:scale-95">
                  <Link to="/login">Access admin panel</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
