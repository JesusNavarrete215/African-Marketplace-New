import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "./../actions/index";
import { useHistory } from "react-router";

const Additem = (props) => {
  const { addItem } = props;
  const { push } = useHistory();
  const [error, setError] = useState("");
  const [value, setValue] = useState({
    name: "",
    location: "",
    category: "",
    description: "",
    price: 0,
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      value.name === "" ||
      value.location === "" ||
      value.category === "" ||
      value.description
    ) {
      setError("Error");
    } else {
      addItem(value);
      push(`/item-list`);
    }
  };

  const handelCancel = (e) => {
    e.preventDefault();
    push("/item-list");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
        />
        <label>Location:</label>
        <input
          placeholder="Location"
          type="text"
          name="location"
          value={value.location}
          onChange={handleChange}
        />
        <label>Category:</label>
        <input
          placeholder="Category"
          type="text"
          name="category"
          value={value.category}
          onChange={handleChange}
        />
        <label>Description:</label>
        <input
          placeholder="Description"
          type="text"
          name="description"
          value={value.description}
          onChange={handleChange}
        />
        <label>Price:</label>
        <input
          placeholder="Price"
          type="text"
          name="price"
          value={value.price}
          onChange={handleChange}
        />
        <button>Submit</button>
        <button className="cancel-btn" onClick={handelCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addItem })(Additem);
