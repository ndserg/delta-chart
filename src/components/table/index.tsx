import TableRow, { DayItem } from "./table-row";
import styles from "./index.module.scss";

interface TableDaysProps {
  data: DayItem[]
}

const Table = ({ data }: TableDaysProps) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles['thead-cell']}>Показатель</th>
            <th className={`${styles['thead-cell']} ${styles['thead-cell--blue']}`}>Текущий день</th>
            <th className={styles['thead-cell']} colSpan={2}>Вчера</th>
            <th className={styles['thead-cell']}>Этот день недели</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map((item) =>
            <TableRow
              key={item.id}
              dayData={item}
              styles={styles}
            />
          )}
        </tbody>
      </table>
    </>
  );
}
 
export default Table;