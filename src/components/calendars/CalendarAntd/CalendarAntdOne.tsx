import React from "react";
import type { CalendarProps } from "antd";
import { Button, Calendar, Col, Modal, Row, Select } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { IoWalletOutline } from "react-icons/io5";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { EventC } from "../../../types/appTypes";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { addShedule } from "../../../api/scheduleApi";
import { setModalDateAC } from "../../../store/scheduleSlice";
import AddSchedule from "../../forms/schedule/AddSchedule";

const getListData = (value: Dayjs, data: any) => {
  // let listData;
  // switch (value.date()) {
  //   case 8:
  //     listData = [
  //       {
  //         id: 1,
  //         type: "warning",
  //         title: "This is warning event.",
  //         paid: false,
  //         startTime: "13:00",
  //         endTime: "14:25",
  //       },
  //       {
  //         id: 2,
  //         type: "success",
  //         title: "This is usual event.",
  //         paid: true,
  //         startTime: "13:00",
  //         endTime: "14:25",
  //       },
  //     ];
  //     break;
  //   case 10:
  //     listData = [
  //       {
  //         id: 3,
  //         type: "warning",
  //         title: "This is warning event.",
  //         paid: false,
  //         startTime: "13:00",
  //         endTime: "14:25",
  //       },
  //       {
  //         id: 4,
  //         type: "success",
  //         title: "This is usual event.",
  //         paid: false,
  //         startTime: "13:00",
  //         endTime: "14:25",
  //       },
  //       {
  //         id: 5,
  //         type: "error",
  //         title: "This is error event.",
  //         paid: false,
  //         startTime: "13:00",
  //         endTime: "14:25",
  //       },
  //     ];
  //     break;
  //   case 15:
  //     listData = [
  //       {
  //         id: 6,
  //         type: "warning",
  //         title: "This is warning event",
  //         paid: false,
  //         startTime: "13:00",
  //         endTime: "14:25",
  //       },
  //       {
  //         id: 7,
  //         type: "success",
  //         title: "This is very long usual event......",
  //         paid: false,
  //         startTime: "13:00",
  //         endTime: "14:25",
  //       },
  //       {
  //         id: 8,
  //         type: "error",
  //         title: "This is error event 1.",
  //         paid: false,
  //         startTime: "13:00",
  //         endTime: "14:25",
  //       },
  //       {
  //         id: 9,
  //         type: "error",
  //         title: "This is error event 2.",
  //         paid: false,
  //         startTime: "13:00",
  //         endTime: "14:25",
  //       },
  //       {
  //         id: 10,
  //         type: "error",
  //         title: "This is error event 3.",
  //         paid: false,
  //         startTime: "13:00",
  //         endTime: "14:25",
  //       },
  //       {
  //         id: 11,
  //         type: "error",
  //         title: "This is error event 4.",
  //         paid: false,
  //         startTime: "13:00",
  //         endTime: "14:25",
  //       },
  //     ];
  //     break;
  //   default:
  // }
  // console.log("dafdfaf", data);

  return data.events;
  // return
  // return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

interface CalendarAntdOneProps {
  data: EventC[];
}

const CalendarAntdOne: React.FC<CalendarAntdOneProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const { modalDate } = useAppSelector((state) => state.scheduleSlice);

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    if (
      data.find(
        (e: any) =>
          value.format("YYYY-MM-DD") === dayjs(e.date).format("YYYY-MM-DD")
      )
    ) {
      const listData = getListData(
        value,
        data.find(
          (e: any) =>
            value.format("YYYY-MM-DD") === dayjs(e.date).format("YYYY-MM-DD")
        )
      );
      // console.log("value---", value, "listData", listData, "data", data);

      return (
        <ul className="events">
          {listData.map((item: any) => (
            <li
              className="bg-[#D7F0D6] rounded border border-[#D7F0D6] my-1 p-1"
              key={item.id}
            >
              <div>
                <div className="text-xs mb-0.5 flex flex-row justify-between items-center">
                  <span>
                    {dayjs(item.startTime).format("HH:mm")}-
                    {dayjs(item.endTime).format("HH:mm")}
                  </span>
                  <div>{item.paid && <IoWalletOutline color="#E12828" />}</div>
                </div>
                <div className="text-[10px]">{item.title}</div>
              </div>
            </li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  // const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  //   console.log(value.format("YYYY-MM-DD"), mode);
  // };

  const onDateChange: CalendarProps<Dayjs>["onSelect"] = (
    value,
    selectInfo
  ) => {
    console.log("onDateChange", value, "\nselectInfo", selectInfo);

    dispatch(setModalDateAC(true));
  };

  return (
    <>
      <Calendar
        mode="month"
        locale={{
          lang: {
            locale: "ru_Ru",
            placeholder: "Select date",
            rangePlaceholder: ["Start date", "End date"],
            today: "Today",
            now: "Now",
            backToToday: "Back to today",
            ok: "OK",
            clear: "Clear",
            month: "Месяц",
            year: "Год",
            timeSelect: "Select time",
            dateSelect: "Select date",
            monthSelect: "Choose a month",
            yearSelect: "Choose a year",
            decadeSelect: "Choose a decade",
            yearFormat: "YYYY",
            dateFormat: "M/D/YYYY",
            dayFormat: "D",
            dateTimeFormat: "M/D/YYYY HH:mm:ss",
            monthFormat: "MMMM",
            monthBeforeYear: true,
            previousMonth: "Предыдущий месяц (PageUp)",
            nextMonth: "Следующий месяц (PageDown)",
            previousYear: "Предыдущий год (Control + left)",
            nextYear: "Следующий год (Control + right)",
            previousDecade: "Last decade",
            nextDecade: "Next decade",
            previousCentury: "Предыдущий век",
            nextCentury: "Следующий век",
            shortWeekDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            shortMonths: [
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
            ],
          },
          timePickerLocale: {
            placeholder: "Выбрать время",
          },
        }}
        cellRender={cellRender}
        onSelect={onDateChange}
        onChange={(a)=>{console.log(a)}}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];

          let current = value.clone();
          const months = [
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
          ];

          for (let i = start; i < end; i++) {
            monthOptions.push(
              <Select.Option key={i} value={i} className="month-item">
                {months[i]}
              </Select.Option>
            );
          }

          const year = value.year();
          const month = value.month();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className="year-item">
                {i}
              </Select.Option>
            );
          }
          return (
            <div style={{ padding: 8 }}>
              <Row gutter={8}>
                <Col>
                  <div className="flex flex-row items-center gap-4 mr-16">
                    <button
                      onClick={() => {
                        let c = month - 1;
                        const now = value.clone().month(c);
                        onChange(now);
                      }}
                      className="text-gray-500"
                    >
                      <FaArrowLeftLong />
                    </button>
                    <span className="text-base font-bold">{months[month]}</span>
                    <button
                      onClick={() => {
                        let c = month + 1;
                        const now = value.clone().month(c);
                        onChange(now);
                      }}
                      className="text-gray-500"
                    >
                      <FaArrowRightLong />
                    </button>
                  </div>
                </Col>
                <Col>
                  <Button
                    onClick={() => {
                      onChange(dayjs());
                    }}
                  >
                    Сегодня
                  </Button>
                </Col>
              </Row>
            </div>
          );
        }}
      />

      <Modal
        open={modalDate}
        onCancel={() => dispatch(setModalDateAC(false))}
        footer={null}
      >
        <AddSchedule />
      </Modal>
    </>
  );
};

export default CalendarAntdOne;
