import { FC } from 'react';
// import Routes from './Routes';
import Input from '../shared/ui/Input/Input.tsx';
import Select from '../shared/ui/Select/Select.tsx';
import { country } from '../shared/constants';

const App: FC = () => {
  return (
      <>
        <h2>Регистрация</h2>
          <div>
            <Input required id='name' placeholder='Имя' />
            <Select options={country} defaultValue={country[0].value} id='country'/>
          </div>
      </>

  );
};

export default App;
