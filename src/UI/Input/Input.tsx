import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../Components/SvgIcons/Icons';
import { colorInput } from '../../Constants';
import styles from './styles.module.scss';

interface Props {
  type?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  bgColor?: colorInput;
  icon?: string;
  waringMessage?: string;
  warning?: boolean;
}

const StyleInput = styled.input<Props>`
  background: #f0f0f0;
  border-radius: 16px;
  opacity: 0.24;
  border: 1px solid #f0f0f0;
  width: 100%;
  heigth: 100%;
  font: 400 18px/32px sans-serif;
  letter-spacing: 0.6px;
  padding: 7px 16px;
  color: #2d3436;
  &::-webkit-input-placeholder {
    color: #adadad;
  }
  &::-moz-placeholder {
    color: #adadad;
  }
  &:-moz-placeholder {
    color: #adadad;
  }
  &:-ms-input-placeholder {
    color: #adadad;
  }
  &:focus {
    opacity: 1;
    color: #2d3436;
    background: #f0e0c4;
  }
`;
const WarningMessage = styled.div<Props>`
  margin-top: 6px;
  color: red;
`;

export const Input = (props: Props) => {
  const { placeholder, waringMessage, warning, icon } = props;
  return (
    <>
      {warning ? (
        <div className={styles.textFiled}>
          <StyleInput placeholder={placeholder}></StyleInput>
          {icon && <Icon iconName={icon} />}
          {waringMessage && <WarningMessage>{waringMessage}</WarningMessage>}
        </div>
      ) : (
        <div className={styles.textFiled}>
          <StyleInput placeholder={placeholder}></StyleInput>
          {icon && <Icon iconName={icon} />}
        </div>
      )}
    </>
  );
};
