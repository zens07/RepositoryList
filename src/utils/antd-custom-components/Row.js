import styled from "styled-components";
import { Row } from "antd";

export const RowFull = styled(Row)`
  .center-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image-rounded {
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 20px;
  }
`;

export const RowStyle = styled(Row)`
  margin: 10px 20px;
`;
