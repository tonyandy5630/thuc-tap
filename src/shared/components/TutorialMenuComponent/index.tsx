import './styles.scss';
import React, { useState } from 'react';
import { List, Typography } from 'antd';

const { Title } = Typography;

const MenuItems = [
  '1. Lorem ipsum dolor sit amet',
  '2. Consectetur adipiscing elit sed do',
  '3. Iusmod tempor incididunt ut labo',
  '4. Ut enim ad minim veniam',
  '5. Quis nostrud exercitation ullamco',
  '6. Excepteur sint occaecat cupidatats',
  '7. Sunt in culpa qui officiat',
  '8. Sed ut perspiciatis unde omnis iste',
];

const TutorialMenu: React.FC = () => {
  return (
    <List
      split={false}
      header={
        <Title level={2} className="header-tutorial-menu">
          Danh mục hướng dẫn
        </Title>
      }
      dataSource={MenuItems}
      renderItem={item => (
        <List.Item>
          <Title level={5} className="menu-item-tutorial">
            {item}
          </Title>
        </List.Item>
      )}
      className="menu-tutorial"
    />
  );
};

export default TutorialMenu;
