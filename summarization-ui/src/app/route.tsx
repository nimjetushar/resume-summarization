import {Route, Routes} from 'react-router-dom';
import {Dashboard} from './dashboard/dashboard';
import {FileUpload} from './file-upload/file-upload';
import {useFetchData} from './hooks/useFetchData';

export const AppRoute = () => {
  const {loading, candidates} = useFetchData();

  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard data={candidates} loading={loading} />}
      />
      <Route path="/upload" element={<FileUpload />} />
    </Routes>
  );
};
