import React from 'react';
import styled from 'styled-components';
// import styles from './styles.module.scss';

interface Props {
  id?: string;
  htmlFor?: string;
  children?: React.ReactNode;
}

const Lable = styled.label<Props>`
  display: flex;
  flex-direction: column;
  font: 800 12px/15px Inter;
  letter-spacing: 2.5px;
  text-transform: capitalize;
  color: #adadad;
`;

export const Label = ({ htmlFor, id, children }: Props) => {
  return (
    <>
      {
        <Lable id={id} htmlFor={htmlFor}>
          {children}
        </Lable>
      }
    </>
  );
};
