import React from "react";
import { Link } from "react-router-dom";

const SideMenu = ({ data, path, setMenuToggle }) => {
  return (
    <div className="absolute top-0 left-0 z-50 h-[85vh] w-screen lg:hidden  bg-gray-900 bg-opacity-65 transition-transform duration-1000 delay-700 ease-in-out">
      <div className="h-full w-1/2">
        <div className="w-full h-[80%] bg-white py-5">
          <ul className="flex flex-col gap-1">
            {data?.map((val, index) => {
              return (
                <li
                  onClick={() => setMenuToggle(false)}
                  key={index}
                  className={`p-2 px-4 ${
                    path === val.to ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-100 cursor-pointer`}
                >
                  <Link to={val.to}>{val.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full h-[20%] bg-gray-100">
          <div className="h-1/2 w-full flex justify-start items-center px-10">
            <select className="bg-gray-100 hover:underline text-slate-500  w-[23%] cursor-pointer">
              <option value="USD $ | Australia">USD $ | Australia </option>
              <option value="USD $ | Austria">USD $ | Austria</option>
              <option value="USD $ | Belgium">USD $ | Belgium</option>
              <option value="USD $ | Canada">USD $ | Canada</option>
              <option value="USD $ | Czechia">USD $ | Czechia</option>
              <option value="USD $ | Denmark">USD $ | Denmark</option>
              <option value="USD $ | Finland">USD $ | Finland</option>
              <option value="USD $ | France">USD $ | France</option>
              <option value="USD $ | Germany">USD $ | Germany</option>
              <option value="USD $ | Hong">USD $ | Hong Kong SAR</option>
              <option value="USD $ | India">USD $ | India</option>
              <option value="USD $ | Ireland">USD $ | Ireland</option>
              <option value="USD $ | Israel">USD $ | Israel</option>
              <option value="USD $ | Italy">USD $ | Italy</option>
              <option value="USD $ | Japan">USD $ | Japan</option>
              <option value="USD $ | Malaysia">USD $ | Malaysia</option>
              <option value="USD $ | Netherlands">USD $ | Netherlands</option>
              <option value="USD $ | New">USD $ | New Zealand</option>
              <option value="USD $ | Norway">USD $ | Norway</option>
              <option value="USD $ | Poland">USD $ | Poland</option>
              <option value="USD $ | Portugal">USD $ | Portugal</option>
              <option value="USD $ | Singapore">USD $ | Singapore</option>
              <option value="USD $ | South">USD $ | South Korea</option>
              <option value="USD $ | Spain">USD $ | Spain</option>
              <option value="USD $ | Sweden">USD $ | Sweden</option>
              <option value="USD $ | Switzerland">USD $ | Switzerland</option>
              <option value="USD $ | United Arab Emirates">
                USD $ | United Arab Emirates
              </option>
              <option value="USD $ | United Kingdom">
                USD $ | United Kingdom
              </option>
              <option value="USD $ | United States">
                USD $ | United States
              </option>
            </select>
          </div>

          <div className="h-1/2 w-full flex justify-start items-center px-10 ">
            <span className="flex gap-5">
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-twitter-x cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>

              <a
                href="http://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-instagram cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
