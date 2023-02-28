import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation, useParams } from 'react-router-dom';
import './styles.scss';
import { log } from 'console';

interface IBreadcrumbItem {
  path: string;
  breadcrumbName: string;
  children?: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}

const breadcrumdNames: IBreadcrumbItem[] = [
  {
    path: 'setting',
    breadcrumbName: 'Cài đặt',
  },
  {
    path: 'authorization',
    breadcrumbName: 'Phân quyền người dùng',
  },
  {
    path: 'configuration',
    breadcrumbName: 'Cấu hình',
  },
  {
    path: 'contracts',
    breadcrumbName: 'Quản lí loại hợp đồng',
  },
  {
    path: 'song-info',
    breadcrumbName: 'Thông tin tác phẩm',
  },
  {
    path: 'cycle',
    breadcrumbName: 'Chu kì đối soát',
  },
  {
    path: 'income',
    breadcrumbName: 'Doanh Thu',
  },
  {
    path: 'revenue-report',
    breadcrumbName: 'Báo cáo doan thu',
  },
  {
    path: 'history',
    breadcrumbName: 'Lịch sử đối soát',
  },
  {
    path: 'populate',
    breadcrumbName: 'Phân phối doanh thu',
  },
  {
    path: 'help',
    breadcrumbName: 'Hỗ trợ',
  },
  {
    path: 'tutorial',
    breadcrumbName: 'Hướng dẫn sử dụng',
  },
  {
    path: 'feedback',
    breadcrumbName: 'Feedback',
  },
  {
    path: 'manage',
    breadcrumbName: 'Quản lí',
  },
  {
    path: 'contract',
    breadcrumbName: 'Quản lí hợp đồng',
  },
  {
    path: 'devices',
    breadcrumbName: 'Quản lí thiết bị',
  },
  {
    path: 'franchise',
    breadcrumbName: 'Đơn vị ủy quyền',
  },
  {
    path: 'copyright',
    breadcrumbName: 'Đơn vị sử dụng',
  },

  {
    path: 'playlist',
    breadcrumbName: 'Playlist',
  },
  {
    path: 'calender',
    breadcrumbName: 'Lặp lịch phát',
  },
  {
    path: 'storage',
    breadcrumbName: 'Kho bản ghi',
  },
  {
    path: 'edit',
    breadcrumbName: 'Chỉnh sửa',
  },
  {
    path: 'add-user',
    breadcrumbName: 'Thêm người dùng',
  },
  {
    path: 'add-role',
    breadcrumbName: 'Thêm vai trò',
  },
  {
    path: 'update',
    breadcrumbName: 'Cập nhật',
  },
  {
    path: 'help',
    breadcrumbName: 'Hỗ trợ',
  },
  {
    path: 'download',
    breadcrumbName: 'Tải app',
  },
];

const AVOID_BREAD = ['', 'user-list', 'user-role', 'edit-contract', 'edit-warning'];
const MyBreadcrumb: React.FC = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbItem[]>([]);

  useEffect(() => {
    const paths = location.pathname.split('/').filter(p => {
      return !AVOID_BREAD.includes(p);
    });

    let url = '/';
    const breadcrumbs = paths.map(path => {
      url += `${path}/`;

      const breadPiece = breadcrumdNames.find(name => name.path === path);

      if (breadPiece) {
        const { breadcrumbName } = breadPiece;
        return {
          path: url,
          breadcrumbName: breadcrumbName.charAt(0).toUpperCase() + breadcrumbName?.slice(1),
        };
      } else {
        return {
          path: '/',
          breadcrumbName: 'Home',
        };
      }
    });
    setBreadcrumbs(breadcrumbs);
  }, [location.pathname]);

  return (
    <Breadcrumb className="breadcrumb" separator=">">
      {breadcrumbs.map(breadcrumb => {
        if (breadcrumb === breadcrumbs[breadcrumbs.length - 1] || breadcrumb !== breadcrumbs[0]) {
          return (
            <Breadcrumb.Item key={breadcrumb.path}>
              <Link to={breadcrumb.path}>{breadcrumb.breadcrumbName}</Link>
            </Breadcrumb.Item>
          );
        } else {
          return (
            <Breadcrumb.Item key={breadcrumb.path}>{breadcrumb.breadcrumbName}</Breadcrumb.Item>
          );
        }
      })}
    </Breadcrumb>
  );
};

export default MyBreadcrumb;
