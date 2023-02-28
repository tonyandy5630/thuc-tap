import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './styles.scss';
import { Input } from 'antd';

export default function InputBox() {
  return (
    <Input
      placeholder="Nhập tên người dùng"
      allowClear
      onPressEnter={() => {
        console.log();
      }}
      style={{ width: 325, height: '100%' }}
      className="input"
      addonAfter={<SearchOutlined />}
    />
  );
}
