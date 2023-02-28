import './style.scss';
import React from 'react';
import { FloatButton, Avatar as IconContainer } from 'antd';
import { Link } from 'react-router-dom';

export interface IFloatBtnProps {
  icons: Array<{ icon: React.ReactNode; title: string; action?: any }>;
  action?: any;
}

export default function MyCustomFloatButton({ icons }: IFloatBtnProps) {
  const iconArray = icons.map(icon => (
    <FloatButton
      className="single-float-button"
      key={icon.title}
      icon={<IconContainer size={40} icon={icon.icon} className="icon-container" />}
      onClick={icon.action}
      description={icon.title}
      shape="square"
    />
  ));

  if (icons.length > 1) {
    return (
      <FloatButton.Group
        shape="square"
        style={{ position: 'fixed', right: 0 }}
        className="group-float-button__container"
      >
        {iconArray}
      </FloatButton.Group>
    );
  } else {
    return iconArray[0]; //* only item in array
  }
}
