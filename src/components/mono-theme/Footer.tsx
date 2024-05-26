const Footer = () => {
    return (
      <footer className="col-span-4 flex flex-row space-x-4 items-center row-span-1 bg-transparent text-slate-500 *:uppercase">
        <div className="">
          &copy; {new Date().getFullYear()} Vidit Khandelwal / All rights reserved /
          All wrongs reserved, too
        </div>
        {/* <div className="grow border-b border-b-gray-600" /> */}
      </footer>
    );
  };
  
  export default Footer;
  