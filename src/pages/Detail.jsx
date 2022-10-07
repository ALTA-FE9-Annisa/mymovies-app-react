import React, { Component } from "react";
import axios from "axios";
import Loading from "../component/Loading";
import { WithRouter } from "../utils/Navigation";
export class Detail extends Component {
  state = {
    data: {},
    Loading: true,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    const { id_movie } = this.props.params;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.REACT_APP_TMDI_KEY}`
      )
      .then((res) => {
        const { data } = res;
        this.setState({ data: data });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <>
        <div className="pt-20 ">
          <div className=" px-7 lg:px-20 py-3 ">
            <div
              className="absolute z-0 w-[50%] h-[50%] top-[150%]
          bg-gradient-blueViolet rounded-full"
            />
            <div
              className="absolute z-0 w-[50%] h-[50%] right-[3%] bottom-[-160%]
          bg-gradient-greenPink rounded-full"
            />
            <div className="w-full h-[500px] ">
              {/* <div className="absolute w-[1117px] h-[500px] bg-gradient-to-t from-abu-600 z-[2] rounded-3xl " /> */}
              <img
                className="h-[500px] w-full  object-cover rounded-[40px]"
                src={`https://image.tmdb.org/t/p/w500${this.state.data?.backdrop_path}`}
                alt=""
              />
              <div className="h-[144px] w-[440px] bg-card-detail backdrop-blur-md rounded-3xl  relative z-[5] top-[-15%] left-[4%] p-7">
                <p className="text-sm font-light text-abu-200 mb-2">Movie</p>
                <h2 className="text-3xl font-semibold text-abu-50 ">
                  {this.state.data?.title}
                </h2>
              </div>
            </div>

            <div className="flex  justify-between gap-20 mt-[200px]">
              <img
                className="h-[520px] w-[450px] object-cover z-[10] rounded-3xl"
                src={`https://image.tmdb.org/t/p/w500${this.state.data?.poster_path}`}
              />
              <div className="z-[10]">
                <h1 className="text-2xl font-bold leading-8 text-abu-100 mb-3">
                  {this.state.data?.tagline}
                </h1>
                <p className=" text-base font-light leading-7 text-abu-300 mb-5">
                  {this.state.data?.overview}
                </p>
                <button className="bg-abu-600 w-[60px] rounded text-yellow mb-5">
                  8.3
                </button>
                <p className="text-base text-abu-700 mb-2 ">Type</p>
                <h4 className="text-abu-100 text-lg font-normal mb-5">Movie</h4>
                <p className="text-base text-abu-700 mb-2 ">Release Date:</p>
                <h4 className="text-abu-100 text-lg font-normal mb-5">
                  {this.state.data?.release_date}
                </h4>
                <p className="text-base text-abu-700 mb-2">Run time</p>
                <h4 className="text-abu-100 text-lg font-normal mb-5">
                  181 min
                </h4>
                <p className="text-base text-abu-700 mb-2">Genres</p>
                <h4 className="text-abu-100 text-lg font-normal">
                  Adventure, Science Fiction, Action
                </h4>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WithRouter(Detail);
