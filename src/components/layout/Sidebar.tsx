
import { Home, Users, Calendar, BarChart2, Settings, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Employees", icon: Users, path: "/employees" },
    { name: "Time Off", icon: Calendar, path: "/time-off" },
    { name: "Reports", icon: BarChart2, path: "/reports" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-border flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
          HR Finance Hub
        </h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <button className="nav-link w-full text-destructive-foreground hover:bg-destructive/10">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
};
