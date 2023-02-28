import './styles.scss';
import { Button } from 'antd';
import React from 'react';

interface IButtonProps {
  children?: any;
  type?: ButtonType;
  action?: any;
}

export default function MyCustomButton({ children, type = 'default', action }: IButtonProps) {
  return (
    <Button className={`my-button ${type === undefined ? 'default' : type}`} onClick={action}>
      {children}
    </Button>
  );
}

export type ButtonType = 'filled' | 'default';
