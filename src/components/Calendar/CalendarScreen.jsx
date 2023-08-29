import { Fragment } from "react";
import React from "react";
import MyCalendar from "./MyCalendar";
import AddEvent from "./AddEvent";

const CalendarScreen = () => {
  return (
    <Fragment>
      <AddEvent />
      <MyCalendar/>
    </Fragment>
  );
};

export default CalendarScreen;
