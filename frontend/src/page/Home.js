import React from "react";
import { Link } from "react-router-dom";
import { ChefHat } from "lucide-react";
import { Leaf } from "lucide-react";
import { HandHeart } from "lucide-react";
import { Award } from "lucide-react";
import Spkitchen from "../component/splinekitchen";
import about_pic01 from "../assest/about_pic01.jpg";
import about_pic2 from "../assest/about_pic2.jpg";
import about_pic03 from "../assest/about_pic03.png";
import avatar01 from "../assest/avatar01.png";
import avatar02 from "../assest/avatar02.png";
import avatar03 from "../assest/avatar03.png";
import avatar04 from "../assest/avatar04.png";
import avatar05 from "../assest/avatar05.png";
import avatar06 from "../assest/avatar06.png";

const About = () => {
  return (
    <div className="flex flex-col min-h-[100dvh] items-center">
      <main className="flex-1">
        <section className=" py-12 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-5xl font-bold tracking-tight mb-4 text-green-700">
                  Welcome
                </h1>
                <h1 className="text-3xl font-bold tracking-tight mb-4 text-green-700">
                  to Greenery Grocer
                </h1>
                <p className="text-muted-foreground text-lg mb-6 ">
                  Discover the joy of fresh, organic produce and sustainable
                  grocery shopping.
                </p>
                <div className="flex gap-4">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-700 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    to={"/shop"}
                    rel="ugc"
                  >
                    Shop Now
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-700 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    to={"/login"}
                    rel="ugc"
                  >
                    Login
                  </Link>
                </div>
              </div>
              <script
                type="module"
                src="https://unpkg.com/@splinetool/viewer@1.9.3/build/spline-viewer.js"
              ></script>
              <img
                src={about_pic01}
                width="550"
                height="550"
                alt="Our Story"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />

              {/* <img
                src={foodcarrying}
                width="300"
                height="300"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              /> */}
              {/* <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Greenery Grocer"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              /> */}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-700">
                  Our Story
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Greenery Grocer was founded in 2015 with the mission to
                  provide our community with fresh, organic, and sustainable
                  grocery options. We believe that everyone deserves access to
                  high-quality, nutritious food that nourishes both the body and
                  the planet.
                </p>
                <p className="text-muted-foreground text-lg mb-6">
                  Our founders, Sarah and Michael, were inspired by their own
                  struggles to find affordable, ethical groceries in their
                  neighborhood. They set out to create a grocery store that
                  would not only meet the needs of their community but also
                  support local farmers, reduce waste, and promote
                  sustainability.
                </p>
              </div>
              <div width="550" height="400">
                <Spkitchen />
              </div>
            </div>
          </div>
        </section>
        <section className=" py-12 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src={about_pic2}
                width="550"
                height="550"
                alt="Our Story"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-700">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  At Greenery Grocer, our mission is to make healthy,
                  sustainable living accessible to everyone. We believe that by
                  providing our community with fresh, organic produce and
                  eco-friendly grocery options, we can help promote a healthier,
                  more environmentally conscious lifestyle.
                </p>
                <p className="text-muted-foreground text-lg mb-6">
                  We work closely with local farmers and producers to ensure
                  that our shelves are stocked with the freshest, most
                  nutritious ingredients. We also prioritize reducing waste and
                  supporting sustainable practices throughout our supply chain.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-green-700">
                  Our Values
                </h2>
                <ul className="space-y-10 pt-8 text-muted-foreground text-lg">
                  <li className="flex items-start gap-4">
                    <Leaf className="h-8 w-8" />
                    <div>
                      <h3 className="font-bold">Sustainability</h3>
                      <p>
                        We are committed to reducing our environmental impact
                        and promoting sustainable practices throughout our
                        business.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <HandHeart className="h-8 w-8" />
                    <div>
                      <h3 className="font-bold">Community</h3>
                      <p>
                        We believe in supporting our local community and
                        building strong relationships with our customers,
                        suppliers, and partners.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Award className="h-8 w-8" />
                    <div>
                      <h3 className="font-bold">Quality</h3>
                      <p>
                        We are committed to providing our customers with the
                        highest-quality, freshest, and most nutritious products.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src={about_pic03}
                width="550"
                height="550"
                alt="Our Story"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover items-center"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#f8f9fa] py-12 md:py-24">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center text-green-700">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mb-4">
                  <img className="aspect-square h-full w-full" src={avatar01} />
                </span>
                <h3 className="text-lg font-bold">Sarah</h3>
                <p className="text-muted-foreground">Co-Founder</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mb-4">
                  <img className="aspect-square h-full w-full" src={avatar02} />
                </span>
                <h3 className="text-lg font-bold">Michael</h3>
                <p className="text-muted-foreground">Co-Founder</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full mb-4">
                  <img className="aspect-square h-full w-full" src={avatar03} />
                </span>
                <h3 className="text-lg font-bold">Emily</h3>
                <p className="text-muted-foreground">Operations Manager</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8 text-center text-green-700">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
              <div
                className="border text-card-foreground p-6 bg-[#f8f9fa] rounded-lg shadow-md items-center"
                data-v0-t="card"
              >
                <div className="flex gap-4 mb-4 items-center">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <img
                      className="aspect-square h-full w-full"
                      src={avatar04}
                    />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <p className="text-muted-foreground">Satisfied Customer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Greenery Grocer has been a game-changer for my family. The\n
                  fresh, organic produce and sustainable products have\n
                  transformed the way we eat and live. Highly recommended!"
                </p>
              </div>
              <div
                className="border text-card-foreground p-6 bg-[#f8f9fa] rounded-lg shadow-md"
                data-v0-t="card"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <img
                      className="aspect-square h-full w-full"
                      src={avatar05}
                    />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">Jane Smith</h3>
                    <p className="text-muted-foreground">Loyal Customer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I love shopping at Greenery Grocer. The staff is so\n
                  friendly and knowledgeable, and the selection of healthy,\n
                  eco-friendly products is unbeatable. It's become my go-to\n
                  grocery store."
                </p>
              </div>
              <div
                className="border text-card-foreground p-6 bg-[#f8f9fa] rounded-lg shadow-md"
                data-v0-t="card"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <img
                      className="aspect-square h-full w-full"
                      src={avatar06}
                    />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">Alex Johnson</h3>
                    <p className="text-muted-foreground">Satisfied Customer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Greenery Grocer has completely changed the way I shop for\n
                  groceries. The quality of the products, the commitment to\n
                  sustainability, and the overall shopping experience are\n
                  unmatched. I highly recommend it to anyone looking to\n
                  improve their health and reduce their environmental impact."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <hr className="border-t border-primary-foreground/10 my-8" />
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-2 pr-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <ChefHat className="text-green-700" />
            <span className="text-lg font-semibold text-green-700">
              Greenery Grocer
            </span>
          </div>
          <nav className="flex items-center gap-8">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 hover:text-green-700"
              to={"/home"}
              rel="ugc"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 hover:text-green-700"
              to={"/shop"}
              rel="ugc"
            >
              Shop
            </Link>

            <Link
              className="text-sm font-medium hover:underline underline-offset-4 hover:text-green-700"
              to={"/contact"}
              rel="ugc"
            >
              Contact
            </Link>
          </nav>
          <p className="text-sm text-primary-foreground/80 text-right">
            © 2024 Greenery Grocer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
