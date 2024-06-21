import styles from "../Pride.module.css";

const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-w-screen max-w-screen flex h-full min-h-screen w-screen flex-col items-center bg-black text-neutral-50">
      {props.children}
    </div>
  );
};

export default MainContainer;
