import React from 'react';
import styled from 'styled-components';
import { color } from '../../Constants';

interface Props {
  children: React.ReactNode;
  bgColor?: color;
  color?: string;
  type?: string;
  form?: string;
  disabled?: boolean;
}

const StyleButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 16px;
  font: 700 18px/36px Inter, sans-serif;
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
    if (props.disabled) {
      return '#808080';
    } else {
      if (props.bgColor === 'primary') {
        return '#7db59a';
      } else if (props.bgColor === 'secondary') {
        return 'transparent';
      }
      return '#e84393';
    }
  }};
  cursor: ${(props) => {
    if (!props.disabled) {
      return 'pointer';
    }
    return 'default';
  }};

  &: hover {
    color: ${(props) => {
      if (props.color === 'secondary') {
        return '#7DB59A';
      }
      return '#fff';
    }};
    background-color: ${(props) => {
      if (props.disabled) {
        return '#808080';
      } else {
        if (props.bgColor === 'primary') {
          return '#5B9479';
        } else if (props.bgColor === 'secondary') {
          return 'transparent';
        }
        return '#B03671';
      }
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
      if (props.disabled) {
        return '#808080';
      } else {
        if (props.bgColor === 'primary') {
          return '#4F896C';
        } else if (props.bgColor === 'secondary') {
          return 'transparent';
        }
        return '#832552';
      }
    }};
  }
`;

export const Button = (props: Props) => {
  const { bgColor, children, color, disabled } = props;
  return (
    <StyleButton color={color} bgColor={bgColor} disabled={disabled}>
      {children}
    </StyleButton>
  );
};
