import { useEffect } from "react";
import Logo from "./Logo";
import { MdMenu } from "react-icons/md";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    // Add smooth scroll to entire page
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const target = document.querySelector(targetId);
    if (target) {
      // Calculate offset for fixed navbar
      const navbarHeight = 80; // Navbar height + extra padding
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      // Smooth scroll with animation
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 second
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function (easeInOutCubic)
        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);

      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg px-1 border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center font-mono h-16">
          <Logo />

          {!isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono"
            >
              <MdMenu />
            </div>
          )}

          <div className="flex md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "#home")}
                className="text-gray-300 hover:text-white text-lg hover:text-xl transition-all"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="text-gray-300 hover:text-white text-lg hover:text-xl transition-all"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                className="text-gray-300 hover:text-white text-lg hover:text-xl transition-all"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, "#skills")}
                className="text-gray-300 hover:text-white text-lg hover:text-xl transition-all"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="text-gray-300 hover:text-white text-lg hover:text-xl transition-all"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
