import { Button } from "@/components/ui/button";
import { Menu, Search, Globe, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="relative z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img 
            src={logo} 
            className="w-[120px] m-[-30px] cursor-pointer" 
            onClick={() => navigate("/")}
            alt="WRAP UP Logo"
          />

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#what-we-do" className="text-foreground hover:text-primary transition-colors font-medium">
              What we do
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium">
                  Dashboards <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => navigate("/government-dashboard")}>
                  Government Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/ngo-startup-dashboard")}>
                  NGO & Startup Dashboard
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Resources
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              About us
            </a>
          </nav>

          {/* Right side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Login / Signup
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;