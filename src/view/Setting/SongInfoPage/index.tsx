import React, { useState } from 'react';
import './style.scss';
import { Typography } from 'antd';
import MyCustomFloatButton from '@shared/components/FloatButton';
import { useNavigate } from 'react-router';
import Table from './SongEditTable';
import TestTable from './SongEditTable/TestTable';
import { TableType } from '@shared/components/TableComponent/types';
const { Title } = Typography;

interface SongType {
  key: React.Key;
  genre: string;
  description: string;
}

const SONG_DATA: SongType[] = [
  {
    key: '1',
    genre: 'Pop',
    description:
      'Nhạc pop là một thể loại của nhạc đương đại và rất phổ biến trong làng nhạc đại chúng.',
  },
  {
    key: '2',
    genre: 'Bolero',
    description:
      'Quay về với một thời hoa bướm đầy mơ mộng khi nghe các tuyệt phẩm nhạc bolero trữ tình này.',
  },
  {
    key: '3',
    genre: 'Ballad',
    description:
      'Ballad là dòng nhạc nhẹ nhàng, trữ tình bắt nguồn từ dòng nhạc country và folk vì giai điệu chậm, thong thả. ',
  },
  {
    key: '4',
    genre: 'Lofi',
    description:
      'Lo-fi là một thể loại nhạc trong đó có chứa các yếu tố không hoàn hảo trong quá trình ghi âm và trình diễn.',
  },
  {
    key: '5',
    genre: 'Blues',
    description:
      'Nhạc Blues có nguồn gốc từ những điệu hát của miền tây Phi Châu được các nô lệ da đen mang sang Bắc Mỹ.',
  },
  {
    key: '6',
    genre: 'Country',
    description:
      'Nhạc đồng quê là một thể loại nhạc pha trộn truyền thống được tìm thấy phổ biến ở Mỹ và Canada',
  },
];

export default function SongInfoPage() {
  const [data, setData] = useState(SONG_DATA);
  const navigate = useNavigate();
  const [tableType, setTableType] = useState<TableType>('default');

  function getTableType(type: TableType) {
    setTableType(type);
  }

  const columns = [
    {
      title: 'STT',
      dataIndex: 'key',
      width: '10%',
    },
    {
      title: 'Tên thể loại',
      dataIndex: 'genre',
      width: '23%',
      editable: tableType === 'edit',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      width: '67%',
      editable: tableType === 'edit',
    },
  ];

  return (
    <>
      <Title
        level={4}
        style={{
          color: '#e5e5e5',
          fontFamily: 'Montserrat',
        }}
      >
        Thể loại tác phẩm
      </Title>
      <Table data={SONG_DATA} />
      {/* <TestTable /> */}
    </>
  );
}
