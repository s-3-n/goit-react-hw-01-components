import styled from 'styled-components';

export const Table = styled.table`
  margin: 0px;
  width: 100%;
  box-shadow: 0 0 10px #c6cccced;
`;
export const Thead = styled.thead`
  background-color: #00bcd5;
`;
export const Row = styled.tr`
  :nth-child(2n) {
    background-color: #dcdcdc;
  }
`;
export const TableData = styled.td`
  padding: 15px;
  height: 50px;
  width: 50px;
  color: #82909e;
`;
export const TableHeader = styled.th`
  color: #ffffff;
`;
export const TableBody = styled.tbody``;
