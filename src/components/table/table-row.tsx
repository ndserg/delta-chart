import { useState } from 'react';
import DaysChart from '../daysChart';

export type DayItem = {
  id: number | string,
  name: string,
  today: number,
  yesterday: number,
  selected_day: number,
};

type classes = {
  [key: string]: string
};

interface tableRowProps {
  dayData: DayItem,
  styles: classes,
}

const TableRow = ({ dayData, styles }: tableRowProps) => {
  const [showChart, setShowChart] = useState<boolean>(false);

  const handleRowClick = () => {
    setShowChart((prevState) => !prevState);
  };

  const { id, name, yesterday, today, selected_day } = dayData;
  const percentage = Math.round(100 - (yesterday / today) * 100);

  let todayColor = '';
  let selectedDayColor = '';

  switch(true) {
    case percentage > 0: 
    todayColor = '--green';
      break;
    case percentage < 0: 
    todayColor = '--red';
      break;
    default: 
    todayColor = '';
  }

  switch(true) {
    case selected_day < today: 
    selectedDayColor = '--green';
      break;
    case selected_day > today: 
    selectedDayColor = '--red';
      break;
    default: 
    selectedDayColor = '';
  }

  return (
    <>
      <tr className={styles['tbody_row']} data-row-id={id} onClick={handleRowClick}>
        <th className={styles['tbody-cell']}>
          {name}
        </th>
        <td className={`${styles['tbody-cell']} ${styles['tbody-cell--blue']}`}>
          {new Intl.NumberFormat("ru-RU").format(today)}
        </td>
        <td className={`${styles['tbody-cell']} ${styles['cell-yesterday']} ${todayColor && styles['cell-yesterday' + todayColor]}`}>
          {new Intl.NumberFormat("ru-RU").format(yesterday)}
        </td>
        <td className={`${styles['tbody-cell']} ${styles['cell-percentage']} ${todayColor && styles['cell-percentage' + todayColor]}`}>
          {percentage}%
        </td>
        <td className={`${styles['tbody-cell']} ${selectedDayColor && styles['tbody-cell' + selectedDayColor]}`}>
          {new Intl.NumberFormat("ru-RU").format(selected_day)}
        </td>
      </tr>
      {showChart &&
        <tr>
          <td colSpan={5}>
            <DaysChart dayData={[yesterday, today, selected_day]}/>
          </td>
        </tr>
      }
    </>
  );
}
 
export default TableRow;