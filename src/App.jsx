import React from "react";

function App() {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto mx-w-7xl p-2 md:p-10">
        {/* Grid Container */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-4 md:grid-rows-2 text-white">
          {/* Box */}
          <div className="relative p-10 rounded-xl bg-purple-700 md:col-span-2">
            {/* Quote svg */}
            <svg
              className="absolute top-3 right-10 scale-125 md:top-7 mr-right-24 md:scale-150"
              width="104"
              height="102"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z"
                fill="#A775F1"
                fill-rule="nonzero"
              />
            </svg>
            <div className="flex z-10 space-x-4">
              {/* Profile Data */}
              <img
                src={require("./images/image-daniel.jpg")}
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Daniel Clifford</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* Big Text */}
            <p className="relative z-10 mt-6 text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium fuga sunt quo.
            </p>

            {/* Small Text */}
            <p className="mt-6 opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis culpa doloribus eius velit assumenda totam pariatur
              rem, incidunt excepturi, voluptatum molestias unde voluptatem vel
              corporis dolorum hic, ratione aliquam architecto.
            </p>
          </div>
          {/* Box 2 */}
          <div className="p-10 rounded-xl bg-gray-600">
            <div className="flex space-x-4">
              {/* Profile Data */}
              <img
                src={require("./images/image-jonathan.jpg")}
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Jonathan Walters</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* Big Text */}
            <p className="mt-6 text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium fuga sunt quo.
            </p>

            {/* Small Text */}
            <p className="mt-6 opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis culpa doloribus eius velit assumenda totam pariatur
              rem, incidunt excepturi, voluptatum molestias unde voluptatem vel
              corporis dolorum hic, ratione aliquam architecto.
            </p>
          </div>
          {/* Box 3 */}
          <div className="p-10 hidden md:block rounded-xl bg-white text-gray-900 md:row-span-2">
            <div className="flex space-x-4">
              {/* Profile Data */}
              <img
                src={require("./images/image-kira.jpg")}
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Kira Walters</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* Big Text */}
            <p className="mt-6 text-xl">
              Lorem, ipsum dolor sit amet.
            </p>

            {/* Small Text */}
            <p className="mt-6 opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis.
            </p>
          </div>

          {/* Box 4 */}
          <div className="p-10 rounded-xl bg-white text-gray-900">
            <div className="flex space-x-4">
              {/* Profile Data */}
              <img
                src={require("./images/image-jeanette.jpg")}
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">jeanette Harmon</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* Big Text */}
            <p className="mt-6 text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>

            {/* Small Text */}
            <p className="mt-6 opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis culpa doloribus eius velit assumenda totam pariatur
              rem, incidunt excepturi, voluptatum molestias.
            </p>
          </div>

          {/* Box 5 */}
          <div className="p-10 rounded-xl bg-gray-900 md:col-span-2">
            <div className="flex space-x-4">
              {/* Profile Data */}
              <img
                src={require("./images/image-patrick.jpg")}
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Patrick Walters</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* Big Text */}
            <p className="mt-6 text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium fuga sunt quo.
            </p>

            {/* Small Text */}
            <p className="mt-6 opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis culpa doloribus eius velit assumenda totam pariatur
              rem, incidunt excepturi, voluptatum molestias unde voluptatem vel
              corporis dolorum hic, ratione aliquam architecto.
            </p>
          </div>

          {/* Box 6 */}
          <div className="p-10 rounded-xl md:hidden bg-white text-gray-900">
            <div className="flex space-x-4">
              {/* Profile Data */}
              <img
                src={require("./images/image-kira.jpg")}
                alt=""
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
              />
              <div className="text-sm">
                <h4 className="opacity-90">Kira Walters</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* Big Text */}
            <p className="mt-6 text-xl">
              Lorem, ipsum dolor sit amet.
            </p>

            {/* Small Text */}
            <p className="mt-6 opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
