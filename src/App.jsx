import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfigration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    apiTest();
  }, []);

  const apiTest = () => {
    fetchDataFromApi("/movie/latest").then((res) => {
      dispatch(getApiConfigration(res));
    });
  };

  return (
    <>
      <div>
        Dipak
        {url?.id}
      </div>
    </>
  );
}

export default App;
