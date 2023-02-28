import React from 'react';
import './styles.scss';
import {
  CalenderIcon,
  HelpIcon,
  IncomeIcon,
  ManageIcon,
  PlaylistIcon,
  PlaylistStorage,
  SettingIcon,
} from './MenuIcons/Icons';
import { Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    icon: <PlaylistStorage />,
    name: 'Kho bản ghi',
    to: '/storage/',
  },
  {
    icon: <PlaylistIcon />,
    name: 'Playlist',
    to: '/playlist/',
  },
  {
    icon: <CalenderIcon />,
    name: 'Lặp lịch phát',
    to: '/calender/',
  },
  {
    icon: <ManageIcon />,
    name: 'Quản lý',
    to: '/manage',
    submenu: [
      {
        title: 'Quản lí hợp đồng',
        to: 'contract',
      },
      {
        title: 'Quản Lí thiết bị',
        to: 'devices',
      },
      {
        title: 'Đơn vị ủy quyền',
        to: 'franchise',
      },
      {
        title: 'Đơn vị sử dụng',
        to: 'copyright',
      },
    ],
  },
  {
    icon: <IncomeIcon />,
    name: 'Doanh thu',
    to: '/income',
    submenu: [
      {
        title: 'Báo có doanh thu',
        to: 'revenue-report',
      },
      {
        title: 'Lịch sử đối soát',
        to: 'history',
      },
      {
        title: 'Phân phối doanh thu',
        to: 'populate',
      },
    ],
  },
  {
    icon: <SettingIcon />,
    name: 'Cài đặt',
    to: '/setting',
    submenu: [
      {
        to: 'authorization/user-list',
        title: 'Phần quyền người dùng',
      },
      {
        title: 'Cấu hình',
        to: 'configuration',
      },
      {
        title: 'Quản lí hợp đồng',
        to: 'contracts',
      },
      {
        title: 'Thông tin tác phẩm',
        to: 'song-info',
      },
      {
        title: 'Chu kỳ đối soát',
        to: 'cycle',
      },
    ],
  },
  {
    icon: <HelpIcon />,
    name: 'Hỗ trợ',
    to: '/help',
    submenu: [
      {
        title: 'Hướng dẫn tải app',
        to: 'tutorial',
      },
      {
        title: 'Tải app',
        to: 'download',
      },
      {
        title: 'Feedback',
        to: 'feedback',
      },
    ],
  },
];

const MenuBar: React.FC = () => {
  const items = menuItems.map(item => {
    if (item.submenu !== undefined) {
      return (
        <Menu.SubMenu
          key={item.name}
          title={item.name}
          icon={item.icon}
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
          className="submenu"
        >
          {item.submenu.map(subItem => (
            <Menu.Item key={subItem.to}>
              <Link to={`${item.to.concat('/').concat(subItem.to)}`}>{subItem.title}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.Item
          key={item.name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '170px',
            height: '72px',
            padding: 0,
            margin: 0,
            color: 'white',
          }}
          icon={item.icon}
          className="MenuItem"
        >
          {/* <CustomMenuItem itemName={item.name} activeKey={item.name} to={item.to} /> */}
          <Link to={item.to}>{item.name}</Link>
        </Menu.Item>
      );
    }
  });

  return (
    <div className="MenuBar__container">
      <a href="#" className="navbar-brand">
        <img src="../../shared/assets/images/logo.png" alt="Company's logo" />
      </a>
      <Menu defaultSelectedKeys={['1']} className="MenuBar">
        {items}
      </Menu>
    </div>
  );
};

export default MenuBar;
