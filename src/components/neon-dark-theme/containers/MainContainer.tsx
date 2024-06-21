import styles from "../Pride.module.css";

const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-w-screen max-w-screen flex h-full min-h-screen w-screen flex-col items-center bg-black text-neutral-50">
      {props.children}
      <div
        className={`${styles.wrapper} absolute bottom-0 left-0 h-[2px] w-full`}
      />
    </div>
  );
};

export default MainContainer;
