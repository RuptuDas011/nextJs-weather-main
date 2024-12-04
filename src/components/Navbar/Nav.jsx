const Nav = () => {
    return (
      <nav className="bg-gray-800 p-15">
        <div className="flex items-center  content-around justify-between max-w-7xl mx-auto ">
          <a href="/" className="text-white text-xl font-bold">
            Logo
          </a>
          
          <div className="flex gap-8">
          
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Nav;