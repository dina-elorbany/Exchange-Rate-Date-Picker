import { FC } from 'react';
import { MdRestartAlt } from 'react-icons/md';
import moment from 'moment';

import './CurrencyTable.scss';

import { CurrencyTableProps } from '../../shared/Types/Types';

const CurrencyTable: FC<CurrencyTableProps> = ({
  data,
  setData,
}: CurrencyTableProps) => {
  const handleRestart = () => {
    setData({
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
  };

  return (
    <div className='currency__page'>
      <div className='currency__page--date'>
        {/* SHOW TODAY DATE */}
        <p className='currency__page--date-today'>
          <span className='today'>Today: </span>{' '}
          {moment(new Date()).format('DD MMM YYYY')}
        </p>

        {/* SHOW THE RANGE SELECTED */}
        <div className='currency__page--date-range'>
          <p className='currency__page--date-range-start'>
            {moment(data.start_date).format('DD/MM/YYYY')}
          </p>
          <span className='range-hyphen'>-</span>
          <p className='currency__page--date-range-end'>
            {moment(data.end_date).format('DD/MM/YYYY')}
          </p>
        </div>
      </div>

      {/* SHOW TABLE OF RESULTS */}
      <table className='currency__page--table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>EGP</th>
            <th>CAD</th>
          </tr>
        </thead>

        {/* IN A SPECIFIC DATE-FORMAT AND WITH A ROUNDED CURRENCY-EXCHANGE TO ONLY 2 DECIMALS */}
        <tbody>
          {Object.keys(data.rates).map(el => {
            if (Object.keys(data.rates[el]).length !== 0) {
              return (
                <tr key={el}>
                  <td>{moment(el).format('DD/MM/YYYY')}</td>
                  <td>{data.rates[el].EGP.toFixed(2)}</td>
                  <td>{data.rates[el].CAD.toFixed(2)}</td>
                </tr>
              );
            } else {
              return '';
            }
          })}
        </tbody>
      </table>

      {/* ICON FOR THE RESTART BUTTON */}
      <button
        className='float-btn currency__page--restart-btn'
        onClick={handleRestart}
      >
        <MdRestartAlt />
      </button>
    </div>
  );
};

export default CurrencyTable;
