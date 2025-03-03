import { FC } from 'react';
// import Routes from './Routes';
import Input from '../shared/ui/Input/Input.tsx';
import Select from '../shared/ui/Select/Select.tsx';
import { country } from '../shared/constants';
import Textarea from '../shared/ui/Textarea/Textarea.tsx';

const App: FC = () => {
  return (
      <>
        <h2>Регистрация</h2>
          <div>
            <Input required id='name' placeholder='Имя' />
            <Select options={country} defaultValue={country[0].value} id='country'/>
            <Textarea id='description' placeholder='Коротко о себе'/>
          </div>
      </>

  );
};

export default App;
