import React, { useRef, useState } from 'react';
import { Form, Input, InputNumber, InputRef, Popconfirm, Space, Table, Typography } from 'antd';
import type { SongType, EditableCellProps, TableType, ContractType } from './types';
import type { IFloatBtnProps } from '@shared/components/FloatButton';
import MyCustomButton from '@shared/components/MyButtonComponent';
import { UilEdit, UilPlus } from '@iconscout/react-unicons';
import MyCustomFloatButton from '@shared/components/FloatButton';

interface ITableProps {
  data: any;
  columns: Array<{
    title: any;
    dataIndex: any;
    width: number | string;
    editable?: boolean;
  }>;
  editIcon?: Array<{ icon: React.ReactNode; title: string }>;
  addIcon?: { icon: React.ReactNode; title: string };
  dataType: SongType | ContractType;
  getTableType?: any;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input className="input" />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const SongInfoTable = ({ data, columns, getTableType, editIcon, addIcon }: ITableProps) => {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<SongType[]>(data);
  const [editingKey, setEditingKey] = useState('');
  const [count, setCount] = useState(6);
  const [tableType, setTableType] = useState<TableType>('default');
  const [editing, setEditing] = useState(false);

  const genreRef = useRef<InputRef>(null);
  const descRef = useRef<InputRef>(null);

  const isEditing = (record: SongType) => record.key === editingKey;

  const handleEdit = (record: Partial<SongType> & { key: React.Key }) => {
    form.setFieldsValue({ genre: '', description: '', ...record });
    setEditingKey(record.key.toString());
  };

  const handleCancelEditing = () => {
    setEditingKey('');
    setTableType(prev => {
      getTableType('edit');
      return 'edit';
    });
  };

  const handleCancelAddNew = () => {
    //* remove the last row and the key
    setCount(count - 1);
    setDataSource([...dataSource].slice(0, dataSource.length - 1));
    setEditingKey('');
  };

  const handleAdd = () => {
    const newData: SongType = {
      key: (count + 1).toString(),
      genre: <Input className="input" ref={genreRef} />,
      description: <Input className="input" ref={descRef} />,
    };
    setDataSource([...dataSource, newData]);
    setCount(prev => {
      setEditingKey((count + 1).toString());
      return count + 1;
    });
  };

  function handleSaveAddNew() {
    if (editingKey === '') return;

    const genreValue = genreRef.current?.input?.value;
    const descValue = descRef.current?.input?.value;

    if (
      genreValue !== undefined ||
      descValue !== undefined ||
      genreValue !== '' ||
      descValue !== ''
    ) {
      const newRow = {
        key: count.toString(),
        genre: genreValue,
        description: descValue,
      };

      //* remove the input row and add the value to the table
      const newDataSource = [...dataSource].slice(0, dataSource.length - 1).concat(newRow);
      setDataSource([...newDataSource]);
      setTableType(prev => {
        getTableType('add-new');
        return 'add-new';
      });
      setEditingKey('');
    } else {
      handleCancelAddNew();
    }
  }

  const handleSaveEditing = async (key: React.Key) => {
    try {
      if (editingKey === '' || editingKey === undefined) {
        return;
      }

      const row = (await form.validateFields()) as SongType;

      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setDataSource(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setDataSource(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: SongType) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  function handleEditTable() {
    setTableType(prev => {
      getTableType('edit');
      return 'edit';
    });
  }

  function onCancelEdit() {
    setTableType(prev => {
      getTableType('default');
      return 'default';
    });
    setEditing(false);
  }

  function handleAddNewTable() {
    if (editingKey === '' || editingKey === undefined) {
      handleAdd();
    }
    setTableType(prev => {
      getTableType('add-new');
      return 'add-new';
    });
  }

  return (
    <>
      {(() => {
        switch (tableType) {
          case 'edit':
            if (editingKey === '' || editingKey === undefined) {
              return (
                <MyCustomFloatButton
                  icons={[{ icon: <UilPlus />, title: 'Thêm mới', action: handleAddNewTable }]}
                />
              );
            } else {
              return <></>;
            }
          case 'add-new':
            return (
              <MyCustomFloatButton
                icons={[{ icon: <UilPlus />, title: 'Thêm mới', action: handleAddNewTable }]}
              />
            );
          default:
            return (
              <MyCustomFloatButton
                icons={[{ icon: <UilEdit />, title: 'Chỉnh sửa', action: handleEditTable }]}
              />
            );
        }
      })()}
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          dataSource={dataSource}
          columns={mergedColumns}
          rowClassName="editable-row"
          className="table"
          size="middle"
          style={{ width: '95%' }}
          onRow={record => {
            return {
              onClick: () => {
                if (tableType === 'edit') handleEdit(record);
              }, // click row
            };
          }}
          pagination={{
            onChange: handleCancelEditing,
          }}
        />
      </Form>
      {tableType !== 'default' ? (
        <div className="button-group">
          <Space direction="horizontal">
            <MyCustomButton
              action={() => {
                if (tableType === 'edit') {
                  handleCancelEditing();
                } else if (tableType === 'add-new') {
                  handleCancelAddNew();
                }
                onCancelEdit();
              }}
            >
              Hủy
            </MyCustomButton>
            <MyCustomButton
              type="filled"
              action={() => {
                if (tableType === 'edit') {
                  handleSaveEditing(editingKey);
                } else tableType === 'add-new';
                {
                  handleSaveAddNew();
                }
              }}
            >
              Lưu
            </MyCustomButton>
          </Space>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SongInfoTable;
