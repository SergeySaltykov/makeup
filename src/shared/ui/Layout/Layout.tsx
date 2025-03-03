import { FC, ReactNode } from 'react';
import style from './styled.module.scss';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return <div className={style.layout}>{children}</div>;
};

export default Layout;
