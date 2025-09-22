import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Award, 
  Clock, 
  CheckCircle2, 
  Shield, 
  Truck,
  Users,
  AlertCircle,
  PlayCircle,
  Star
} from "lucide-react";

const WorkerDashboard = () => {
  const trainingModules = [
    { 
      id: 1,
      title: "Safety Equipment & Protocols", 
      duration: "45 mins", 
      progress: 100, 
      status: "Completed",
      type: "Safety"
    },
    { 
      id: 2,
      title: "Waste Collection Best Practices", 
      duration: "60 mins", 
      progress: 75, 
      status: "In Progress",
      type: "Operations"
    },
    { 
      id: 3,
      title: "Emergency Response Procedures", 
      duration: "30 mins", 
      progress: 0, 
      status: "Not Started",
      type: "Safety"
    },
    { 
      id: 4,
      title: "Vehicle Maintenance Basics", 
      duration: "40 mins", 
      progress: 100, 
      status: "Completed",
      type: "Technical"
    },
    { 
      id: 5,
      title: "Community Interaction Guidelines", 
      duration: "25 mins", 
      progress: 50, 
      status: "In Progress",
      type: "Social"
    },
    { 
      id: 6,
      title: "Environmental Impact Awareness", 
      duration: "35 mins", 
      progress: 0, 
      status: "Not Started",
      type: "Environmental"
    }
  ];

  const todayTasks = [
    { area: "Sector A - Residential", time: "6:00 AM - 10:00 AM", status: "Completed" },
    { area: "Sector B - Commercial", time: "10:30 AM - 2:00 PM", status: "In Progress" },
    { area: "Sector C - Industrial", time: "2:30 PM - 6:00 PM", status: "Scheduled" }
  ];

  const workerStats = [
    { label: "Training Completion", value: "67%", icon: BookOpen },
    { label: "Safety Score", value: "95%", icon: Shield },
    { label: "Collections Today", value: "12", icon: Truck },
    { label: "Team Rating", value: "4.8", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Worker Dashboard</h1>
          <p className="text-muted-foreground">Your daily tasks, training progress, and performance metrics</p>
        </div>

        {/* Worker Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {workerStats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayTasks.map((task, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium">{task.area}</p>
                      <p className="text-sm text-muted-foreground">{task.time}</p>
                    </div>
                    <Badge variant={
                      task.status === "Completed" ? "default" :
                      task.status === "In Progress" ? "secondary" : "outline"
                    }>
                      {task.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Training Modules */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Training Modules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {trainingModules.map((module) => (
                  <div key={module.id} className="space-y-2 p-3 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-medium">{module.title}</p>
                        <p className="text-sm text-muted-foreground">{module.duration}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {module.type}
                        </Badge>
                        {module.status === "Completed" && (
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress: {module.progress}%</span>
                      <span className={`font-medium ${
                        module.status === "Completed" ? "text-green-600" :
                        module.status === "In Progress" ? "text-blue-600" : "text-muted-foreground"
                      }`}>
                        {module.status}
                      </span>
                    </div>
                    
                    <Progress value={module.progress} className="h-2" />
                    
                    <Button 
                      size="sm" 
                      variant={module.progress === 0 ? "default" : "outline"}
                      className="w-full"
                    >
                      <PlayCircle className="h-4 w-4 mr-2" />
                      {module.progress === 0 ? "Start Module" : 
                       module.progress === 100 ? "Review" : "Continue"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Safety Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Safety Alerts & Reminders
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-800">Equipment Check Due</p>
                  <p className="text-sm text-yellow-700">Weekly safety equipment inspection required</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-green-800">All Clear - Sector A</p>
                  <p className="text-sm text-green-700">Morning collection completed successfully</p>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Report Safety Issue
              </Button>
            </CardContent>
          </Card>

          {/* Team Communication */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Team Updates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-l-blue-500 pl-3">
                  <p className="text-sm font-medium">Supervisor Message</p>
                  <p className="text-xs text-muted-foreground">
                    Great work on yesterday's efficiency! Keep up the excellent performance.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </div>
                
                <div className="border-l-4 border-l-green-500 pl-3">
                  <p className="text-sm font-medium">Route Update</p>
                  <p className="text-xs text-muted-foreground">
                    Temporary route change for Sector C due to road maintenance.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Send Message to Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WorkerDashboard;