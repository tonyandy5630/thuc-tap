import './styles.scss';
import React, { useState } from 'react';
import { Table } from 'antd';
import MyCustomSwitch from './ActiveSwitch';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Link } from 'react-router-dom';

interface UserType {
  key: React.Key;
  id: number;
  fullname: string;
  username: string;
  role: string;
  isActive: boolean;
  email: string;
  phone: string;
  dueDate: string;
}

const onEditUser = (record: UserType, rowIndex: number) => {
  return;
};

const columns: ColumnsType<UserType> = [
  {
    title: 'STT',
    dataIndex: 'id',
  },
  {
    title: 'Họ Tên',
    dataIndex: 'fullname',
  },
  {
    title: 'Tên đăng nhập',
    dataIndex: 'username',
  },
  {
    title: 'Vai trò',
    dataIndex: 'role',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'isActive',
    render: (isActive: boolean, record: UserType) => <MyCustomSwitch isActive={isActive} />,
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
  },
  {
    title: 'Ngày hết hạn',
    dataIndex: 'dueDate',
  },
  {
    title: '',
    render: (_: any, record: UserType) => (
      <Link style={{ textDecoration: 'underline', color: '#FF7506' }} to="edit" state={record}>
        Chỉnh sửa
      </Link>
    ),
  },
];

export default function UserList() {
  const [tableData, setTableData] = useState(data);

  const paginationConfig = {
    pageSize: 12,
  };

  return (
    <Table
      tableLayout="auto"
      columns={columns}
      dataSource={data}
      className="table"
      size="middle"
      pagination={paginationConfig}
    />
  );
}

const getDateOfYear = (toDate: string): string => {
  const newDate = new Date(toDate);
  const date = newDate.getDate().toString();
  const month = newDate.getMonth().toString();
  const year = newDate.getFullYear().toString();
  return date.concat('/').concat(month).concat('/').concat(year);
};

const data: UserType[] = [
  {
    key: '1',
    id: 1,
    fullname: 'Bui Thanh Tu',
    username: 'tonyandy76',
    role: 'Group Admin',
    isActive: true,
    email: 'tonyandy456@gmail.com',
    phone: '0769640460',
    dueDate: getDateOfYear('2019-3-2'),
  },
  {
    key: '2',
    id: 2,
    fullname: 'Huynh Xuan Mai',
    username: 'maimai',
    role: 'Super Admin',
    isActive: true,
    email: 'xmai123@gmail.com',
    phone: '0941531231',
    dueDate: getDateOfYear('2019-3-2'),
  },
  {
    key: '3',
    id: 3,
    fullname: 'Ta Van Hien',
    username: 'Hienhien',
    role: 'License',
    isActive: false,
    email: 'hienhien@gmail.com',
    phone: '0769643460',
    dueDate: getDateOfYear('2019-3-2'),
  },
  {
    key: '4',
    id: 4,
    fullname: 'Bui The Hien',
    username: 'hinhhinh',
    role: 'License',
    isActive: true,
    email: 'hien@gmail.com',
    phone: '0762640460',
    dueDate: getDateOfYear('2019-3-2'),
  },
  {
    key: '5',
    id: 5,
    fullname: 'Nguyen Ha Thien',
    username: 'thienthien',
    role: 'License',
    isActive: true,
    email: 'Thien@gmail.com',
    phone: '0759640460',
    dueDate: getDateOfYear('2019-3-2'),
  },
  {
    key: '6',
    id: 6,
    fullname: 'Nguyen Ha Thien',
    username: 'thienthien',
    role: 'License',
    isActive: true,
    email: 'Thien@gmail.com',
    phone: '0759640460',
    dueDate: getDateOfYear('2019-3-2'),
  },
  {
    key: '7',
    id: 7,
    fullname: 'Nguyen Ha Thien',
    username: 'thienthien',
    role: 'License',
    isActive: true,
    email: 'Thien@gmail.com',
    phone: '0759640460',
    dueDate: getDateOfYear('2019-3-2'),
  },
  {
    key: '8',
    id: 8,
    fullname: 'Nguyen Ha Thien',
    username: 'thienthien',
    role: 'License',
    isActive: true,
    email: 'Thien@gmail.com',
    phone: '0759640460',
    dueDate: getDateOfYear('2019-3-2'),
  },
  {
    key: '9',
    id: 9,
    fullname: 'Nguyen Ha Thien',
    username: 'thienthien',
    role: 'License',
    isActive: true,
    email: 'Thien@gmail.com',
    phone: '0759640460',
    dueDate: getDateOfYear('2019-3-2'),
  },
  {
    key: '10',
    id: 10,
    fullname: 'Nguyen Ha Thien',
    username: 'thienthien',
    role: 'License',
    isActive: true,
    email: 'Thien@gmail.com',
    phone: '0759640460',
    dueDate: getDateOfYear('2019-3-2'),
  },
  {
    key: '11',
    id: 11,
    fullname: 'Nguyen Ha Thien',
    username: 'thienthien',
    role: 'License',
    isActive: true,
    email: 'Thien@gmail.com',
    phone: '0759640460',
    dueDate: getDateOfYear('2019-3-2'),
  },
  {
    key: '12',
    id: 12,
    fullname: 'Nguyen Ha Thien',
    username: 'thienthien',
    role: 'License',
    isActive: true,
    email: 'Thien@gmail.com',
    phone: '0759640460',
    dueDate: getDateOfYear('2019-3-2'),
  },
];
