import { Button, Modal, Select } from "antd";
import React from "react";
import { lesson } from "../../api/fakeData";
import CalendarAntdOne from "../../components/calendars/CalendarAntd/CalendarAntdOne";
import CalendarReactBig from "../../components/calendars/CalendarReactBig/CalendarReactBig";
import moment from "moment";
import CustomCalendarOne from "../../components/calendars/CustomCalendar/CustomCalendarOne";
import { EventC } from "../../types/appTypes";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getShedule } from "../../api/scheduleApi";
import { setModalDateAC } from "../../store/scheduleSlice";
import AddSchedule from "../../components/forms/schedule/AddSchedule";
interface Event {
  id: number;
  title: string;
  start: any;
  end: any;
  allDay?: boolean;
  resource?: any;
  desc?: any;
}

const data: Event[] = [
  {
    id: 1,
    title: "Long Event",
    start: "2024-06-06T19:00:00.000Z",
    end: "2024-06-09T19:00:00.000Z",
  },
  {
    id: 2,
    title: "DTS STARTS",
    start: "2024-03-12T19:00:00.000Z",
    end: "2024-03-19T19:00:00.000Z",
  },
  {
    id: 3,
    title: "DTS ENDS",
    start: "2024-11-05T19:00:00.000Z",
    end: "2024-11-12T19:00:00.000Z",
  },
];


const dataC: EventC[] = [
  {
    id: 1,
    date: "2024-06-05",
    events: [
      {
        color: "lightgreen",
        title: "География",
        startTime: "13:00",
        endTime: "14:00",
        paid: true,
        closed: false,
      },
    ],
  },
  {
    id: 2,
    date: "2024-06-08",
    events: [
      {
        color: "lightgreen",
        title: "География",
        startTime: "13:00",
        endTime: "14:00",
        paid: true,
        closed: true,
      },
    ],
  },
];

const SchedulePage = () => {
  const {isFetching, err, schedule, modalDate} = useAppSelector(state=>state.scheduleSlice);
  const {userInfo} = useAppSelector(state=>state.usersSlice);
  const dispatch = useAppDispatch();

  React.useEffect(()=>{
    dispatch(getShedule(userInfo?.id))
  }, [])

  const onClick = (
  ) => {
    dispatch(setModalDateAC(true));
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>
          <Select placeholder="Выбрать предмет">
            {lesson.map((l) => (
              <Select.Option>{l.title}</Select.Option>
            ))}
          </Select>
        </div>
        <div>
          <Button type="primary" onClick={onClick}>
            Изменить расписание
          </Button>
        </div>
      </div>
      <div className="my-10">
        <CalendarAntdOne data={schedule} />
        {/* <CalendarReactBig data={data} /> */}
        {/* <CustomCalendarOne data={dataC} /> */}
      </div>

      <Modal
        open={modalDate}
        onCancel={() => dispatch(setModalDateAC(false))}
        footer={null}
      >
        <AddSchedule />
      </Modal>
    </div>
  );
};

export default SchedulePage;
