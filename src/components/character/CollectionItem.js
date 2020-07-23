import React from "react";
import CollectionPreview from "../character/CollectionPreview";
import Spinner from "../ui/Spinner";

const CollectionItem = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CollectionPreview key={item.char_id} item={item}></CollectionPreview>
      ))}{" "}
    </section>
  );
};

export default CollectionItem;
