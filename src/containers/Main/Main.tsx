import { useEffect, useState } from 'react';
import axios from 'axios';

import { CalendarRange, CurrencyTable } from '../../components';
import './Main.scss';
import { start } from 'repl';
import { toast } from 'react-toastify';

const Main = () => {
  const [date, setDate] = useState({
    startDate: '',
    endDate: '',
  });

  const [data, setData] = useState({
    motd: {
      msg: '',
      url: '',
    },
    success: false,
    timeseries: false,
    base: '',
    start_date: '',
    end_date: '',
    rates: {},
  });

  // GET EXCHANGE-RATE
  const getCurrencyRate = async () => {
    const { startDate, endDate } = date;

    // CHECK IF BOTH ARE SELCETED
    if (startDate && endDate) {
      // *CALL API ONLY IF THE DATE RANGE DATE IS VALID
      if (startDate < endDate) {
        const res = await axios.get(
          `https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}`
        );
        setData(res.data);

        // !SHOW ALERT IF THE DATE RANGE IS NOT VALID
      } else if (startDate > endDate) {
        setDate({ startDate: '', endDate: '' });
        toast.error('Range is not valid!');
      }
    }
  };

  useEffect(() => {
    getCurrencyRate();
  }, [setDate, date]);

  return (
    <div className='main'>
      {/* TOGGLE BETWEEN CALNEDAR DATE RANGE AND THE RESULTS OF CURRENCY EXCHANGE */}
      {data.success ? (
        <CurrencyTable data={data} setData={setData} />
      ) : (
        <CalendarRange setDate={setDate} />
      )}
    </div>
  );
};

export default Main;
