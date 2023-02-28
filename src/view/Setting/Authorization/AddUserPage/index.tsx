import './styles.scss';
import React from 'react';
import { Form, Space } from 'antd';
import FormItem from '@shared/components/FormItemComponent';
import InputRow from '../EditUserPage/MyCustomRow';
import Button from '@shared/components/MyButtonComponent';
import { useNavigate } from 'react-router';

const ROLE_SELECTIONS = [
  { value: 'Group Admin', label: 'Group Admin' },
  { value: 'Super Admin', label: 'Super Admin' },
  { value: 'Sub-User', label: 'Sub-User' },
  { value: 'Content-Manager', label: 'Content-Manager' },
  { value: 'qc', label: 'QC' },
];

export default function EditUserPage() {
  const navigate = useNavigate();
  const handleCancelProfile = () => {
    navigate(-1);
  };

  const handleSaveProfile = () => {
    navigate(-1);
  };

  return (
    <div style={{ minHeight: '100%' }}>
      <div>
        <Form layout="vertical" style={{ marginBottom: '150px' }}>
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
