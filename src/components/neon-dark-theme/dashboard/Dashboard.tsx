import MainContent from "@/components/MainContent";
import ListLink from "@/components/neon-dark-theme/links/ListLink";
import { PiSignOutFill } from "react-icons/pi";

const Dashboard = () => {
  return (
    <MainContent>
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl">Dashboard</h1>
        <ListLink
          className="w-fit"
          icon={<PiSignOutFill />}
          href="/api/auth/logout?"
        >
          Log out
        </ListLink>
      </div>
    </MainContent>
  );
};

export default Dashboard;
