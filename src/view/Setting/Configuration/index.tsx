import './styles.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Carousel, Button, Image, Space, Typography, Form, Select } from 'antd';
import { UilAngleLeftB, UilAngleRight } from '@iconscout/react-unicons';
import { CarouselRef } from 'antd/es/carousel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Title } = Typography;

const IMG_THEMES = [
  'https://wallpaperaccess.com/full/3662969.jpg',
  'https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408.jpg',
  'https://www.travelandleisure.com/thmb/f3czr668tvSLpwHM0C_ggHo-F1E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/red-pink-orange-purple-sunset-WHYCOLORS1220-7684b47c858b4e1e9d73018e213c7ff3.jpg',
];

const ConfigPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(IMG_THEMES[0]);
  const carRef = useRef<CarouselRef>(null);

  const handlePrevClick = (): void => {
    carRef.current?.prev();
    setCurrentSlide(currentSlide - 1);
  };

  const handleNextClick = (): void => {
    setCurrentSlide(prev => {
      carRef.current?.next();
      if (currentSlide === IMG_THEMES.length - 1) {
      }
      return currentSlide + 1;
    });
  };

  const themes = IMG_THEMES.map((item, index) => (
    <Space direction="vertical" style={{ width: '30%' }} align="center" key={item}>
      <Image
        width="100%"
        onClick={() => {
          setCurrentTheme(item);
          toast.success(' Đổi theme thành công', {
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
        preview={false}
        height="100%"
        src={item}
        className="theme-pic"
      />
      <Title level={5} style={{ textAlign: 'center', color: 'white' }}>{`Theme ${
        index + 2
      }`}</Title>
    </Space>
  ));

  return (
    <>
      <div className="theme-selection__container">
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
        <Space direction="vertical" style={{ width: '30%' }} align="center">
          <Image height="100%" width="100%" src={currentTheme} className="theme" preview={false} />
          <Title level={5} style={{ textAlign: 'center', color: 'white' }}>
            Theme 1
          </Title>
        </Space>
        <div className="theme-carousel__container">
          {themes}
          <div className="theme-button next">
            <Button shape="circle" icon={<UilAngleRight />} />
          </div>
          <div className="theme-button prev">
            <Button shape="circle" icon={<UilAngleLeftB />} />
          </div>
        </div>
      </div>
      <Space direction="horizontal" style={{ margin: '3rem 0' }}>
        <Form.Item label="Ngôn ngữ hiển thị">
          <Select
            defaultValue="vn"
            className="select"
            dropdownStyle={{ background: '#3E3E5B', color: 'white !important' }}
            options={[
              {
                value: 'vn',
                label: 'Tiếng Việt',
                className: 'select-option',
              },
              {
                value: 'en',
                label: 'Tiếng Anh',
                className: 'select-option',
              },
            ]}
          />
        </Form.Item>
      </Space>
    </>
  );
};

export default ConfigPage;
