const SectionContainer = (props: { children: React.ReactNode }) => {
  return (
    <section
      id="intro"
      className="flex flex-col gap-2 rounded-xl border border-neutral-900 border-b-neutral-900 bg-neutral-950 p-1 font-normal shadow-inner shadow-neutral-900 lg:gap-4 lg:rounded-2xl"
    >
      <div className="flex flex-col gap-2 rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-900 p-[1px] lg:rounded-xl">
        <div className="rounded-lg flex flex-col gap-4 lg:gap-8 bg-neutral-950 p-4 shadow-inner shadow-neutral-900 lg:rounded-xl lg:p-8">
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;
