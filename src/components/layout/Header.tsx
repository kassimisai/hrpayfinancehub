
import { Bell, Search } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { signOut } = useAuth();

  return (
    <header className="h-16 border-b border-border bg-white px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg bg-muted text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-muted">
          <Bell className="w-5 h-5 text-secondary" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </button>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-3 hover:bg-muted rounded-lg p-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-medium text-primary">JD</span>
            </div>
            <div className="text-sm">
              <p className="font-medium text-secondary">John Doe</p>
              <p className="text-muted-foreground">Admin</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => signOut()}>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
