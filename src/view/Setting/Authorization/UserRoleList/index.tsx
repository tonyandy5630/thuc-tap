import '../UserList/styles.scss';
import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

interface IUserRole {
  key: React.Key;
  groupName: string;
  memberQuantity: number;
  role: string;
  description: string;
}

const data: IUserRole[] = [
  {
    key: 1,
    groupName: 'Super Admin',
    memberQuantity: 3,
    role: 'System Admin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    key: 2,
    groupName: 'Super Admin',
    memberQuantity: 10,
    role: 'System Admin',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    key: 3,
    groupName: 'Content Manager',
    memberQuantity: 20,
    role: 'Licenses',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function UserRoleList() {
  return (
    <div>
      <Table
        tableLayout="auto"
        columns={columns}
        dataSource={data}
        className="table"
        size="middle"
      />
    </div>
  );
}

const columns: ColumnsType<IUserRole> = [
  {
    title: 'STT',
    dataIndex: 'key',
    width: '5%',
  },
  {
    title: 'Tên nhóm người dùng',
    dataIndex: 'groupName',
    width: '10%',
  },
  {
    title: 'Số lượng người dùng',
    dataIndex: 'memberQuantity',
    width: '10%',
  },
  {
    title: 'Vai trò',
    dataIndex: 'role',
    width: '10%',
  },
  {
    title: 'Mô tả',
    dataIndex: 'description',
    width: '35%',
  },
  {
    title: '',
    render: (_: any, record: IUserRole) => {
      return (
        <Link to="update" style={{ textDecoration: 'underline', color: '#FF7506' }} state={record}>
          Cập nhật
        </Link>
      );
    },
    width: '5%',
  },
];
