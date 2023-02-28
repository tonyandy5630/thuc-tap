import { Form, Space } from 'antd';
import './styles.scss';
import React, { useState } from 'react';
import Table from './Table';
import MyCustomFormItem from '@shared/components/FormItemComponent';
import { useLocation, useNavigate } from 'react-router';
import MyCustomButton from '@shared/components/MyButtonComponent';

export default function UpdateRolePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [initialState, setInitialState] = useState(state);

  const handleCancelProfile = () => {
    navigate(-1);
  };

  const handleSaveProfile = () => {
    navigate(-1);
  };
  return (
    <Space direction="vertical" className="update-page-container" style={{ width: '100%' }}>
      <Space
        direction="horizontal"
        className="update-area-container"
        style={{ width: '100%' }}
        id="finding"
        align="center"
      >
        <Form layout="vertical" style={{ width: '100%' }} initialValues={initialState}>
          <Space
            direction="horizontal"
            align="start"
            style={{ width: '100%', justifyContent: 'space-between' }}
          >
            <Space direction="vertical" style={{ width: '100%' }}>
              <MyCustomFormItem label="Tên vai trò" name="role" width={380} />
              <MyCustomFormItem label="Mô tả" name="description" type="text-area" width={380} />
            </Space>
            <Space direction="vertical">
              <Form.Item label="Phân quyền chức năng" name="roles">
                <Table />
              </Form.Item>
            </Space>
          </Space>
        </Form>
      </Space>
      <div className="button-group">
        <Space direction="horizontal">
          <MyCustomButton action={handleCancelProfile}>Hủy</MyCustomButton>
          <MyCustomButton type="filled" action={handleSaveProfile}>
            Lưu
          </MyCustomButton>
        </Space>
      </div>
    </Space>
  );
}
