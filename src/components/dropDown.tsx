import React, { useState } from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Image from './image';
import Typo from './typo';

type Props = {
  itemList: string[];
  style?: any;
  placeholder: string;
  height?: number;
};

type RootProps = {
  height?: number;
};

const Root = styled.select<RootProps>`
  ${(props) => `height: ${props.height}rem;`}
  ${`border: solid 0.15rem ${color.light_warm_gray};`}
  border-radius: 0.5rem;
  cursor: pointer;
`;

const DropDown: React.FC<Props> = ({
  itemList,
  style,
  placeholder,
  height,
}) => {
  return (
    <div style={style}>
      <Root height={height}>
        <option value=''>{placeholder}</option>
        {itemList.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </Root>
    </div>
  );
};
export default DropDown;
