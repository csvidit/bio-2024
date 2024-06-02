const MainContent = (props: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full w-full flex-col gap-4 p-8 lg:w-6/12 lg:p-16">
      {props.children}
    </main>
  );
};

export default MainContent;
