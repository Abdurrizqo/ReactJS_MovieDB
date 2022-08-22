import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";

function ContainerMovies({ data, setParam }) {
  let { genreId } = useParams();

  useEffect(() => {
    genreId ? setParam({ genre: genreId, pages: 1 }) : setParam("");
  }, [genreId]);

  let itemMovies = data.map((item, index) => {
    return <Card data={item} key={index} />;
  });
  return (
    <div className="grid grid-cols-3 gap-5 relative ml-[394px] mr-[10px] mt-5 mb-10">
      {itemMovies}
    </div>
  );
}

export default ContainerMovies;
