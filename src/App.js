import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { Routes, Route } from "react-router-dom";
import SideBar from "./component/SideBar/SideBar";
import Jumbotron from "./component/Jumbotron/Jumbotron";
import ContainerMovies from "./component/ContainerMovies/ContainerMovies";

function App() {
  const [dataGenres, setDataGenres] = useState([]);
  const [pages, setPages] = useState(1);
  const [loadingNewMovies, setLoadingNewMovies] = useState(false);
  const [dataMovies, setDataMovies] = useState([]);
  const [paramURL, setparamURL] = useState("");

  useEffect(() => {
    axios
      .get(`http://notflixtv.herokuapp.com/api/v1/movies/genres`)
      .then((res) => {
        const genres = res.data.data;
        setDataGenres(genres);
      });
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (
        Math.floor(document.documentElement.scrollTop) + window.innerHeight ===
        document.documentElement.offsetHeight
      ) {
        setPages(pages + 1);
        setLoadingNewMovies(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [pages]);

  useEffect(() => {
    axios
      .get(
        `https://notflixtv.herokuapp.com/api/v1/movies?page=${pages}&limit=15&genre=${paramURL}`
      )
      .then((res) => {
        const movies = res.data.data.docs;
        setDataMovies([...dataMovies, ...movies]);
        setLoadingNewMovies(false);
      });
  }, [pages]);

  return (
    <>
      <Navbar />
      <SideBar genres={dataGenres} />
      <Jumbotron />
      <Routes>
        <Route
          path="/"
          element={
            <ContainerMovies
              data={dataMovies ? dataMovies : []}
              setParam={(param) => {
                setparamURL(param);
              }}
            />
          }
        />

        <Route
          path="/:genreId"
          element={
            <ContainerMovies
              data={dataMovies ? dataMovies : []}
              setParam={(param) => {
                setPages(param.pages);
                setDataMovies([]);
                setparamURL(param.genre);
              }}
            />
          }
        />
      </Routes>

      <div
        className={`fixed px-5 py-3 rounded-full bg-white shadow-2xl z-20 bottom-10 animate-bounce left-[884px] text-center gap-3 items-center ${
          loadingNewMovies ? "flex" : "hidden"
        }`}
      >
        <BsArrowDownCircleFill className="text-xl text-blue-400 mx-auto" />
        Loading
      </div>
    </>
  );
}

export default App;
