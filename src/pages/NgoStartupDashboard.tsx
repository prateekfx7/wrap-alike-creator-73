import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Heart, 
  Users, 
  Target, 
  TrendingUp, 
  Calendar, 
  Award,
  Lightbulb,
  HandHeart,
  Recycle
} from "lucide-react";

const NgoStartupDashboard = () => {
  const activeProjects = [
    { name: "Community Clean-Up Drive", participants: 245, progress: 78, status: "Active" },
    { name: "Waste Awareness Campaign", participants: 156, progress: 92, status: "Completing" },
    { name: "Recycling Innovation Hub", participants: 89, progress: 45, status: "Active" },
    { name: "School Education Program", participants: 320, progress: 65, status: "Active" },
  ];

  const upcomingEvents = [
    { title: "Sustainability Workshop", date: "Dec 28, 2024", participants: 45, type: "Workshop" },
    { title: "Community Meetup", date: "Jan 5, 2025", participants: 80, type: "Meetup" },
    { title: "Innovation Showcase", date: "Jan 12, 2025", participants: 120, type: "Showcase" },
  ];

  const impactMetrics = [
    { label: "Tons of Waste Reduced", value: "1,234", change: "+15%" },
    { label: "Communities Reached", value: "56", change: "+8%" },
    { label: "Awareness Sessions", value: "89", change: "+22%" },
    { label: "Partnerships Formed", value: "23", change: "+12%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">NGO & Startup Dashboard</h1>
          <p className="text-muted-foreground">Drive innovation and community engagement for sustainable waste management</p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {impactMetrics.map((metric) => (
            <Card key={metric.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-green-600">{metric.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Projects */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Active Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeProjects.map((project) => (
                  <div key={project.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{project.name}</span>
                      <Badge variant={
                        project.status === "Completing" ? "default" : 
                        project.status === "Active" ? "secondary" : "outline"
                      }>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Participants: {project.participants}</span>
                      <span>Progress: {project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.title} className="border-l-4 border-l-primary pl-4 space-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {event.participants} registered participants
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Innovation Hub */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Innovation Hub
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">AI-Powered Waste Sorting</p>
                  <p className="text-sm text-muted-foreground">In Development</p>
                </div>
                <Badge variant="secondary">Tech</Badge>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Circular Economy Platform</p>
                  <p className="text-sm text-muted-foreground">Beta Testing</p>
                </div>
                <Badge variant="default">Platform</Badge>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Community Reward System</p>
                  <p className="text-sm text-muted-foreground">Live</p>
                </div>
                <Badge variant="outline">Social</Badge>
              </div>
              
              <Button className="w-full">
                Submit New Innovation
              </Button>
            </CardContent>
          </Card>

          {/* Community Engagement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HandHeart className="h-5 w-5" />
                Community Engagement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">8,543</div>
                <p className="text-sm text-muted-foreground">Total Community Members</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-semibold">234</div>
                  <p className="text-xs text-muted-foreground">Active Volunteers</p>
                </div>
                <div>
                  <div className="text-xl font-semibold">67</div>
                  <p className="text-xs text-muted-foreground">Partner Organizations</p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Launch New Campaign
              </Button>
              <Button variant="outline" className="w-full">
                Find Partnership Opportunities
              </Button>
            </CardContent>
          </Card>

          {/* Sustainability Goals */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="h-5 w-5" />
                Sustainability Goals 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Award className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="font-semibold">Zero Waste Communities</h3>
                  <p className="text-sm text-muted-foreground">Target: 10 communities by Dec 2025</p>
                  <Progress value={30} className="h-2" />
                  <p className="text-xs">3/10 communities achieved</p>
                </div>
                
                <div className="text-center space-y-2">
                  <Users className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="font-semibold">Awareness Reach</h3>
                  <p className="text-sm text-muted-foreground">Target: 50,000 people educated</p>
                  <Progress value={65} className="h-2" />
                  <p className="text-xs">32,500/50,000 people reached</p>
                </div>
                
                <div className="text-center space-y-2">
                  <Heart className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="font-semibold">Innovation Projects</h3>
                  <p className="text-sm text-muted-foreground">Target: 15 new solutions</p>
                  <Progress value={47} className="h-2" />
                  <p className="text-xs">7/15 solutions launched</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NgoStartupDashboard;