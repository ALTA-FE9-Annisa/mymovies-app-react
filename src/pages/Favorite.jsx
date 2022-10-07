import React, { Component } from "react";
import Loading from "../component/Loading";
import { WithRouter } from "../utils/Navigation";
import Card from "../component/Card";
export class Favorite extends Component {
  state = {
    datas: [],

    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
  };

  componentDidMount() {
    this.fetchData();
  }
  handleRemoveFav(movie) {
    /*
    fungsi untuk menghapus film dari list favorite, clue-nya pake method filter.
    Setelah di filter, rubah state (this.state.datas) nya dengan yang sudah di filter dan juga localStorage.setItem lagi dengan value yang sudah di filter.
    */
    const rem = this.state.datas.filter((e) => e !== movie);
    // console.log({ rem })
    // this.setState({ datas: rem });
    this.setState({ ...this.state, datas: rem });
    localStorage.setItem("favMovie", rem);
  }

  fetchData() {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      this.setState({ datas: parsedMovies, loading: false });
    }
  }

  render() {
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

          {this.state.loading
            ? this.state.skeleton.map(
                (item) => <Loading key={item} /> // Self Closing tag
              )
            : this.state.datas.map((data) => (
                <Card
                  key={data.id}
                  image={data.poster_path}
                  title={data.title}
                  date={data.release_date}
                  onNavigate={() => this.props.navigate(`/detail/${data.id}`)}
                  addFavorite={() => this.handleRemoveFav(data)}
                />
              ))}
        </div>
      </>
    );
  }
}

export default WithRouter(Favorite);
