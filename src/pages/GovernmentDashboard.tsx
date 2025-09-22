import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BarChart3, 
  Users, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp,
  Building2,
  Truck
} from "lucide-react";

const GovernmentDashboard = () => {
  const districts = [
    { name: "Central District", wasteCollection: 85, complaints: 12, status: "Good" },
    { name: "North District", wasteCollection: 92, complaints: 8, status: "Excellent" },
    { name: "South District", wasteCollection: 78, complaints: 18, status: "Needs Attention" },
    { name: "East District", wasteCollection: 88, complaints: 10, status: "Good" },
  ];

  const recentAlerts = [
    { id: 1, type: "High Priority", message: "Overflowing bin at Market Street", time: "2 hours ago" },
    { id: 2, type: "Medium Priority", message: "Delayed collection in Sector 5", time: "4 hours ago" },
    { id: 3, type: "Low Priority", message: "Equipment maintenance required", time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Government Dashboard</h1>
          <p className="text-muted-foreground">Monitor citywide waste management operations and performance metrics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Collection Rate</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86%</div>
              <p className="text-xs text-muted-foreground">+2.5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Workers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">324</div>
              <p className="text-xs text-muted-foreground">98% attendance today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Districts Covered</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12/12</div>
              <p className="text-xs text-muted-foreground">100% coverage</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Budget Utilization</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2.4M</div>
              <p className="text-xs text-muted-foreground">68% of allocated budget</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* District Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                District Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {districts.map((district) => (
                  <div key={district.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{district.name}</span>
                      <Badge variant={
                        district.status === "Excellent" ? "default" : 
                        district.status === "Good" ? "secondary" : "destructive"
                      }>
                        {district.status}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Collection Rate: {district.wasteCollection}%</span>
                      <span>Complaints: {district.complaints}</span>
                    </div>
                    <Progress value={district.wasteCollection} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Recent Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="border-l-4 border-l-primary pl-4 space-y-1">
                    <div className="flex justify-between items-start">
                      <Badge variant={
                        alert.type === "High Priority" ? "destructive" :
                        alert.type === "Medium Priority" ? "secondary" : "outline"
                      }>
                        {alert.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                    </div>
                    <p className="text-sm">{alert.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Policy Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Policy Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Waste Segregation Policy</p>
                  <p className="text-sm text-muted-foreground">Updated 2 weeks ago</p>
                </div>
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Worker Safety Guidelines</p>
                  <p className="text-sm text-muted-foreground">Updated 1 month ago</p>
                </div>
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              
              <Button className="w-full">
                Create New Policy
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                Generate Monthly Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Schedule Infrastructure Audit
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Update Worker Assignments
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Review Budget Allocation
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GovernmentDashboard;