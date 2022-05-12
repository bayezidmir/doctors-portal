import React from "react";

const infoCard = ({ img, title, bgClass }) => {
  return (
    <div class={`card card-side shadow-xl pl-2 ${bgClass}`}>
      <figure>
        <img src={img} alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  );
};

export default infoCard;
