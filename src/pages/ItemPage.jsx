import React from "react";
import { useParams } from "react-router-dom";
import items from "../clothing_store_products.json";
import ItemDetails from "../components/ItemDetails";
import BackArrow from "../components/BackArrow";

const ItemPage = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <>
      <BackArrow />
      <ItemDetails item={item} />
    </>
  );
};

export default ItemPage;
