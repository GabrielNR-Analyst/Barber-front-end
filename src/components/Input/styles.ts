// export const Container = styled.div.attrs<ContainerProps>(({ $isFocused }) => ({
//   className: $isFocused ? 'focused' : '',
// }))<ContainerProps>`

import styled from "styled-components";
// import { Tooltip } from '../Tooltip';

// interface ContainerProps {
//   $isFocused: boolean,
// 	$isField: boolean,
//   $isErroded: boolean
// }

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  width: 100%;
  padding: 16px;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  &.focused {
    color: #ff9000;
    border-color: #ff9000;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

