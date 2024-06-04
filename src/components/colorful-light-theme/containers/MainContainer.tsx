const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-w-screen max-w-screen h-full min-h-screen w-screen bg-neutral-50 text-neutral-700 flex flex-col items-center">
      {props.children}
    </div>
  );
};

export default MainContainer;
