

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="/" className="text-white text-xl font-bold">
          
        </a>
        
        <div className="flex gap-8">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-300">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;