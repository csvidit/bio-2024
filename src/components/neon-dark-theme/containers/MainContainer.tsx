const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-w-screen max-w-screen h-full min-h-screen w-screen bg-black text-neutral-50 flex flex-col items-center">
      {props.children}
    </div>
  );
};

export default MainContainer;
