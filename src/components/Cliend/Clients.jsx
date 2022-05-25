import React from "react";
import "../main.scss";
import "./_client.scss";

function Clients() {
  return (
    <div className="clientContainer">
      <h2 className="client__title">What client say</h2>
      <div className="clients">
        <div className="clients__back">
          <img src="../../Assets/images/2931159_arrow_forward_right_move_navigation_icon.png" />
        </div>
        <div className="clients__active">
          <div className="clients__active--pictures">
            <div className="picture">
              <div className="picture1--front"></div>
              <div className="picture1--back"></div>
            </div>
            <div className="picture">
              <div className="picture2--front"></div>
              <div className="picture2--back"></div>
            </div>
            <div className="picture">
              <div className="picture3--front"></div>
              <div className="picture3--back"></div>
            </div>
            <div className="picture">
              <div className="picture4--front"></div>
              <div className="picture4--back"></div>
            </div>
            <div className="picture">
              <div className="picture5--front"></div>
              <div className="picture5--back"></div>
            </div>
          </div>
          <div className="clients__active--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            laborum nobis velit illo quasi natus iusto labore perspiciatis alias
            sit eaque quas id eum modi blanditiis debitis error, quia culpa.
          </div>
          <div className="clients__active--name">
            <p className="clients__active--name--name">John Deo</p>
            <p className="clients__active--name--work">CEO Smart Edu</p>
          </div>
        </div>
        <div className="clients__next">
          <img src="../../Assets/images/2931159_arrow_forward_right_move_navigation_icon.png" />
        </div>
      </div>
    </div>
  );
}

export default Clients;
