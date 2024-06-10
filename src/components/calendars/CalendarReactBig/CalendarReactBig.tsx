import { Calendar, dayjsLocalizer, momentLocalizer } from "react-big-calendar";
// import dayjs from "dayjs";
import "./CalendarReactBig.scss";
import moment from "moment";

// const localizer = dayjsLocalizer(moment);
const localizer = momentLocalizer(moment)

const CalendarReactBig = ({ data }: any) => (
  <div>
    <Calendar
      localizer={localizer}
      events={data}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default CalendarReactBig;
