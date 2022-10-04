import { data } from "autoprefixer";
import { BsBookmark } from "react-icons/bs";

import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div
        className="bg-card h-[410px] w-[260px] rounded-lg z-10 "
        key={data.id}
      >
        <div className="flex justify-center items-center leading-none px-3 pt-3">
          <img
            className="object-cover h-[320px] w-full rounded-lg  "
            src={this.props.image}
            alt={this.props.title}
          />
        </div>
        <div className="flex justify-between items-center px-4 mt-3 text-abu-100">
          <div>
            <h4 className="mb-2 -100 font-medium">{this.props.title}</h4>
            <p className="font-light text-sm">2021</p>
          </div>
          <BsBookmark />
        </div>
      </div>
    );
  }
}

export default Card;
