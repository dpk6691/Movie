import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

function App() {
  useEffect(() => {
    apiTest();
  }, []);

  const apiTest = () => {
    fetchDataFromApi("/movie/latest").then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div>Dipak</div>
    </>
  );
}

export default App;
