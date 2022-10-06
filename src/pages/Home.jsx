// import { data } from "autoprefixer";
import axios from "axios";
import React, { Component } from "react";
import Card from "../component/Card";
import Hero from "../component/Hero";
// import { faker } from "@faker-js/faker";
import Loading from "../component/Loading";
import { ButtonPrimary } from "../component/Button";

export class Home extends Component {
  state = {
    title: "Welcome",
    datas: [],
    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
    page: 1,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    this.setState({ loading: true });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDI_KEY}&language=en-US&page=${this.state.page}`
      )
      .then((res) => {
        const { results } = res.data;
        console.log();
        const newPage = this.state.page + 1;
        const temp = [...this.state.datas];
        temp.push(...results);
        this.setState({ datas: temp, page: newPage });
        // this.setState({ datas: results });
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
        <Hero />
        <section className="mt-12 pt-16  ">
          <div className="px-7 lg:px-20 grid grid-cols-4 gap-x-15 gap-y-10 ">
            <div
              className="absolute z-0 w-[50%] h-[50%] top-[150%]
          bg-gradient-blueViolet rounded-full"
            />
            <div
              className="absolute z-0 w-[50%] h-[50%] right-[3%] bottom-[-160%]
          bg-gradient-greenPink rounded-full"
            />
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
          <ButtonPrimary label="Load More" onClick={() => this.fetchData()} />
        </section>
      </>
    );
  }
}

export default Home;
