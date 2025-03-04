import { FC } from 'react';
// import Routes from './Routes';
import {
  Layout,
} from '../shared/ui';
import { AuthForm } from '../features/auth-form';
import { Table } from '../features/data-table';

const App: FC = () => {
  return (
    <Layout>
        <AuthForm />
        <Table />
    </Layout>
  )
    ;
};

export default App;
