import '@shared/assets/css/animation.css';
import '@styles/styles.scss';

import lodash from 'lodash';
import React, { memo, useEffect, useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import LoginPage from './Auth/Login';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import HomePage from './Home';
//* Setting
import EditUserPage from './Setting/Authorization/EditUserPage';
import AddRolePage from './Setting/Authorization/AddRolePage';
import AddUserPage from './Setting/Authorization/AddUserPage';
import AuthorizationPage from './Setting/Authorization';
import UpdateRolePage from './Setting/Authorization/UpdateRolePage';
import ConfigurationPage from './Setting/Configuration';
import SongInfoPage from './Setting/SongInfoPage';
import ContractPage from './Setting/ContractPage';
import EditContractPage from './Setting/ContractPage/EditContractPage';
import EditWarningDate from './Setting/ContractPage/EditWarningDatePage';
import CyclePage from './Setting/CyclePage';

//* Help
import DownloadPage from './Help/DownloadPage';
import TutorialPage from './Help/Tutorial';
import FeedbackPage from './Help/FeedbackPage';

import locale from '@locale/index';
import { TokenSelector } from '@modules/authentication/profileStore';
import { LanguageSelector } from '@modules/setting/settingStore';
import ThemeContext from '@shared/hook/ThemeContext';
import Layout from '@layout/index';

const App: React.FC = () => {
  const token = useSelector(TokenSelector);
  const { language } = useSelector(LanguageSelector);
  const navigate = useNavigate();

  const memoLangData = useMemo(() => {
    return locale[language];
  }, [language]);

  useEffect(() => {
    if (lodash.isEmpty(token)) {
      navigate('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const initStyle = {
    colorPrimary: '#005556',
    colorPrimaryLight: '#338d8f',
    colorText: '#4f4c4d',
    colorTextSecondary: '#4f4c4d',
    colorLink: '#000',
    colorBgContainer: '#fff',
    colorBgLayout: '#f5f5f5',
    fontFamily: 'Roboto',
    colorError: 'red',
    colorTextBase: '#000',
    colorTextLightSolid: '#fff',
  };

  return (
    <IntlProvider locale={language} messages={memoLangData}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/setting">
            <Route path="authorization/*">
              <Route index element={<AuthorizationPage />} />
              <Route path="edit" element={<EditUserPage />} />
              <Route path="add-user" element={<AddUserPage />} />
              <Route path="add-role" element={<AddRolePage />} />
              <Route path="update" element={<UpdateRolePage />} />
              <Route path="*" element={<AuthorizationPage />} />
            </Route>
            <Route path="configuration">
              <Route index element={<ConfigurationPage />} />
            </Route>
            <Route path="song-info">
              <Route index element={<SongInfoPage />} />
            </Route>
            <Route path="contracts/*">
              <Route index element={<ContractPage />} />
              <Route path="edit-contract" element={<EditContractPage />} />
              <Route path="edit-warning" element={<EditWarningDate />} />
              <Route path="*" element={<ContractPage />} />
            </Route>
            <Route path="cycle">
              <Route index element={<CyclePage />} />
            </Route>
          </Route>
          <Route path="help">
            <Route path="tutorial" element={<TutorialPage />} />
            <Route path="download" element={<DownloadPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
          </Route>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </IntlProvider>
  );
};

export default App;
