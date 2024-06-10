import React from "react";
import dayjs from "dayjs";
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from "antd";

interface SheduleCardProps {
  menu: {
    title: string;
    date: string;
    startTime: string;
    endTime: string;
    teacherName: string;
  }[];
}

const shortMonths = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ]

const SheduleCard: React.FC<SheduleCardProps> = ({ menu }) => {
  return (
    <div className="border border-[#7362BC] rounded-3xl text-[#323854] h-[372px] pt-7 pb-7 pl-7 pr-2">
      <h3 className="text-2xl">Ближайшие уроки</h3>
      <ul className="h-[200px] overflow-y-auto balance_card-menu overflow-x-hidden">
        {menu.map((e) => (
          <li className="grid justify-between items-center border-b py-5" style={{gridTemplateColumns: "40px 185px 65px 140px 155px"}} >
            <div className="text-center" >
              <p className="text-3xl" >{dayjs(e.date).format("D")}</p>
              <p className="text-xs" >{shortMonths[+dayjs(e.date).format("M")-1]}</p>
            </div>
            <div className="text-base" >{e.title}</div>
            <div className="text-xs" >
              {e.startTime}-{e.endTime}
            </div>
            <div className="flex flex-row items-center text-xs font-normal text-[#323854] gap-0.5" >
              <FaRegUserCircle className="" /> <span>{e.teacherName}</span>
            </div>
            <div className="flex flex-row items-center gap-1" >
              <Button className="rounded-full" type="default">
                Button
              </Button>
              <Button className="rounded-full" type="primary">
                Button
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <button className="bg-[#DECFFF] w-[288px] duration-300 hover:bg-primary h-10 rounded-full mt-9">
          Button
        </button>
      </div>
    </div>
  );
};

export default SheduleCard;
