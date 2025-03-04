import { FC } from 'react';
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
