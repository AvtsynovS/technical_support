import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../Components/SvgIcons/Icons';
import { colorInput } from '../../Constants';
import styles from './styles.module.scss';

interface Props {
  bgColor?: colorInput;
  placeholder?: string;
  label?: string;
  waringMessage?: string;
  warning?: boolean;
  icon?: string;
}

const StyleLable = styled.label<Props>`
  font: 800 12px/15px 'Inter';
  letter-spacing: 2.5px;
  text-transform: capitalize;
  color: #adadad;
  margin-bottom: 8px;
`;
const StyleInput = styled.input<Props>`
  flex: 1 0 auto;
  font: 400 18px/32px sans-serif;
  background: #f0f0f0;
  border-radius: 16px;
  padding: 8px 16px;
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
    background: #fdcb6e;
    border-radius: 12px;
    opacity: 0.4;
    box-sizing: border-box;
    border: 1px solid #fdcb6e;
  }
`;
const WarningMessage = styled.div<Props>`
  margin-top: 6px;
  color: red;
`;

export const Input = (props: Props) => {
  const { placeholder, label, waringMessage, warning, icon } = props;
  return (
    <>
      {label && <StyleLable>{label}</StyleLable>}
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
