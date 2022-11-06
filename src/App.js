import React from "react";
import Navbars from "./Components/navbars";
import Search from "./Components/searchBox";
import JobList from "./Components/jobList.jsx";

function App() {
  return (
    <>
      <Navbars />
      <Search />
      <JobList />
    </>
  );
}

export default App;
