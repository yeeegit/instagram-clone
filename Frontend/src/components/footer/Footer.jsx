const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Instagram. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
