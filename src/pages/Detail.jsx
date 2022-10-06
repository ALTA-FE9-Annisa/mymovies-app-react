import React, { Component } from "react";

export class Detail extends Component {
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
            <div className="w-full h-[400px] ">
              {" "}
              {/* <div className="absolute w-[1117px] h-[400px] bg-gradient-to-t from-abu-300/50 z-[2] rounded-3xl " /> */}
              <img
                className="h-[400px] w-full object-cover rounded-[40px]"
                src="https://cineverse.id/wp-content/uploads/2019/04/Avengers-Endgame-Poster-Cropped.jpg"
                alt=""
              />
              <div className="h-[144px] w-[440px] bg-card-detail backdrop-blur-md rounded-3xl  relative z-[5] top-[-23%] left-[4%] p-10">
                <p className="text-sm font-light text-abu-200 mb-2">Movie</p>
                <h2 className="text-3xl font-semibold text-abu-50 ">
                  Avengers: Endgame
                </h2>
              </div>
            </div>

            <div className="flex  justify-between gap-20 mt-[200px]">
              <img
                className="h-[520px] w-[450px] object-cover z-[10]  rounded-3xl"
                src="https://picfiles.alphacoders.com/458/thumb-458644.jpg"
              />
              <div className="z-[10]">
                <h1 className="text-2xl font-bold leading-8 text-abu-100 mb-3">
                  Overview
                </h1>
                <p className=" text-base font-light leading-7 text-abu-300 mb-5">
                  After the devastating events of Avengers: Infinity War, the
                  universe is in ruins due to the efforts of the Mad Titan,
                  Thanos. With the help of remaining allies, the Avengers must
                  assemble once more in order to undo Thanos' actions and
                  restore order to the universe once and for all, no matter what
                  consequences may be in store.
                </p>
                <button className="bg-abu-600 w-[60px] rounded text-yellow mb-5">
                  8.3
                </button>
                <p className="text-base text-abu-700 mb-2 ">Type</p>
                <h4 className="text-abu-100 text-lg font-normal mb-5">Movie</h4>
                <p className="text-base text-abu-700 mb-2 ">Release Date:</p>
                <h4 className="text-abu-100 text-lg font-normal mb-5">
                  2019-04-24
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

export default Detail;
