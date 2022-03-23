import clsx from 'clsx';
import { useRecoilState } from 'recoil';
import { menuState } from 'stores/menu';

import styles from './styles.module.scss';

const Hamburger = () => {
  const [menu, setMenu] = useRecoilState<boolean>(menuState);

  const onClick = () => {
    setMenu(!menu);
  };

  return (
    <button
      className={clsx(styles.hamburger, menu && styles['is-visibled'])}
      onClick={onClick}>
      {[...Array(3).keys()].map((i) => {
        return <span key={`bar-${i}`} className={styles.bar} />;
      })}
    </button>
  );
};

export default Hamburger;
