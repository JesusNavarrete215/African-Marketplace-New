import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axiosWithAuth from "./../utils/axiosWithAuth";
import Item from "./Item";
import { setItems } from "./../actions/index";
import { fetchData } from "../actions";

const Itemlist = (props) => {
  const { items, setItems, axiosWithAuth } = props;
  const [values, setValues] = useState(items);

  console.log(props);
  useEffect(() => {
    fetchData();
  }, []);
  const deleteItem = (id) => {
    setValues(values.filter((value) => value.id !== id));
    setItems(values);
  };

  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`https://african-marketplace-db.herokuapp.com/api/items/${id}`)
      .then((res) => {
        deleteItem(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        {items.map((item) => (
          <Item key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { items: state.item };
};

export default connect(mapStateToProps, { fetchData, setItems, axiosWithAuth })(
  Itemlist
);
