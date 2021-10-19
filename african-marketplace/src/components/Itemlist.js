import React, { useState, useParams } from "react";
import { connect } from "react-redux";

const Itemlist = (props) => {
  const { items } = props;
  const [values, setValues] = useState(items);
  const { id } = useParams();
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
        {items.map((item) => {
          <Item key={item.id} item={item} handleDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { items: this.state };
};

export default connect(mapStateToProps)(Itemlist);
