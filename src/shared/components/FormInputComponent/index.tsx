import './styles.scss';
import React from 'react';
import { Input, DatePicker, Select, Radio, Space } from 'antd';

interface IInputProps {
  type?: InputType;
  selectOptions?: any;
  radioOptions?: {
    options: Array<{ value: number | string | boolean; label: number | string }>;
  };
}

export default function MyCustomFormInput({ type, selectOptions, radioOptions }: IInputProps) {
  switch (type) {
    case 'normal':
      return <Input className="input" />;
    case 'password':
      return <Input.Password className="password" />;
    case 'date':
      return <DatePicker className="date-picker" />;
    case 'selection':
      return <Select options={selectOptions} className="selection" />;
    case 'radio':
      return (
        <Radio.Group>
          <Space direction="horizontal" size="large" className="space">
            {radioOptions?.options.map(item => (
              <Radio key={item.label}>{item.label}</Radio>
            ))}
          </Space>
        </Radio.Group>
      );
    default:
      return <Input className="input" name="fullname" />;
  }
}

export type InputType = 'normal' | 'password' | 'date' | 'selection' | 'radio';
