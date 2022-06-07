import React from 'react';
import styled from 'styled-components';
import { color } from '../../Constants';

interface Props {
  children: string;
  bgColor?: color;
  color?: string;
  type?: string;
  form?: string;
}

const StyleButton = styled.button<Props>`
  padding: 8px 16px;
  border-radius: 16px;
  font: 700 18px/36px 'Inter';
  letter-spacing: 0.25px;
  border: 1px solid #adadad;
  box-sizing: border-box;
  color: ${(props) => {
    if (props.color === 'secondary') {
      return '#858585';
    }
    return '#fff';
  }};
  background-color: ${(props) => {
    if (props.bgColor === 'primary') {
      return '#7db59a';
    } else if (props.bgColor === 'secondary') {
      return 'transparent';
    }
    return '#e84393';
  }};

  &: hover {
    color: ${(props) => {
      if (props.color === 'secondary') {
        return '#7DB59A';
      }
      return '#fff';
    }};
    background-color: ${(props) => {
      if (props.bgColor === 'primary') {
        return '#5B9479';
      } else if (props.bgColor === 'secondary') {
        return 'transparent';
      }
      return '#B03671';
    }};
  }

  &: active {
    color: ${(props) => {
      if (props.color === 'secondary') {
        return '#4F896C';
      }
      return '#fff';
    }};
    background-color: ${(props) => {
      if (props.bgColor === 'primary') {
        return '#4F896C';
      } else if (props.bgColor === 'secondary') {
        return 'transparent';
      }
      return '#832552';
    }};
  }
`;

export const Button = (props: Props) => {
  const { bgColor, children, color } = props;
  return (
    <StyleButton color={color} bgColor={bgColor}>
      {children}
    </StyleButton>
  );
};
