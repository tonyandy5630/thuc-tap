import { Switch } from 'antd';
import React, { useState } from 'react';
import './styles.scss';

interface ISwitchProps {
  isActive: boolean;
}

export default function ActiveSwitch({ isActive }: ISwitchProps) {
  const [isActivate, setIsActivate] = useState(isActive);
  const handleSwitchChange = () => {
    setIsActivate(prev => !prev);
  };

  return (
    <>
      <Switch checked={isActivate} onChange={handleSwitchChange} className="switch" />
      <span style={{ margin: '0 3px' }}>{isActivate ? 'Đang kích hoạt' : 'Ngừng kích hoạt'}</span>
    </>
  );
}
