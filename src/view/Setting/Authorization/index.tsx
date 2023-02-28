import './styles.scss';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import SearchInput from '@shared/components/InputComponent';
import Tabs from './Tabs';
import UserList from './UserList';
import FloatButton from '@shared/components/FloatButton';
import UserRoleList from './UserRoleList';
import Title from '@shared/components/TitleComponent';

//* Icons
import { UilUserPlus } from '@iconscout/react-unicons';
import { UilUsersAlt } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const USER_LIST = 'user-list';
const USER_ROLE = 'user-role';

const USER_LIST_TITLE = 'Danh sách người dùng';
const USER_ROLE_TITLE = 'Vai trò người dùng trong hệ thống';

const ADD_USER_ICON = [
  {
    icon: (<UilUserPlus />) as React.ReactNode,
    title: 'Thêm người dùng',
  },
];

const ADD_ROLE_ICON = [
  {
    icon: (<UilUsersAlt />) as React.ReactNode,
    title: 'Thêm vai trò',
  },
];

export default function AuthorizationPage() {
  const [list, setList] = useState<string>(USER_LIST);
  const navigate = useNavigate();

  const onListChange = (listType: string) => {
    setList(listType);
    navigate(`/setting/authorization/${listType}`);
  };

  return (
    <>
      {list === USER_LIST ? (
        <Link to="add-user">
          <FloatButton icons={ADD_USER_ICON} />
        </Link>
      ) : (
        <Link to="add-role">
          <FloatButton icons={ADD_ROLE_ICON} />
        </Link>
      )}
      <div className="page-container">
        <div className="flex-container">
          <Tabs onListChange={onListChange} />
          <SearchInput />
        </div>
        {list === USER_LIST ? <UserList /> : <UserRoleList />}
      </div>
    </>
  );
}
