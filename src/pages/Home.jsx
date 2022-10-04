// import { data } from "autoprefixer";
import React, { Component } from "react";
import Card from "../component/Card";
import Hero from "../component/Hero";

export class Home extends Component {
  state = {
    title: "Welcome",
    datas: [],
    skeleton: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loading: true,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    let dataTemp = [];
    for (let i = 0; i < 8; i++) {
      const temp = {
        id: i + 1,
        title: `Black Widow #${i + 1}`,
        image:
          "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg",
      };
      dataTemp.push(temp);
    }
    this.setState({ datas: dataTemp });
  }
  render() {
    return (
      <div>
        <Hero />
        <section className="mt-12 pt-16 ">
          <div className="px-7 lg:px-20 grid grid-cols-4 gap-x-15 gap-y-10 ">
            <div
              className="absolute z-0 w-[50%] h-[50%] top-[150%]
          bg-gradient-blueViolet rounded-full"
            />
            <div
              className="absolute z-0 w-[50%] h-[50%] right-[3%] bottom-[-160%]
          bg-gradient-greenPink rounded-full"
            />
            {this.state.datas.map((data) => (
              <Card key={data.id} image={data.image} title={data.title} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
