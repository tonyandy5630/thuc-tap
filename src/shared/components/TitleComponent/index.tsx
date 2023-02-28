import './styles.scss';
import React from 'react';
import { Typography } from 'antd';

interface ITitleProps {
  children?: any;
}

const { Title } = Typography;

export default function MyCustomTitle({ children }: ITitleProps) {
  return <Title className="title">{children}</Title>;
}
