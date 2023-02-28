import React, { useEffect, useState } from 'react';
import MyBreadcrumb from '@layout/Breadcrumbs';
import Title from '@shared/components/TitleComponent';
import { useLocation } from 'react-router';

export default function MyCustomTitle() {
  const location = useLocation();
  const [title, setTitle] = useState<string>();
  useEffect(() => {
    const paths = location.pathname.split('/').filter(p => p);

    paths.map(item => {
      //* find correlate path to title
      const curTitle = titles.find(title => title.path === paths[paths.length - 1]);
      console.log(curTitle);

      if (curTitle) {
        setTitle(curTitle.title);
      } else {
        setTitle('Home');
      }
    });
  }, [location.pathname]);

  return (
    <>
      <MyBreadcrumb />
      <Title>{title}</Title>
    </>
  );
}

const titles = [
  {
    path: 'setting',
    title: 'Cài đặt',
  },
  {
    path: 'authorization',
    title: 'Danh sách người dùng',
  },
  {
    path: 'configuration',
    title: 'Cài đặt cấu hình',
  },
  {
    path: 'contracts',
    title: 'Loại hợp đồng',
  },
  {
    path: 'song-info',
    title: 'Thông tin tác phẩm',
  },
  {
    path: 'cycle',
    title: 'Chu kì đối soát',
  },
  {
    path: 'income',
    title: 'Doanh Thu',
  },
  {
    path: 'revenue-report',
    title: 'Báo cáo doan thu',
  },
  {
    path: 'history',
    title: 'Lịch sử đối soát',
  },
  {
    path: 'populate',
    title: 'Phân phối doanh thu',
  },
  {
    path: 'help',
    title: 'Hỗ trợ',
  },
  {
    path: 'tutorial',
    title: 'Hướng dẫn sử dụng',
  },
  {
    path: 'download',
    title: 'Tải app',
  },
  {
    path: 'feedback',
    title: 'Feedback',
  },
  {
    path: 'manage',
    title: 'Quản lí',
  },
  {
    path: 'contract',
    title: 'Quản lí hợp đồng',
  },
  {
    path: 'devices',
    title: 'Quản lí thiết bị',
  },
  {
    path: 'franchise',
    title: 'Đơn vị ủy quyền',
  },
  {
    path: 'copyright',
    title: 'Đơn vị sử dụng',
  },

  {
    path: 'playlist',
    title: 'Playlist',
  },
  {
    path: 'calender',
    title: 'Lặp lịch phát',
  },
  {
    path: 'storage',
    title: 'Kho bản ghi',
  },
  {
    path: 'edit',
    title: 'Chỉnh sửa thông tin người dùng',
  },
  {
    path: 'add-user',
    title: 'Thêm người dùng mới',
  },
  {
    path: 'update',
    title: 'Cập nhật vai trò người dùng',
  },
  {
    path: 'add-role',
    title: 'Thêm vai trò người dùng',
  },
  {
    path: 'user-list',
    title: 'Danh sách người dùng',
  },
  {
    path: 'user-role',
    title: 'Vai trò người dùng trên hệ thống',
  },
  {
    path: 'edit-contract',
    title: 'Loại hợp đồng',
  },
  {
    path: 'edit-warning',
    title: 'Loại hợp đồng',
  },
  {
    path: 'download',
    title: 'Tải App',
  },
];
