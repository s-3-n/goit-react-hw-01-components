import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  box-shadow: 0 5px 10px #c6cccced;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isActive ? '#00ff00' : '#ff0000';
  }};
`;

export const Avatar = styled.img`
  border-radius: 25%;
`;

export const Name = styled.p`
  font-weight: bold;
`;
