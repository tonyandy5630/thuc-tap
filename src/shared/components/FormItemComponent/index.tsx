import './styles.scss';
import { Form } from 'antd';
import React from 'react';
import { Input, DatePicker, Select, Radio, Space } from 'antd';

interface IFromItemProps {
  label: string;
  name: string;
  rules?: any;
  type?: InputType;
  selectOptions?: Array<{ value: any; label: any }>;
  radioOptions?: {
    defaultValue?: any;
    options: Array<{ value: number | string | boolean; label: number | string }>;
  };
  width?: number;
  textAreaMinRow?: number;
  textAreaMaxRow?: number;
  placeholder?: string;
}

export default function MyCustomFormItem({
  label,
  name,
  rules,
  type,
  selectOptions,
  radioOptions,
  width,
  textAreaMinRow = 3,
  textAreaMaxRow = 5,
  placeholder,
}: IFromItemProps) {
  return (
    <Form.Item label={label} name={name} rules={rules} className="form-item">
      {(() => {
        switch (type) {
          case 'normal':
            return (
              <Input className="input" style={{ width: `${width}px` }} placeholder={placeholder} />
            );
          case 'password':
            return <Input.Password className="password" placeholder={placeholder} />;
          case 'date':
            return <DatePicker className="date-picker" />;
          case 'selection':
            return (
              <Select options={selectOptions} className="selection" placeholder={placeholder} />
            );
          case 'radio':
            return (
              <Radio.Group>
                <Space direction="horizontal" size="large" className="space">
                  {radioOptions?.options.map(item => (
                    <Radio key={item.label} value={item.value}>
                      {item.label}
                    </Radio>
                  ))}
                </Space>
              </Radio.Group>
            );
          case 'text-area':
            const { TextArea } = Input;
            return (
              <TextArea
                className="text-area"
                autoSize={{ minRows: textAreaMinRow, maxRows: textAreaMaxRow }}
                placeholder={placeholder}
                style={{ width: `${width}px` }}
              />
            );
          default:
            return <Input className="input" style={{ width: `${width}px` }} />;
        }
      })()}
    </Form.Item>
  );
}

export type InputType = 'normal' | 'password' | 'date' | 'selection' | 'radio' | 'text-area';
