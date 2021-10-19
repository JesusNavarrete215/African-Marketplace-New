import React from "react";

const Item = (props) => {
  const { item } = props;

  return (
    <div>
      <div className="card-body">
        <h3>{item.name}</h3>
        <hr />
        <p>
          <b>Category:</b> {item.category}
        </p>
        <p>
          <b>Description:</b> {item.description}
        </p>
        <p>
          <b>Price:</b> ${item.price}
        </p>
        <p>
          <b>Location:</b> {item.location}
        </p>
      </div>
    </div>
  );
};

export default Item;
