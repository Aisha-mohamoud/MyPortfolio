import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-lg shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        <h1 className="text-3xl font-bold text-red-500">My Portfolio</h1>
        
        {/* Navigation for large screens */}
        <nav className="hidden md:flex gap-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-lg text-red-500 hover:text-white transition">
              {item}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-red-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-900/90 text-center py-4">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-lg text-red-600 py-2 hover:text-white transition">
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
