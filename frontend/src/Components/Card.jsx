import React from "react";

const Card = ({ item , key}) => {
  return (
    <div>
      <div key={key} className="card bg-base-100 w-96 shadow-xl hover:scale-110 duration-500">
        <figure>
          <img
            src={item.image}
            alt={item.image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className=" py-1 px-2 rounded-sm cursor-pointer hover:bg-teal-500 duration-200 hover:text-black ">buy now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
