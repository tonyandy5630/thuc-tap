import { Form, Radio, Space, Typography } from 'antd';
import './styles.scss';
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import MyCustomFormItem from '@shared/components/FormItemComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyCustomButton from '@shared/components/MyButtonComponent';

const QUARTER = ['01/06 - 30/07', '01/08 - 30/09', '01/10 - 30/11', '01/12 - 31/12'];
const { Title, Text } = Typography;

export default function CyclePage() {
  const [cycle, setCycle] = useState('quarter');

  const quaters = QUARTER.map((item, index) => {
    return (
      <div className="quarter-container">
        <Text strong className="quarter-text">{`Quý ${index + 1}:`}</Text>
        <Text className="quarter-text">{item}</Text>
      </div>
    );
  });

  const onCycleChange = (e: RadioChangeEvent) => {
    setCycle(e.target.value);
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="cycle-container">
        <div className="cycle-content">
          <Title level={3} style={{ color: '#E5E5E5', fontWeight: 700, marginBottom: '2rem' }}>
            Cài đặt chu kì đối soát
          </Title>
          <Radio.Group defaultValue={cycle} onChange={onCycleChange}>
            <Space direction="vertical">
              <Radio value="quarter">Đối soát theo quý</Radio>
              <Space direction="vertical" style={{ margin: '8px 10px', minWidth: '140px' }}>
                {cycle === 'quarter' ? quaters : <></>}
              </Space>
              <Radio value="month">Đối soát theo tháng</Radio>
              {cycle === 'month' ? (
                <Form className="month-date-picker__container" layout="horizontal">
                  <Space direction="horizontal" style={{ width: '100%' }}>
                    <div style={{ width: '70%' }}>
                      <MyCustomFormItem label="Ngày bắt đầu" name="startDate" type="date" />
                    </div>
                    <div style={{ width: '70%' }}>
                      <MyCustomFormItem label="Ngày kết thúc" name="endDate" type="date" />
                    </div>
                  </Space>
                </Form>
              ) : (
                <></>
              )}
            </Space>
          </Radio.Group>
        </div>
      </div>
      <div className="button-group">
        <MyCustomButton
          type="filled"
          action={() => {
            toast.success('Lưu cài đặt chu kỳ đối soát thành công', {
              position: 'bottom-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          }}
        >
          Lưu
        </MyCustomButton>
      </div>
    </>
  );
}
