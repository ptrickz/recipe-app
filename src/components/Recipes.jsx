import { Timer } from "lucide-react";

function Recipes() {
  return (
    <div className="p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* 1st recipe */}
          <div
            className="flex flex-col rounded-md overflow-hidden p-3 relative
              bg-gray-200 dark:bg-[#2f3744]"
          >
            <a href="#" className="relative h-32">
              <img
                className="rounded-md w-full h-full object-cover cursor-pointer"
                src="https://via.placeholder.com/150?text=Spaghetti+Bolognese"
                alt="Spaghetti Bolognese"
              />
              <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
                <Timer size={16} /> 30 Minutes
              </div>
            </a>
            <div className="flex mt-1">
              <p className="font-bold tracking-wide">Spaghetti Bolognese</p>
            </div>
            <p className="my-2">Ingredients included:</p>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Recipes;
