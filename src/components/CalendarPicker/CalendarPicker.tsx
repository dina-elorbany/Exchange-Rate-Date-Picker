import { FC, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './CalendarPicker.scss';
import '../Calendar/Calendar.scss';

import { CalendarPickerProps } from '../../shared/Types/Types';

const CalendarPicker: FC<CalendarPickerProps> = ({
  id,
  title,
  getDate,
  active,
  setActive,
}: CalendarPickerProps) => {
  const [date, setDate] = useState(new Date());

  return (
    <div className='calendar__picker'>
      <div
        // ADD ACTIVE CLASS DINAMICALLY USING TERNARY-OPERATOR
        className={`calendar__picker--title ${active === id ? 'active' : ''}`}
        id={id}
      >
        {/* DYNAMIC TITLE (START || END) UPON ID */}
        {title}
      </div>

      <Calendar
        onChange={(e: any) => {
          setDate(e);
        }}
        onClickDay={e => {
          getDate(e);

          // USE SETTIMEOUT TO CHANGE ACTIVE CLASS AFTER A WHILE SINCE THE USER CLICKED A DAY
          setTimeout(() => {
            if (id === 'start') {
              setActive('end');
            }
            if (id === 'end') {
              setActive('start');
            }
          }, 500);
        }}
        value={date}
      />
    </div>
  );
};

export default CalendarPicker;
