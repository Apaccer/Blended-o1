import style from './ForbesList.module.css';
import { ForbesListItem } from '../ForbesListItem/ForbesListItem';
export const ForbesList = ({ forbes }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {forbes.map(forbe => {
          return (
            <li key={forbe.id} className={style.item}>
              <ForbesListItem
                avatar={forbe.avatar}
                name={forbe.name}
                capital={forbe.capital}
                isIncrease={forbe.isIncrease}
              />{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
