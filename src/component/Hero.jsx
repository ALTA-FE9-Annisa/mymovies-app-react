// import { Container } from "postcss";
import React, { Component } from "react";

export class Hero extends Component {
  render() {
    return (
      <div className="w-full h-[560px] ">
        <div className="w-full h-full">
          <div
            className="absolute z-0 w-[30%] h-[30%] right-[5%] bottom-[5%]
          bg-gradient-greenPink"
          />
          <div className="absolute w-full h-[560px] bg-gradient-to-t from-abu-600/90 z-[2]" />
          <img
            className="w-full h-full object-cover"
            src="https://ultimagz.com/wp-content/uploads/dune-movie-poster-1630680152236.jpg"
            alt=""
          />

          <div className="px-7 lg:px-20 absolute w-full top-[45%] z-[2] text-abu-100">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-3 text-abu-50">
              Dune
            </h1>
            <span className="font-extralight">8.6</span>
            <span className="ml-4 font-extralight">2h 30m</span>
            <span className="ml-4 font-extralight">Action,Adventure,Drama</span>
            <span className="ml-4 font-extralight">2021</span>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] mt-6 mb-8 font-extralight font-base">
              A noble family becomes embroiled in a war for control over the
              galaxy's most valuable asset while its heir becomes troubled by
              visions of a dark future
            </p>
            <div className="my-5">
              <button className=" rounded bg-secondary-500 text-abu-50 py-2 px-5 font-normal">
                Play
              </button>
              <button className=" rounded bg-abu-300 text-abu-50 py-2 px-5 ml-4 font-normal">
                Watch later
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
