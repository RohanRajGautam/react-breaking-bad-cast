import React, { useState, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";
import "./App.css";
import CollectionItem from "./components/character/CollectionItem";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItem();
  }, []);

  return (
    <div className='container'>
      <Header />
      <Search />
      <CollectionItem items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
