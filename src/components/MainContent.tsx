const MainContent = (props: { children: React.ReactNode }) => {
  return (
    <div className="p-8 flex flex-col gap-4 w-screen lg:w-8/12 h-full">
      {props.children}
    </div>
  );
};

export default MainContent;