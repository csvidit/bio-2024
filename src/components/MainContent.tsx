const MainContent = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-screen flex-col gap-4 p-8 *:text-xs lg:w-4/12 lg:*:text-sm">
      {props.children}
    </div>
  );
};

export default MainContent;
