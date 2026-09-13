
import React from "react";
import { DiReact } from "react-icons/di";
import { FaVuejs } from "react-icons/fa6";
import { RiSvelteFill } from "react-icons/ri";

const Stack = () => {
  return (
    <div className=" container ml-25 grid grid-cols-1 lg:grid-cols-[80%_20%] gap-6 w-full">

      {/* Left side - 12 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Card 1 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <DiReact className="text-5xl text-cyan-400" />

            <span className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-500">
              Popular
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-3xl font-bold">React</h4>

            <p className="mt-3 text-gray-500">
              A declarative, component-based JavaScript library for
              building modern user interfaces.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Frontend
              </span>

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Beginner-Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <h5 className="font-bold">4.9</h5>
            </div>
          </div>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Add to Stack
          </button>
        </div>
        {/* card 2 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <FaVuejs className="text-5xl text-green-400"/>
            

            <span className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-500">
              Versatile
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-3xl font-bold">Vue.js</h4>

            <p className="mt-3 text-gray-500">
              An approachable, performant and versatile framework for building web user interfaces.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Frontend
              </span>

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Beginner-Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <h5 className="font-bold">4.8</h5>
            </div>
          </div>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Add to Stack
          </button>
        </div>

        {/* card 3 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <RiSvelteFill className="text-5xl text-red-400" />

            <span className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-500">
              Fast
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-3xl font-bold">React</h4>

            <p className="mt-3 text-gray-500">
              Cybemetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Frontend
              </span>

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Beginner-Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <h5 className="font-bold">4.8</h5>
            </div>
          </div>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Add to Stack
          </button>
        </div>
        {/* card 4 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <DiReact className="text-5xl text-cyan-400" />

            <span className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-500">
              Popular
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-3xl font-bold">React</h4>

            <p className="mt-3 text-gray-500">
              A declarative, component-based JavaScript library for
              building modern user interfaces.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Frontend
              </span>

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Beginner-Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <h5 className="font-bold">4.9</h5>
            </div>
          </div>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Add to Stack
          </button>
        </div>
        {/* card 5 */}

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <DiReact className="text-5xl text-cyan-400" />

            <span className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-500">
              Popular
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-3xl font-bold">React</h4>

            <p className="mt-3 text-gray-500">
              A declarative, component-based JavaScript library for
              building modern user interfaces.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Frontend
              </span>

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Beginner-Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <h5 className="font-bold">4.9</h5>
            </div>
          </div>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Add to Stack
          </button>
        </div>
        {/* card 6 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <DiReact className="text-5xl text-cyan-400" />

            <span className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-500">
              Popular
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-3xl font-bold">React</h4>

            <p className="mt-3 text-gray-500">
              A declarative, component-based JavaScript library for
              building modern user interfaces.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Frontend
              </span>

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Beginner-Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <h5 className="font-bold">4.9</h5>
            </div>
          </div>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Add to Stack
          </button>
        </div>
        {/* card 7 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <DiReact className="text-5xl text-cyan-400" />

            <span className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-500">
              Popular
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-3xl font-bold">React</h4>

            <p className="mt-3 text-gray-500">
              A declarative, component-based JavaScript library for
              building modern user interfaces.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Frontend
              </span>

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Beginner-Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <h5 className="font-bold">4.9</h5>
            </div>
          </div>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Add to Stack
          </button>
        </div>
        {/* card 8 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <DiReact className="text-5xl text-cyan-400" />

            <span className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-500">
              Popular
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-3xl font-bold">React</h4>

            <p className="mt-3 text-gray-500">
              A declarative, component-based JavaScript library for
              building modern user interfaces.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Frontend
              </span>

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Beginner-Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <h5 className="font-bold">4.9</h5>
            </div>
          </div>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Add to Stack
          </button>
        </div>
        {/* card 9 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <DiReact className="text-5xl text-cyan-400" />

            <span className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-500">
              Popular
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-3xl font-bold">React</h4>

            <p className="mt-3 text-gray-500">
              A declarative, component-based JavaScript library for
              building modern user interfaces.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Frontend
              </span>

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Beginner-Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <h5 className="font-bold">4.9</h5>
            </div>
          </div>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Add to Stack
          </button>
        </div>
        {/* card 10 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <DiReact className="text-5xl text-cyan-400" />

            <span className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-500">
              Popular
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-3xl font-bold">React</h4>

            <p className="mt-3 text-gray-500">
              A declarative, component-based JavaScript library for
              building modern user interfaces.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Frontend
              </span>

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Beginner-Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <h5 className="font-bold">4.9</h5>
            </div>
          </div>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Add to Stack
          </button>
        </div>
        {/* card 11 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <DiReact className="text-5xl text-cyan-400" />

            <span className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-500">
              Popular
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-3xl font-bold">React</h4>

            <p className="mt-3 text-gray-500">
              A declarative, component-based JavaScript library for
              building modern user interfaces.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Frontend
              </span>

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Beginner-Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <h5 className="font-bold">4.9</h5>
            </div>
          </div>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Add to Stack
          </button>
        </div>
        {/* card 12 */}
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <div className="flex items-center justify-between">
            <DiReact className="text-5xl text-cyan-400" />

            <span className="rounded-full bg-blue-50 px-4 py-2 font-semibold text-blue-500">
              Popular
            </span>
          </div>

          <div className="mt-8">
            <h4 className="text-3xl font-bold">React</h4>

            <p className="mt-3 text-gray-500">
              A declarative, component-based JavaScript library for
              building modern user interfaces.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Frontend
              </span>

              <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm">
                Beginner-Friendly
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <h5 className="font-bold">4.9</h5>
            </div>
          </div>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Add to Stack
          </button>
        </div>
      </div>

      {/* Right side - only 1 card */}
      <div className="w-full">
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h2 className="text-2xl font-bold">My Stack</h2>

          <p className="mt-3 text-gray-500">
            Your selected technology will appear here.
          </p>

          <button className="mt-6 w-full rounded-[15px] bg-black py-3 text-white">
            Click Here
          </button>
        </div>
      </div>

    </div>
  );
};

export default Stack;
