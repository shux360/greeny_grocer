import React, { useEffect, useState } from "react";
import CardFeature from "./CardFeature";
import FilterProduct from "./FilterProduct";
import axios from "axios";

const AllProduct = ({ heading }) => {
  //filter data display
  const [filterby, setFilterBy] = useState("All");
  const [dataFilter, setDataFilter] = useState([]);
  const [Data, setData] = useState([]);
  const [dataChanged, setDataChanged] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_DOMAIN}/getAllProducts`
        );
        console.log("All products", response.data);
        setData(response.data);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };
    fetchData();
  }, [dataChanged]);
  console.log("data", Data);
  console.log("category", Data.category);

  useEffect(() => {
    setDataFilter(Data);
  }, [Data]);

  const handleFilterProduct = (category) => {
    setFilterBy(category);
    if (category === "All") {
      setDataFilter(Data);
      return;
    } else {
      const filter = Data.filter(
        (el) => el.category.toLowerCase() === category.toLowerCase()
      );
      setDataFilter(() => {
        return [...filter];
      });
    }
  };

  const categoryList = [...new Set(Data.map((el) => el.category))];
  const loadingArrayFeature = new Array(10).fill(null);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>

      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        <FilterProduct
          category={"All"}
          key={"All"}
          isActive={filterby === "All" ? true : false}
          onClick={() => handleFilterProduct("All")}
        />
        {categoryList[0] ? (
          categoryList.map((el) => {
            return (
              <FilterProduct
                category={el}
                key={el}
                isActive={el.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter[0]
          ? dataFilter.map((el) => {
              return (
                <CardFeature
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  quantity={el.quantity}
                  category={el.category}
                  price={el.price}
                  //onDelete={handleDeleteProduct}
                  onDelete={() => setDataChanged((prev) => !prev)}
                />
              );
            })
          : loadingArrayFeature.map((el, index) => (
              <CardFeature loading="Loading..." key={index + "allProduct"} />
            ))}
      </div>
    </div>
  );
};

export default AllProduct;
