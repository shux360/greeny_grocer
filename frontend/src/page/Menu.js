import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide";
import { deleteProduct, editProduct } from "../redux/action";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Trash2, PencilLine } from "lucide-react";

const Menu = () => {
  const role = localStorage.getItem("role");
  const { filterby } = useParams();
  const image = useSelector((state) => state.product.productList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  console.log(productDisplay);
  const [Data, setData] = useState({});

  //get product by id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_DOMAIN}/product/${filterby}`
        );
        console.log("product", response.data);
        setData(response.data);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };
    fetchData();
  }, [filterby]);

  const handleDeleteProduct = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_DOMAIN}/deleteProduct/${filterby}`
      );
      console.log("product", response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.log("Error deleting product", error);
    }
    navigate("/");
  };
  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay));
  };

  const handleBuy = () => {
    dispatch(addCartItem(productDisplay));
    navigate("/cart");
  };
  const handleEditProduct = () => {
    dispatch(editProduct({}));
    navigate(`/editProduct/${filterby}`);
  };

  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-4xl m-auto md:flex bg-white">
        <div className="max-w-sm  overflow-hidden w-full p-5">
          <img
            src={Data.image}
            className="hover:scale-105 transition-all h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl mt-5">
            {Data.name}
          </h3>
          <p className=" text-slate-500  font-medium text-2xl">
            {Data.category}
          </p>
          <p className=" font-bold md:text-2xl">
            <span className="text-red-500 ">LKR </span>
            <span>{Data.price}</span>
          </p>

          {role === "admin" ? (
            <div className="admin-buttons flex space-x-2">
              {/* <Link
                to={`/editProduct/${Data._id}`}
                className="bg-blue-500 py-1 text-center mt-2 rounded hover:bg-blue-600 min-w-[100px]"
                onClick={handleEditProduct}
              >
                Edit
              </Link>
              <button
                className="bg-red-500 py-1 mt-2 text-center rounded hover:bg-red-600 min-w-[100px]"
                onClick={handleDeleteProduct}
              >
                Delete
              </button> */}

              <div className="admin-buttons flex space-x-2">
                <button
                  className="bg-white border-2 border-blue-600 py-1 mt-2 rounded hover:bg-blue-600 text-blue-600 hover:text-white flex justify-center min-w-[60px]"
                  onClick={handleEditProduct}
                >
                  <PencilLine />
                </button>
                <button
                  className="bg-white border-2 border-red-600 py-1 mt-2 rounded hover:bg-red-600 text-red-600 hover:text-white  flex justify-center min-w-[60px]"
                  onClick={handleDeleteProduct}
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleBuy}
                className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
              >
                Buy
              </button>
              <button
                onClick={handleAddCartProduct}
                className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]"
              >
                Add Cart
              </button>
            </div>
          )}

          <div>
            <p className="text-slate-600 font-medium">Description : </p>
            <p>{Data.description}</p>
          </div>
        </div>
      </div>

      <AllProduct heading={"Related Product"} />
    </div>
  );
};

export default Menu;
