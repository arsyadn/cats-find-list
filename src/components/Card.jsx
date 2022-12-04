import React, { useState } from "react";
import { RiArrowDropDownLine as ArrowIcon } from "react-icons/ri";

const Card = ({ dataCat, loadingRef }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="flex justify-center items-center py-5 flex-col ">
      {dataCat?.map((data, id) => {
        return (
          <div
            className="card w-[360px] h-[150px] sm:w-[600px] sm:h-[200px] rounded-xl mb-5 flex"
            key={id}
          >
            <img
              src={data?.image?.url}
              alt={data?.image?.id}
              className="w-1/3 h-full rounded-bl-xl rounded-tl-xl"
            />
            <div className="pl-3 pt-3 pr-2 w-2/3 duration-[2000ms] transition-all">
              <h1 className="font-semibold text-sm sm:text-base h-1/6">
                {data.name}
              </h1>
              <p className="text-[10px] sm:text-xs h-1/6 mb-3 sm:mb-1 ">
                Temprament : {data.temperament}
              </p>
              {activeIndex === id ? (
                <p className="text-[9px] sm:text-[10px] w-full h-2/6 sm:h-3/6">
                  Description : {data.description}
                </p>
              ) : null}
              <div className="flex justify-between items-center flex-row">
                <a
                  href={data?.wikipedia_url}
                  className="underline text-[10px] sm:text-xs h-2/6 sm:h-1/6"
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
      {loadingRef && (
        <div className="new-data-is-coming" ref={loadingRef}></div>
      )}
    </div>
  );
};

export default Card;
