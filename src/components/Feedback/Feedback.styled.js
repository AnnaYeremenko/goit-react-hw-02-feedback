import styled from 'styled-components';

export const OptionFeedbackWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export const FeedbackButton = styled.button`
  display: inline-flex;
  align-items: center;
  font-family: inherit;
  font-size: 16px;
  text-transform: capitalize;
  text-align: center;
  border: 2px solid #2196f3;
  border-radius: 7px;
  background-color: #fff;
  padding: 15px;
  color: orange;
  cursor: pointer;
  
  :hover {
    background: aqua;
    color: navy;
  }
`;