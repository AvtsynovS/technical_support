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
  font: 400 18px/22px 'Inter';
  background: #f0f0f0;
  border-radius: 16px;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  padding: 13px 40px 13px 16px;
  &::-webkit-input-placeholder {
    color: #000;
  }
  &::-moz-placeholder {
    color: #000;
  }
  &:-moz-placeholder {
    color: #000;
  }
  &:-ms-input-placeholder {
    color: #000;
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
      {warning ? (
        <div className={styles.container}>
          <StyleLable>{label}</StyleLable>
          <StyleInput placeholder={placeholder}></StyleInput>
          {waringMessage && <WarningMessage>{waringMessage}</WarningMessage>}
        </div>
      ) : (
        <div className={styles.container}>
          <StyleLable>{label}</StyleLable>
          <div className={styles.textFiled}>
            <StyleInput placeholder={placeholder}></StyleInput>
            {icon && <Icon iconName={icon} />}
          </div>
        </div>
      )}
    </>
  );
};
