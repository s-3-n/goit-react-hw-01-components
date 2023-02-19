import {
  StatisticsSection,
  Title,
  StatList,
  StatItem,
  LabelSpan,
  PercentageSpan,
} from './Statistics.styled';
import { randomColor } from 'utils/randomColor.js';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id} style={{ backgroundColor: randomColor() }}>
              <LabelSpan>{label}</LabelSpan>
              <PercentageSpan>{percentage}%</PercentageSpan>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
