import React, { Component } from "react";

export class Detail extends Component {
  render() {
    return (
      <>
        <section className="pt-20 ">
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
              <div className="absolute w-[1120px] h-[400px] bg-gradient-to-t from-abu-600/90 z-[2] rounded-3xl " />
              <img
                className="h-[400px] w-full object-cover rounded-3xl"
                src="https://cineverse.id/wp-content/uploads/2019/04/Avengers-Endgame-Poster-Cropped.jpg"
                alt=""
              />
            </div>
            <div className="h-[410px] w-[260px] bg-tertary-600">
              <h2>Avenger</h2>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Detail;
