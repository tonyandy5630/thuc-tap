import React from 'react';
import './styles.scss';
import { Radio, RadioChangeEvent } from 'antd';

const USER_LIST = 'user-list';
const USER_ROLE = 'user-role';

interface ITabsProps {
  onListChange: (params: string) => void;
}
function Tabs({ onListChange }: ITabsProps) {
  const handleListChange = (e: RadioChangeEvent) => {
    onListChange(e.target.value);
  };

  return (
    <>
      <Radio.Group
        defaultValue="user-list"
        buttonStyle="solid"
        size="middle"
        onChange={handleListChange}
        className="radio-group"
      >
        <Radio.Button value={USER_LIST} className="tab">
          Danh sách người dùng
        </Radio.Button>
        <Radio.Button value={USER_ROLE} className="tab">
          Vai trò người dùng
        </Radio.Button>
      </Radio.Group>
    </>
  );
}

export default Tabs;
