// import { data } from "autoprefixer";
import { BsBookmark } from "react-icons/bs";
import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div
        className="bg-card h-[410px] w-[250px] rounded-lg z-10 backdrop-blur-3xl"
        // key={data.id}
      >
        <div
          className="flex justify-center items-center px-2 pt-2 cursor-pointer "
          onClick={this.props.onNavigate}
        >
          <img
            className="object-cover h-[320px] w-full rounded-lg "
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
          />
        </div>
        <div className="flex justify-between items-center px-4 mt-3 text-abu-100 ">
          <div>
            <h5 className="mb-2 text-sm  font-semibold cursor-pointer">
              {this.props.title}
            </h5>
            <p className="font-light text-xs">{this.props.date}</p>
          </div>
          <BsBookmark
            className="cursor-pointer"
            onClick={this.props.addFavorite}
          />
        </div>
      </div>
    );
  }
}

export default Card;
