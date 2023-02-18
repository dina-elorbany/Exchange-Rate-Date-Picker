import { FC, useState } from 'react';
import moment from 'moment';

import { CalendarPicker } from '../../components';
import './CalendarRange.scss';

import { CalendarRangeProps } from '../../shared/Types/Types';

const CalendarRange: FC<CalendarRangeProps> = ({
  setDate,
}: CalendarRangeProps) => {
  // SET NEXT STEP WITH TOGGLE ACTIVE CLASS
  const [activeCalendar, setActiveCalendar] = useState('start');

  // GET START DATE
  const getStartDate = (startDate: Date) => {
    setDate((prev: any) => {
      return {
        ...prev,
        startDate: moment(startDate).format('YYYY-MM-DD'),
      };
    });
  };

  // GET END DATE
  const getEndDate = (endDate: Date) => {
    setDate((prev: any) => {
      return {
        ...prev,
        endDate: moment(endDate).format('YYYY-MM-DD'),
      };
    });
  };

  return (
    <div className='calendar__range'>
      <CalendarPicker
        id='start'
        title='Start'
        active={activeCalendar}
        setActive={setActiveCalendar}
        getDate={getStartDate}
      />
      <CalendarPicker
        id='end'
        title='End'
        active={activeCalendar}
        setActive={setActiveCalendar}
        getDate={getEndDate}
      />
    </div>
  );
};

export default CalendarRange;
