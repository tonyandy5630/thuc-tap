import MyCustomFormItem from '@shared/components/FormItemComponent';
import './styles.scss';
import { Form, Space } from 'antd';
import React, { useState } from 'react';
import MyCustomButton from '@shared/components/MyButtonComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FEEDBACK_SELECTIONS = [
  {
    value: 'account',
    label: 'Tài khoản',
  },
  {
    value: 'revenue',
    label: 'Quản lí doanh thu',
  },
  {
    value: 'copyright',
    label: 'Vấn đề bản quyền',
  },
  {
    value: 'other',
    label: 'Khác',
  },
];

export default function FeedbackPage() {
  const [initValue, setInitValue] = useState({ username: 'Test' });
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
      <div className="feed-back-page__container">
        <div className="feed-back-form__container">
          <Form layout="vertical" className="feed-back-form" initialValues={initValue}>
            <MyCustomFormItem label="Tên người dùng" name="username" />
            <MyCustomFormItem
              label="Bạn muốn được hỗ trợ vấn đề gì?"
              type="selection"
              selectOptions={FEEDBACK_SELECTIONS}
              name="feedback-problem"
              placeholder="Chọn vấn đề bạn cần được hỗ trợ"
            />
            <MyCustomFormItem
              label="Nội dung"
              type="text-area"
              name="reason"
              textAreaMinRow={10}
              placeholder="Nội dung"
            />
          </Form>
          <div className="button-group">
            <MyCustomButton
              action={() => {
                toast.success('Gửi feedback thành công', {
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
              type="filled"
            >
              Gửi
            </MyCustomButton>
          </div>
        </div>
      </div>
    </>
  );
}
