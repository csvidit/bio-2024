const SectionContainer = (props: { children: React.ReactNode }) => {
  return (
    <section
      id="intro"
      className="flex flex-col gap-2 rounded-xl border border-neutral-900 border-b-neutral-900 bg-neutral-950 p-1 font-normal shadow-inner shadow-neutral-900 lg:gap-4 lg:rounded-2xl"
    >
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgb(7, 141, 111), rgb(152, 202, 153), rgb(1, 1, 1) 45%, rgb(1, 1, 1), rgb(1, 1, 1) 55%, rgb(205, 208, 234), rgb(123, 173, 226) 70%, rgb(69, 76, 189), rgb(63, 26, 121))",
        }}
        className="flex flex-col gap-2 rounded-lg  p-[1px] lg:rounded-xl"
      >
        <div className="flex flex-col gap-4 rounded-lg bg-neutral-950 p-4 shadow-inner shadow-neutral-900 lg:gap-8 lg:rounded-xl lg:p-8">
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;
