const MainContent = (props: { children: React.ReactNode }) => {
  return (
    <div className="p-8 flex flex-col gap-4 w-screen lg:w-4/12 h-full *:text-sm">
      {props.children}
    </div>
  );
};

export default MainContent;