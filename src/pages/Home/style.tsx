import styled from 'styled-components/native';

export const PageContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Header = styled.View`
  height: 200px;
  background-color: rgba(231, 244, 199, 1);
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 0 20px 30px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-size: 23px;
  font-family: 'GT-Walsheim-Regular';
  color: #131313;
`;
