import React from "react";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";



interface PropType {
  title: String;
  img: any;
  link: any;
}

const Card: React.FC<PropType> = ({ title, img, link }) => {
  return (
    <div className="w-full gap-4 h-full rounded-[4%] bg-[#0a0a0a] shadow-2xl text-[#f2b705] ">
      <div>
        <div className="container flex flex-col ">
          <div>
            <img
              src={img}
              alt="Picture"
              className="w-full object-cover rounded-tl-2xl rounded-tr-2xl"
            ></img>
          </div>
          
          <div className="p-4">
            <p className="text-sm">{title}</p>
            <a className="float-right p-2 mb-4" target="_blank" href={link}>Live demo </a>
          </div>
        </div>

      </div>
                        

    </div>
  );
};

export default Card;
