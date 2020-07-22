import React from "react";
import CollectionPreview from "../character/CollectionPreview";

const CollectionItem = ({ items, isLoading }) => {
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CollectionPreview key={item.char_id} item={item}></CollectionPreview>
      ))}{" "}
    </section>
  );
};

export default CollectionItem;
