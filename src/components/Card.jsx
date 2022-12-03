import React, { useState } from "react";
import { RiArrowDropDownLine as ArrowIcon } from "react-icons/ri";
import InfiniteScroll from "react-infinite-scroll-component";

const Card = ({ dataCat, moreBooks, handleFilter, handleCat }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="flex justify-center items-center py-5 flex-col ">
      <InfiniteScroll
        dataLength={dataCat.length}
        next={handleCat}
        hasMore={true}
        className="px-10 py-5"
      >
        {dataCat?.map((data, id) => {
          return (
            <div
              className="card w-[600px] h-[200px] rounded-xl mb-5 flex"
              key={id}
            >
              <img
                src={data?.image?.url}
                alt={data?.image?.id}
                className="w-1/3 h-full rounded-bl-xl rounded-tl-xl"
              />
              <div className="pl-3 pt-3 pr-2 w-2/3 duration-[2000ms] transition-all">
                <h1 className="font-semibold h-1/6">{data.name}</h1>
                <p className="text-xs h-1/6 mb-1">
                  Temprament : {data.temperament}
                </p>
                {activeIndex === id ? (
                  <p className="text-[10px] w-full h-3/6">{data.description}</p>
                ) : null}
                <div className="flex justify-between items-center flex-row">
                  <a
                    href={data?.wikipedia_url}
                    className="underline text-xs h-1/6"
                  >
                    Wikipedia Detail
                  </a>
                  <ArrowIcon
                    onClick={() => {
                      if (id === activeIndex) {
                        setActiveIndex(-1);
                      } else {
                        setActiveIndex(id);
                      }
                    }}
                    className={`duration-[500ms] transition-all mr-3 cursor-pointer ${
                      activeIndex === id && "rotate-180"
                    }`}
                    size={25}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Card;
