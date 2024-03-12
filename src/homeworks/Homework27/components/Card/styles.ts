import styled from "@emotion/styled";


export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid black;

  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

export const MessageWrapper = styled.div`
  margin-top: 20px;
`;
