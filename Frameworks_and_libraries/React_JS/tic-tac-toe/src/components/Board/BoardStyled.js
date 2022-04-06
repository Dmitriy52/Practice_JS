import styled from "styled-components";
const Columns = styled.div`
  display: grid;
  width: 102px;
  padding-left: 34px;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Rows = styled.div`
  display: grid;
  position: absolute;
  left: 30px;
  top: 45px;
  height: 102px;
  width: 10px;
  grid-template-rows: 1fr 1fr 1fr;
`;
const BoardWrapper = styled.div`
  position: absolute;
  left: 44px;
  border: 2px solid red;
`;
export { BoardWrapper, Columns, Rows };
