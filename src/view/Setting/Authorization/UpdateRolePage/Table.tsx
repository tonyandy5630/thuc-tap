import React from 'react';
import './styles.scss';
import { Table, Checkbox, Space, Typography, Form } from 'antd';
import { useState } from 'react';

interface DataItem {
  key: string;
  name?: string;
  selected?: boolean;
  func?: string;
  code: string;
}

const rows: DataItem[] = [
  {
    key: '1',
    name: 'Quản lí người dùng',
    func: 'Phân quyền người dùng',
    code: 'nguoidung_phanquyen',
  },
  {
    key: '2',
    func: 'Tạo người dùng',
    code: 'nguoidung_tao',
  },
  {
    key: '3',
    func: 'Cập nhật thông tin người dùng',
    code: 'nguoidung_capnhat',
  },
  {
    key: '4',
    func: 'Xóa người dùng',
    code: 'nguoidung_xoa',
  },
  {
    key: '5',
    func: 'Xem thông tin chi tiết',
    code: 'nguoidung_xemchitiet',
  },
  {
    key: '6',
    name: 'Quản lí thư viện',
    func: 'Danh sách Media',
    code: 'nguoidung_xemdanhsach',
  },
  {
    key: '7',
    func: 'Tải lên Media',
    code: 'nguoidung_tailentep',
  },
  {
    key: '8',
    func: 'Chỉnh sửa thông tin Media',
    code: 'nguoidung_chinhsua',
  },
  {
    key: '9',
    func: 'Xóa Media',
    code: 'nguoidung_xoa',
  },
  {
    key: '10',
    func: 'Phê duyệt Media',
    code: 'nguoidung_pheduyet',
  },
];

const rowClassName = (record: any, index: number) => {
  return index % 5 === 0 ? 'table-row-group' : '';
};

const MyComponent: React.FC = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [data, setData] = useState(rows);

  const onHeaderCheckboxChange = (e: any) => {
    const { checked } = e.target;
    const newData = data.map(item => ({ ...item, selected: checked }));
    setData(newData);
    setAllChecked(checked);
  };

  const onCheckboxChange = (e: any, index: number) => {
    const { checked } = e.target;
    const newData = [...data];
    newData[index].selected = checked;
    setData(newData);
    setAllChecked(newData.every(item => item.selected));
  };

  const columns = [
    {
      title: 'Tên nhóm chức năng',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: DataItem, index: number) => {
        const rowSpan = index % 5 === 0 ? 5 : 0;
        return {
          children: <span>{text}</span>,
          props: {
            rowSpan: rowSpan,
          },
        };
      },
    },
    {
      title: <Checkbox checked={allChecked} onChange={onHeaderCheckboxChange} />,
      dataIndex: 'selected',
      key: 'selected',
      render: (checked: boolean, record: DataItem, index: number) => (
        <Checkbox checked={checked} onChange={e => onCheckboxChange(e, index)} />
      ),
    },
    {
      title: 'Chức năng',
      dataIndex: 'func',
      key: 'func',
    },
    {
      title: 'Mã chức năng',
      dataIndex: 'code',
      key: 'code',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowClassName={rowClassName}
      pagination={false}
      size="small"
      className="table update-role-table"
      style={{ minWidth: '800px', marginTop: 0 }}
    />
  );
};

export default MyComponent;
