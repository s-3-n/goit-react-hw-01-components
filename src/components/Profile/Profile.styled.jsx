import styled from 'styled-components';

export const ProfileBox = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px #c6cccced;
`;

export const DescriptionBox = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AvatarImg = styled.img`
  display: block;
  border-radius: 50%;
  background-color: aqua;
  height: 300px;
  margin-bottom: 15px;
`;

export const NameOfUser = styled.p`
  font-weight: bold;
  margin: 0px;
`;

export const TagOfUser = styled.p`
  margin: 0px;
  margin-top: 15px;
  color: #82909e;
`;

export const LocationOfUser = styled.p`
  margin: 15px 0px 25px 0px;
  color: #82909e;
`;

export const StatsOfUser = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  width: 100%;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    min-height: 50px;
    width: 100%;
    background-color: #f3f6f9;
    outline: solid 1px rgb(208, 204, 204);
  }
`;

export const LabelSpan = styled.span`
  color: #82909e;
`;

export const QuantitySpan = styled.span`
  font-weight: bold;
`;
