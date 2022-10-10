import React, { useEffect, useState } from "react";
import Loading from "component/Loading";
import { WithRouter } from "utils/Navigation";
import Card from "component/Card";
import { useTitle } from "utils/hooks/useTitle";

const Favorite = (props) => {
  const [datas, setDatas] = useState([]);
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  useTitle("MyFavo");
  function handleRemoveFav(movie) {
    /*
    fungsi untuk menghapus film dari list favorite, clue-nya pake method filter.
    Setelah di filter, rubah state (this.state.datas) nya dengan yang sudah di filter dan juga localStorage.setItem lagi dengan value yang sudah di filter.
    */
    const rem = datas.filter((e) => e !== movie);
    // // console.log({ rem })
    // // this.setState({ datas: rem });
    // this.setState({ ...this.state, datas: rem });
    setDatas(rem);
    localStorage.setItem("favMovie", rem);
  }

  function fetchData() {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      // this.setState({ datas: parsedMovies, loading: false });
      setDatas(parsedMovies);
      setLoading(false);
    }
  }

  return (
    <>
      <div className="px-7 lg:px-20 grid grid-cols-4 gap-x-15 gap-y-10  pt-[150px]">
        <div
          className="absolute z-0 w-[50%] h-[50%] top-[80%]
          bg-gradient-blueViolet rounded-full"
        />
        {/* <div
            className="absolute z-0 w-[50%] h-[50%] right-[3%] bottom-[-160%]
          bg-gradient-greenPink rounded-full"
          /> */}

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
                addFavorite={() => handleRemoveFav(data)}
              />
            ))}
      </div>
    </>
  );
};

export default WithRouter(Favorite);
