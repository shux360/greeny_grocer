import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import { ChefHat } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const role = localStorage.getItem("role");
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logoutRedux());
    toast.success("Logout successfully");
    navigate("/");
  };

  const cartItemNumber = useSelector((state) => state.product.cartItem);
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10 flex hover:text-green-700">
            <ChefHat className="h-8 w-8 " />
            <Link to={"about"} className="pl-1 text-2xl font-medium">
              Greenery Grocer
            </Link>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link
              to={"home"}
              className="text-lg font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-green-700"
            >
              Home
            </Link>
            <Link
              to={"shop"}
              className="text-lg font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-green-700"
            >
              Shop
            </Link>
            {/* <Link
              to={"menu/63f0fdbb3bcc2f97fa53d25d"}
              className="text-lg font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-green-700"
            >
              Menu
            </Link> */}
            <Link
              to={"contact"}
              className="text-lg font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-green-700"
            >
              Contact
            </Link>
            {role === "admin" && (
              <Link
                to={"newproduct"}
                className="text-lg font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:text-green-700"
              >
                Add new product
              </Link>
            )}
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="mt-5 absolute right-2 rounded-lg border-2 bg-white py-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {role === "admin" && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-20 md:hidden"
                  >
                    Add new product
                  </Link>
                )}

                {userData.email ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-red-500"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName}){" "}
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">
                    Home
                  </Link>
                  <Link
                    to={"shop"}
                    className="text-base md:text-lg flex flex-col md:hidden"
                  >
                    Shop
                  </Link>
                  <Link to={"contact"} className="px-2 py-1">
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
