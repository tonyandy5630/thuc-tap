export interface SongType {
  key: React.Key;
  genre: string | React.ReactNode;
  description: string | React.ReactNode;
}

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: SongType;
  index: number;
  children: React.ReactNode;
}

export interface ContractType {
  key: React.Key;
  type: string | string | React.ReactNode;
  revenue: number | React.ReactNode;
}

export type TableType = 'default' | 'edit' | 'add-new';
