import ISelect from '@core/select';
import { PresetColorType } from 'antd/lib/_util/colors';

export const LANGUAGE: ISelect<string>[] = [
  { value: 'en', label: 'ENG' },
  { value: 'vi', label: 'VNM' },
];

export const allSelect: ISelect = { label: 'common.all', value: undefined };

const CONFIG = {
  API_BASE_URL: process.env.API_BASE_URL,
  APP_NAME: process.env.APP_NAME || 'CMS-SSO',
  LOGIN_PAGE: '/#/login', //! change for page navigation
  SSO_PAGE: '/#',
};

export const colors: PresetColorType[] = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

export default CONFIG;
