const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-full min-w-screen min-h-screen bg-gray-200 flex flex-col gap-4 items-center font-medium">
      {props.children}
    </main>
  );
};

export default MainContainer;