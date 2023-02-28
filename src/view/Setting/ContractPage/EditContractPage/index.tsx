import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { DatePicker, Input, Space, Table } from 'antd';
import type { ContractType } from '..';
import { UilPlus, UilTrashAlt } from '@iconscout/react-unicons';
import moment, { Moment } from 'moment';
import MyCustomFloatButton from '@shared/components/FloatButton';
import MyCustomButton from '@shared/components/MyButtonComponent';

export default function EditContractPage() {
  const location = useLocation();
  const { state: data } = location;
  const [count, setCount] = useState<number>(2);
  const [dataSource, setDataSource] = useState(data);

  const column = [
    {
      title: 'STT',
      dataIndex: 'key',
      width: '5%',
    },
    {
      title: 'Loại hợp đồng',
      dataIndex: 'type',
      width: '10%',
      render: (_: any, record: ContractType) => {
        return <Input className="input" style={{ color: 'white' }} defaultValue={record.type} />;
      },
    },
    {
      title: 'Doanh thu VCPCM/hợp đồng (Đơn vị: %)',
      dataIndex: 'revenue',
      width: '10%',
      render: (_: any, record: ContractType) => {
        return (
          <div style={{ width: '30%' }}>
            <Input className="input" style={{ color: 'white' }} defaultValue={record.revenue} />
          </div>
        );
      },
    },
    {
      title: 'Ngày áp dụng',
      dataIndex: 'applyDate',
      width: '10%',
      render: (_: any, record: ContractType) => {
        return (
          <Input
            className="input"
            style={{ color: 'white' }}
            defaultValue={new Date().toString()}
          />
        );
      },
    },
  ];

  const ICONS = [
    {
      icon: <UilPlus />,
      title: 'Thêm lich áp dụng',
      action: handleAddButton,
    },
    {
      icon: <UilTrashAlt />,
      title: 'Xóa',
    },
  ];

  function handleAddButton() {
    const newDataFirst: ContractType = {
      key: (count + 1).toString(),
      type: 'Trọn gói',
      revenue: '20%',
      applyDate: moment('2022-2-2'),
    };
    const newDataSecond: ContractType = {
      key: (count + 2).toString(),
      type: 'Giá trị bài hát',
      revenue: '0%',
      applyDate: moment('2022-2-2'),
    };

    setDataSource([...dataSource, newDataFirst, newDataSecond]);
  }
  return (
    <>
      <MyCustomFloatButton icons={ICONS} />
      <Table
        dataSource={dataSource}
        style={{ width: '90%' }}
        columns={column}
        className="table contract-table"
      />
      <div className="button-group">
        <Space direction="horizontal">
          <MyCustomButton>Hủy</MyCustomButton>
          <MyCustomButton type="filled">Lưu</MyCustomButton>
        </Space>
      </div>
    </>
  );
}
