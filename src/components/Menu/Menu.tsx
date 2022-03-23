export { default as Menu } from './Menu';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { routes } from 'routes';
import { menuState } from 'stores/menu';

import styles from './styles.module.scss';

const Menu = () => {
  const menu = useRecoilValue<boolean>(menuState);

  return (
    <nav className={clsx(styles.menu, menu && styles['is-visibled'])}>
      <ul className={styles.ul}>
        {routes.map(({ path, label }) => (
          <li key={path} className={styles.li}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
