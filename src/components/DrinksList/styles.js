import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  padding-top: 10px;
`;

export const DrinkContainer = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    background-color: #dee2e6;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin: 10px;
    border-radius: 10px;
  }

  img,
  span {
    padding: 10px;
  }

  img {
    width: 145px;
    height: 300px;
  }

  button {
    background-color: #6c757d;
    color: #fff;
    border: 1px solid transparent;
    height: 25px;
    width: 160px;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  button:hover {
    background-color: #fff;
    color: #6c757d;
    border: 1px solid #6c757d;
  }
`;
