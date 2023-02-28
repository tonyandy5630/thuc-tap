import { Input, Space, Typography } from 'antd';
import React from 'react';
import { useLocation } from 'react-router';

const { Title } = Typography;

export default function EditWarningDate() {
  const location = useLocation();
  const { state: data } = location;
  return (
    <Space
      direction="vertical"
      className="contract-warning__container"
      style={{ width: 'fit-content', minHeight: 'unset' }}
    >
      <Title level={4} className="contract-title">
        Cảnh báo hết hạn khai thác tác phẩm
      </Title>
      <Space direction="horizontal" style={{ width: '90%' }} className="contract-warning-space">
        <Title level={5} className="contract-title">
          Hợp đồng được cảnh báo trước thời gian hết hạn:
          <div className="contract-date-input__container">
            <Input className="input contract-date" defaultValue={data} />
            <span className="contract-title">ngày</span>
          </div>
        </Title>
      </Space>
    </Space>
  );
}
