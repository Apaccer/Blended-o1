import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import styled from './Statistics.module.css';
const icons = [
  <FaRegThumbsUp key={0} />,
  <MdPeople key={1} />,
  <MdOutlineProductionQuantityLimits key={2} />,
  <GiTreeDoor key={3} />,
];
export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2 className={styled.title}>{title}</h2>}

      <ul className={styled.list}>
        {stats.map((stat, index) => {
          return (
            <StatisticsItem
              key={stat.id}
              title={stat.title}
              total={stat.total}
              icon={icons[index]}
            />
          );
        })}
      </ul>
    </>
  );
};
