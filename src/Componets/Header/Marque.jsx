import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <section className="mx-auto w-11/12">
      <div className="flex  my-5  items-center">
        <p className="bg-secondary text-base-200 p-5 font-semibold rounded-lg">
          Latest
        </p>
        <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
          <p className="bg-base-200 p-5 font-bold ">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="bg-base-200 p-5 font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="bg-base-200 p-5 font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
    </section>
  );
};

export default Marque;
