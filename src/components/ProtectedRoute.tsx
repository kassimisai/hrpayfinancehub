
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredPermissions?: string[];
  requiredRole?: string;
}

export function ProtectedRoute({ 
  children, 
  requiredPermissions = [], 
  requiredRole
}: ProtectedRouteProps) {
  const { user, loading, userRole, permissions } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate("/auth");
        return;
      }

      // Check role if required
      if (requiredRole && userRole !== requiredRole) {
        toast({
          title: "Access Denied",
          description: "You don't have the required role to access this page.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      // Check permissions if required
      if (requiredPermissions.length > 0) {
        const hasAllPermissions = requiredPermissions.every(
          permission => permissions.includes(permission)
        );
        
        if (!hasAllPermissions) {
          toast({
            title: "Access Denied",
            description: "You don't have the required permissions to access this page.",
            variant: "destructive",
          });
          navigate("/");
          return;
        }
      }
    }
  }, [user, loading, userRole, permissions, requiredRole, requiredPermissions, navigate, toast]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return user ? <>{children}</> : null;
}
