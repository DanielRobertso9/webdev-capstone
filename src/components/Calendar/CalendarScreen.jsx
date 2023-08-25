import { Fragment } from "react";
import React from "react";
import MyCalendar from "./MyCalendar";
import AddEvent from "./AddEvent";
import Events from "./Events";

const CalendarScreen = () => {
  return (
    <Fragment>
      <AddEvent />
      <MyCalendar allEvents={Events} />
    </Fragment>
  );
};

export default CalendarScreen;
