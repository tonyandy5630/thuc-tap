import React, { useState } from 'react';
import './styles.scss';
import { Link, Path } from 'react-router-dom';

type ItemProps = {
  itemIcon?: React.ReactNode;
  itemName?: String;
  activeKey?: String;
  to?: any;
};

export default function MenuItem({ itemIcon, itemName, activeKey, to: path }: ItemProps) {
  const [select, setSelect] = useState(false);

  const handleSelectMenuItem = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (activeKey === itemName) {
      setSelect(true);
    } else {
      setSelect(false);
    }
  };

  return (
    <Link to={path} className={'item-container'} onClick={handleSelectMenuItem}>
      <span className={select ? 'indicator active' : 'indicator'}></span>
      <div className="item-icon">{itemIcon}</div>
      <div className="item-name">{itemName}</div>
    </Link>
  );
}
