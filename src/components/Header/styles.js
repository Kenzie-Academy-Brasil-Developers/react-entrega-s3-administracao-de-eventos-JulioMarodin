import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
  background-color: #dee2e6;
  height: 70px;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;

  button {
    background-color: #6c757d;
    color: #fff;
    border: 2px solid transparent;
    height: 25px;
    width: 110px;
    border-radius: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-top: 3px;
  }

  button:hover {
    border: 2px solid #fff;
  }

  a {
    color: #fff;
  }
`;
