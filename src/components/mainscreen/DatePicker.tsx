import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// interface DateTimePickerProps {
//   dateLabel: string;
// }

// {dateLabel}: DateTimePickerProps

export const DatePicker = () => {
  const [value, onChange] = useState(new Date());

  const showValue = () => {
    console.log( value );
  }

  return (
    <div>
      <Calendar 
        onChange={onChange} 
        value={value} 
        onClickDay={ showValue }
      />
    </div>
  );
}
