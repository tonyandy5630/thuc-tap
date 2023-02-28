import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const TableInput: React.FC = () => {
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '0',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '1',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
  ]);
  const [count, setCount] = useState<number>(2);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: DataType) => (
        <Input
          value={text}
          onChange={e => {
            const newData = [...dataSource];
            const index = newData.findIndex(item => record.key === item.key);
            const item = newData[index];
            newData.splice(index, 1, {
              ...item,
              name: e.target.value,
            });
            setDataSource(newData);
          }}
        />
      ),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: (text: number, record: DataType) => (
        <Input
          value={text}
          onChange={e => {
            const newData = [...dataSource];
            const index = newData.findIndex(item => record.key === item.key);
            const item = newData[index];
            newData.splice(index, 1, {
              ...item,
              age: parseInt(e.target.value, 10),
            });
            setDataSource(newData);
          }}
        />
      ),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (text: string, record: DataType) => (
        <Input
          value={text}
          onChange={e => {
            const newData = [...dataSource];
            const index = newData.findIndex(item => record.key === item.key);
            const item = newData[index];
            newData.splice(index, 1, {
              ...item,
              address: e.target.value,
            });
            setDataSource(newData);
          }}
        />
      ),
    },
  ];

  const handleAdd = () => {
    const newData: DataType = {
      key: count.toString(),
      name: '',
      age: 0,
      address: '',
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = () => {
    console.log('New data:', dataSource);
    // You can modify this code to send the data to a backend API or perform any other action you'd like.
  };

  return (
    <>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button>
      <Table dataSource={dataSource} columns={columns} />
      <Button onClick={handleSave} type="primary">
        Save
      </Button>
    </>
  );
};

export default TableInput;
