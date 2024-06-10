import { Button } from "antd";
import React from "react";
import { EventC } from "../../../types/appTypes";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import moment from "moment";

import { IoWalletOutline } from "react-icons/io5";

const weeks: { id: number; title: string }[] = [
  {
    id: 0,
    title: "Пн",
  },
  {
    id: 1,
    title: "Вт",
  },
  {
    id: 2,
    title: "Ср",
  },
  {
    id: 3,
    title: "Чт",
  },
  {
    id: 4,
    title: "Пт",
  },
  {
    id: 5,
    title: "Сб",
  },
  {
    id: 6,
    title: "Вс",
  },
];

const month: {
  id: number;
  date: any;
  month: string;
  day: string;
  weekId: number;
}[] = [
  {
    id: 1,
    date: "2024-05-27",
    day: "27",
    month: "05",
    weekId: 0,
  },
  {
    id: 2,
    date: "2024-05-28",
    day: "27",
    month: "05",
    weekId: 0,
  },
  {
    id: 3,
    date: "2024-05-29",
    day: "27",
    month: "05",
    weekId: 0,
  },
  {
    id: 4,
    date: "2024-05-27",
    day: "27",
    month: "05",
    weekId: 0,
  },
  {
    id: 5,
    date: "2024-05-27",
    day: "27",
    month: "05",
    weekId: 0,
  },
];

function monthGenerate(m: any) {
  const monthmy: {
    id: number;
    date: any;
    month: any;
    day: any;
    weekId: number;
  }[] = [];

  const d: {
    id: number;
    date: any;
    month: string;
    day: string;
    weekId: number;
  } = {
    id: 0,
    date: "",
    day: "",
    month: "",
    weekId: 0,
  };

  for (let i = 0; i < 42; i++) {
    let dd = moment("2024-05-27").add("day", i);
    let a = {
      id: i + 1,
      date: dd.format("YYYY-MM-DD"),
      day: dd.format("DD"),
      month: dd.format("MM"),
      weekId: 0,
    };

    monthmy.push(a);
  }

  return monthmy;
}

const Badge = ({endTime,paid,startTime,title}:{title: string; startTime: string;endTime:string, paid: boolean})=>{
  return <div className="flex flex-row" >
    <div>
      <div>{startTime}-{endTime}</div>
      <div>{title}</div>
    </div>
    <div>{paid&&<IoWalletOutline color="#E12828" />}</div>
  </div> 
}

const CustomCalendarOne = ({ data }: { data: EventC[]|undefined }) => {
  console.log("month", month);
  console.log("data", data);
  // console.log("my", monthGenerate(monthmy));

  return (
    <div>
      <div>
        <div>
          <button>
            <FaArrowLeftLong />
          </button>
          <span>{"june"}</span>
          <button>
            <FaArrowRightLong />
          </button>
        </div>
        <div>
          <Button type="default">Сегодня</Button>
        </div>
      </div>

      <div className="my-calendar">
        <div className="my_calendar-header border-b grid grid-cols-7">
          {weeks.map((w) => (
            <div className="text-end py-1 px-2" key={w.title}>
              {w.title}
            </div>
          ))}
        </div>
        <div className="my_calendar-body grid grid-cols-7">
          {monthGenerate("2024-05-27").map((d) => (
            <div className="border p-2 text-xs h-[101px]">
              <div className="text-end" >{d.day}-{d.month}</div>
              <div>
                {data?.map(e=> e.date == d.date ? e.events.map(el=> (<Badge title={el.title} startTime={el.startTime} paid={el.paid} endTime={el.endTime} />)):"" )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCalendarOne;
