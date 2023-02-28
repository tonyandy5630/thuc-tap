import { Space, Table, Typography } from 'antd';
import './style.scss';
import React, { useState } from 'react';
import MyCustomFloatButton from '@shared/components/FloatButton';
import { UilFileEditAlt, UilCalendarAlt } from '@iconscout/react-unicons';
import { useNavigate } from 'react-router';
import moment, { Moment } from 'moment';
const { Title } = Typography;

export interface ContractType {
  key: React.Key;
  type: string;
  revenue: string;
  applyDate?: Moment;
}

const data: ContractType[] = [
  {
    key: '1',
    type: 'Trọn gói',
    revenue: '20%',
    // applyDate: moment('2022-2-2'),
  },
  {
    key: '2',
    type: 'Giá trị bài hát/lượt phát',
    revenue: '20%',
    // applyDate: moment('2022-2-2'),
  },
];

export default function ContractPage() {
  const [warningDate, setWarningDate] = useState<number>(365);
  const navigate = useNavigate();

  function toEditContract() {
    navigate('edit-contract', { state: data });
  }

  function toEditWarning() {
    navigate('edit-warning', { state: warningDate });
  }

  const ICONS = [
    {
      icon: <UilFileEditAlt />,
      title: 'Chỉnh sửa loại hợp đồng',
      action: toEditContract,
    },
    {
      icon: <UilCalendarAlt />,
      title: 'Chỉnh sửa cảnh báo hết hạn',
      action: toEditWarning,
    },
  ];

  const column = [
    {
      title: 'STT',
      dataIndex: 'key',
    },
    {
      title: 'Loại hợp đồng',
      dataIndex: 'type',
    },
    {
      title: 'Doanh thu VCPCM/hợp đồng (Đơn vị: %)',
      dataIndex: 'revenue',
    },
  ];

  return (
    <>
      <MyCustomFloatButton icons={ICONS} />
      <Space direction="horizontal" style={{ width: '100%' }} align="start" size="middle">
        <Table
          dataSource={data}
          columns={column}
          className="table contract-table"
          style={{ margin: 'unset' }}
          pagination={false}
        />
        <Space className="contract-warning__container" align="start">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Title level={3} style={{ color: '#E5E5E5', fontWeight: 700 }}>
              Cảnh báo hết hạn khi khai thác tác phẩm
            </Title>
            <Space direction="horizontal">
              <Title level={5} style={{ color: '#E5E5E5' }}>
                Hợp đồng được cảnh báo trước thời gian hết hạn:
                <span style={{ color: 'white', marginLeft: '10px' }}>{`${warningDate} ngày`}</span>
              </Title>
            </Space>
          </Space>
        </Space>
      </Space>
    </>
  );
}
