import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
function Header({ setSearchTerm, showSearchBar }) {
  const [theme, setTheme] = useState("light");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    // Check if a theme is already set in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Default theme
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
    // Save the new theme to localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-screen p-5 gap-4 md:gap-0">
      {/* Logo */}
      <a href="/" className="flex-shrink-0">
        <img
          src="/recipe-black.png"
          alt="Light Theme"
          className={`${theme === "light" ? "block" : "hidden"} `}
        />
        <img
          src="/recipe-white.png"
          alt="Dark Theme"
          className={`${theme === "dark" ? "block" : "hidden"}`}
        />
      </a>
      {showSearchBar && (
        <div className="flex justify-center items-center w-full md:w-auto">
          <form action="">
            <label className="input input-bordered shadow-md flex items-center gap-2 w-full max-w-sm md:w-80">
              <input
                type="text"
                className="grow bg-transparent focus:outline-none"
                onChange={handleSearch}
                placeholder="Search recipes..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </form>
        </div>
      )}

      {/* Theme Toggle */}
      <button className="btn btn-square" aria-label="toggle dark theme" onClick={toggleTheme}>
        {theme === "light" ? <Moon color="black" /> : <Sun color="white" />}
      </button>
    </div>
  );
}
Header.propTypes = {
  setSearchTerm: PropTypes.func,
  showSearchBar: PropTypes.bool,
};
export default Header;
