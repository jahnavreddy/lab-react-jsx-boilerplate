import React, { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant
      },
      {
        id: 2,
        img: elephant
      },
      {
        id: 3,
        img: elephant
      },
      {
        id: 4,
        img: elephant
      }
    ];
    return data;
  };

  render() {
    const image_arr = this.imageData(); 

    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <div className='parent_div'>
          {image_arr.map((elem) => {
            return <img key={elem.id} src={elem.img} alt="" />;
          })}
        </div>
      </div>
    );
  }
}
