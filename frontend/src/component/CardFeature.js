import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, redirect } from "react-router-dom";
import { addCartItem } from "../redux/productSlide";
import { deleteProduct, editProduct } from "../redux/action";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Trash2 } from "lucide-react";
import { PencilLine } from "lucide-react";

const CardFeature = ({
  image,
  name,
  price,
  category,
  loading,
  id,
  quantity,
  onDelete,
}) => {
  const role = localStorage.getItem("role");
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAddCartProduct = (e) => {
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
        quantity: quantity,
      })
    );
  };
  const navigate = useNavigate();
  const handleEditProduct = () => {
    dispatch(editProduct({}));
    navigate(`/editProduct/${id}`);
  };
  //delete product
  const DeleteProduct = (id) => {
    return async (e) => {
      try {
        const response = await axios.delete(
          `${process.env.REACT_APP_SERVER_DOMAIN}/deleteProduct/${id}`
        );
        toast.success("Product deleted successfully");
        onDelete();
      } catch (error) {
        toast.error("Error deleting product:", error);
      }
    };
  };

  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col ">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} className="h-full" alt={name} />
            </div>
            <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className="text-slate-500 font-medium">{category}</p>
            <p className="text-slate-500 font-small">{quantity}</p>
            <p className="font-bold">
              <span className="text-red-500">LKR </span>
              <span>{price}</span>
            </p>
          </Link>
          {role === "admin" ? (
            <div className="admin-buttons flex space-x-2">
              <Link
                to={`/editProduct/${id}`}
                className="bg-white border-2 border-blue-600 py-1 mt-2 rounded hover:bg-blue-600 text-blue-600 hover:text-white w-full flex justify-center"
                onClick={handleEditProduct}
              >
                <PencilLine />
              </Link>
              <button
                className="bg-white border-2 border-red-600 py-1 mt-2 rounded hover:bg-red-600 text-red-600 hover:text-white w-full flex justify-center"
                onClick={DeleteProduct(id)}
              >
                <Trash2 />
              </button>
            </div>
          ) : (
            <button
              className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full"
              onClick={handleAddCartProduct}
            >
              Add to Cart
            </button>
          )}
        </>
      ) : null}
    </div>
  );
};

export default CardFeature;
