/* eslint-disable react-hooks/exhaustive-deps */
// import { data } from "autoprefixer";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "component/Card";
import Hero from "component/Hero";
import Loading from "component/Loading";
import { ButtonPrimary } from "component/Button";
import { WithRouter } from "utils/Navigation";

import Swal from "sweetalert2";

function Home(props) {
  // CONSTRUCTOR
  const [datas, setDatas] = useState([]);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    // this.setState({ loading: true });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDI_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        const { results } = res.data;
        const newPage = page + 1;
        const temp = [...datas];
        temp.push(...results);
        setDatas(temp);
        setPage(newPage);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  function handleFav(movie) {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);

      parsedMovies.push(movie);
      const temp = JSON.stringify(parsedMovies);
      localStorage.setItem("favMovies", temp);
    } else {
      const temp = JSON.stringify([movie]);
      localStorage.setItem("favMovies", temp);
    }
  }

  /*
      cek film yang diinputkan ada di local storage atau tidak (saran menggunakan method .find)
      if movie.id === data.id
      - kalau gak ada, push ke parsedMovies
      - kalau ada, kasih alert (film sudah ditambahkan sebelumnya)
      */

  return (
    <>
      <Hero />
      <section className="lg:mt-12 lg:pt-16 flex flex-col">
        <div className="px-7 lg:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-15 gap-y-10  ">
          <div
            className="absolute z-0 w-[50%] h-[50%] top-[150%]
          bg-gradient-blueViolet rounded-full"
          />
          <div
            className="absolute z-0 w-[50%] h-[50%] right-[3%] bottom-[-160%]
          bg-gradient-greenPink rounded-full"
          />
          {loading
            ? skeleton.map(
                (item) => <Loading key={item} /> // Self Closing tag
              )
            : datas.map((data) => (
                <Card
                  key={data.id}
                  image={data.poster_path}
                  title={data.title}
                  date={data.release_date}
                  onNavigate={() => props.navigate(`/detail/${data.id}`)}
                  addFavorite={() => handleFav(data)}
                />
              ))}
          <div
            className="absolute z-0 w-[50%] h-[50%] top-[400%]
          bg-gradient-blueViolet rounded-full"
          />
          <div
            className="absolute z-0 w-[50%] h-[50%] right-[3%] bottom-[-400%]
          bg-gradient-greenPink rounded-full"
          />
        </div>
        <ButtonPrimary label="Load More" onClick={() => fetchData()} />
      </section>
    </>
  );
}

export default WithRouter(Home);
