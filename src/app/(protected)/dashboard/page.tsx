import Dashboard from "@/components/neon-dark-theme/dashboard/Dashboard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const DashboardRoute = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) {
    const user = getUser();
    return <Dashboard />;
  }

  else {
    redirect("/api/auth/login?");
  }

  
};

export default DashboardRoute;
