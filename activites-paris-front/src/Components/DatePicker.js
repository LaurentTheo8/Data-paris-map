import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css


export default function Example(onChanger) {
  const [date, setDate] = useState(new Date());

  const onChange = newdate =>{
    setDate(newdate);
    console.log(newdate.toISOString().split('T')[0])
    newdate.onChanger();
  }

  return (
    <>
    <DatePicker selected={date} onChange={(onChange)} dateFormat='dd-MM-yyyy'/>
    </>
  );
};