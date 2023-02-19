import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px #c6cccced;
`;

export const Title = styled.h2`
  color: #82909e;
`;

export const StatList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  width: 100%;
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 60px;
  width: 100%;
  gap: 5px;
`;

export const LabelSpan = styled.span`
  color: #ffffff;
`;

export const PercentageSpan = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;
