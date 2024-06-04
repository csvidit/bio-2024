const SectionContainer = (props: { children: React.ReactNode }) => {
  return (
    <section
      id="intro"
      className="flex flex-col gap-2 rounded-xl border border-neutral-200 border-b-neutral-300 bg-neutral-50 p-1 font-normal shadow-inner shadow-neutral-100 lg:gap-4 lg:rounded-2xl"
    >
      <div className="flex flex-col gap-2 rounded-lg bg-gradient-to-b from-neutral-100 to-neutral-200 p-[1px] lg:rounded-xl">
        <div className="rounded-lg flex flex-col gap-4 lg:gap-8 bg-neutral-50 p-4 shadow-inner shadow-neutral-200 lg:rounded-xl lg:p-8">
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;
