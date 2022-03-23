import { Hamburger } from 'components/Hamburger';
import { Menu } from 'components/Menu';
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { menuState } from 'stores/menu';

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  const location = useLocation();
  const setMenu = useSetRecoilState<boolean>(menuState);

  useEffect(() => {
    setMenu(false);
  }, [location]);

  return (
    <>
      <Hamburger />
      <Menu />
      {children}
    </>
  );
};

export default DefaultLayout;
