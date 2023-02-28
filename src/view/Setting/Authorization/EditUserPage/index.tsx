import './styles.scss';
import React, { useState } from 'react';
import FloatButton from '@shared/components/FloatButton';
import { UilUserTimes } from '@iconscout/react-unicons';
import { UilKeySkeletonAlt } from '@iconscout/react-unicons';
import { Form, Space } from 'antd';
import FormItem from '@shared/components/FormItemComponent';
import InputRow from './MyCustomRow';
import Button from '@shared/components/MyButtonComponent';
import { useLocation, useNavigate } from 'react-router';
import moment from 'moment';

const FLOAT_ICONS = [
  {
    icon: <UilUserTimes />,
    title: 'Xóa người dùng',
  },
  {
    icon: <UilKeySkeletonAlt />,
    title: 'Khôi phục mật khẩu',
  },
];

const ROLE_SELECTIONS = [
  { value: 'Group Admin', label: 'Group Admin' },
  { value: 'Super Admin', label: 'Super Admin' },
  { value: 'Sub-User', label: 'Sub-User' },
  { value: 'Content-Manager', label: 'Content-Manager' },
  { value: 'qc', label: 'QC' },
];

const ACTIVITY_OPTIONS = [
  {
    label: 'Đang hoạt động',
    value: true,
  },
  {
    label: 'Ngừng hoạt động',
    value: false,
  },
];

export default function EditUserPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleCancelProfile = () => {
    navigate(-1);
  };

  const handleSaveProfile = () => {
    navigate(-1);
  };

  const [initalValues, setInitalValues] = useState({
    fullname: state.fullname,
    email: state.email,
    isActive: state.isActive,
    phone: state.phone,
    role: state.role,
    username: state.username,
    dueDate: moment(state.dueDate),
    pwd: '123456789',
  });

  return (
    <div style={{ minHeight: '100%' }}>
      <FloatButton icons={FLOAT_ICONS} />
      <div>
        <Form layout="vertical" style={{ marginBottom: '150px' }} initialValues={initalValues}>
          <InputRow>
            <FormItem
              label="Tên người dùng"
              name="fullname"
              rules={[{ required: true, message: 'Hãy nhập tên người dùng' }]}
            />
            <FormItem label="Email" name="email" />
          </InputRow>
          <InputRow>
            <FormItem label="Số điện thoại:" name="phone" />
            <FormItem
              label="Tên đăng nhập"
              name="username"
              rules={[{ required: true, message: 'Hãy nhập tên đăng nhập' }]}
            />
          </InputRow>
          <InputRow>
            <FormItem label="Ngày hết hạn" name="dueDate" type="date" />
            <FormItem
              label="Mật khẩu"
              name="pwd"
              rules={[{ required: true, message: 'Hãy nhập mật khẩu' }]}
              type="password"
            />
          </InputRow>
          <InputRow>
            <FormItem
              label="Vai trò"
              name="role"
              rules={[{ required: true, message: 'Hãy chọn vai trò' }]}
              type="selection"
              selectOptions={ROLE_SELECTIONS}
            />
            <FormItem
              label="Trạng thái"
              name="isActive"
              rules={[{ required: true, message: 'Hãy chọn vai trò' }]}
              type="radio"
              radioOptions={{ options: ACTIVITY_OPTIONS }}
            />
          </InputRow>
        </Form>
        <div className="button-group">
          <Space direction="horizontal">
            <Button action={handleCancelProfile}>Hủy</Button>
            <Button type="filled" action={handleSaveProfile}>
              Lưu
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
}
