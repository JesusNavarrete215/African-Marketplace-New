import React from "react";

const Item = (props) => {
  const { item, handleDelete } = props;

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
        <button onSubmit={handleDelete(item.id)}></button>
      </div>
    </div>
  );
};

export default Item;
