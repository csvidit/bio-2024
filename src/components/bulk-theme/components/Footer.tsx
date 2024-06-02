const Footer = () => {
  return (
    <footer className="col-span-4 row-span-1 flex flex-row items-center space-x-4 rounded-2xl bg-transparent p-4 text-gray-800">
      <div className="w-fit">
        &copy; {new Date().getFullYear()} Vidit Khandelwal. All rights reserved.
        All wrongs reserved, too.
      </div>
      <div className="grow border-b border-b-gray-600" />
    </footer>
  );
};

export default Footer;
