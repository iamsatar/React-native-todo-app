import styled from 'styled-components/native';

export const Container = styled.Pressable`
  background-color: #f8f8f8;
  width: 90%;
  height: 70px;
  margin: 10px auto;
  border-radius: 20px;
  display: flex;
  padding: 16px;
  elevation: 5;
  /* iOS shadow */
  shadow-color: rgba(0, 0, 0, 0.3);
  shadow-offset: 0px 20px;
  shadow-opacity: 0.9;
  shadow-radius: 50.84px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Radio = styled.View`
  background-color: #ee4b2b;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #ee4b2b;
  border-width: 2px;
`;

export const Todo = styled.Text`
  padding: 0px 16px;
  font-size: 16px;
`;
export const Checked = styled.Text`
  color: white;
  padding-bottom: 2px;
  padding-right: 2px;
`;
