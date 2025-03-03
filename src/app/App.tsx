import { FC } from 'react';
// import Routes from './Routes';
import {
  Layout,
} from '../shared/ui';
import { AuthForm } from '../features/auth-form';

const App: FC = () => {
  return (
    <Layout>
        <AuthForm />
    </Layout>
  )
    ;
};

export default App;
