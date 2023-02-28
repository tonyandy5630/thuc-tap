import React from 'react';
import './styles.scss';

interface IRowProps {
  children?: any;
}

export default function SingleRowForm({ children }: IRowProps) {
  return <div className="my-row">{children}</div>;
}
