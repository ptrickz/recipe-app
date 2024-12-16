import { useState } from "react";
import Header from "../components/Header";
import Recipes from "../components/Recipes";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} showSearchBar={true}></Header>
      <Recipes searchTerm={searchTerm}></Recipes>
    </div>
  );
}

export default Home;
