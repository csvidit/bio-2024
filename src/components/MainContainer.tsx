const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <main className="min-w-screen flex h-full min-h-screen w-full flex-col items-center gap-4 bg-slate-950">
      {props.children}
    </main>
  );
};

export default MainContainer;
