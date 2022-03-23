import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { P5Instance, ReactP5Wrapper } from 'react-p5-wrapper';

import styles from './styles.module.scss';

type Props = {
  sketch: (_p5: P5Instance) => void;
  center?: boolean;
};

const P5Canvas = ({ sketch, center = false, ...props }: Props) => {
  const p5InstancRef = useRef<P5Instance>();
  // @see https://github.com/P5-wrapper/react/issues/142#issue-1125766647
  useEffect(() => {
    return () => {
      if (p5InstancRef.current) {
        p5InstancRef.current.remove();
      }
    };
  }, []);

  return (
    <div className={clsx(styles.canvas, center && styles['is-center'])}>
      <ReactP5Wrapper
        sketch={(p5) => {
          p5InstancRef.current = p5;
          sketch(p5);
        }}
        {...props}
      />
    </div>
  );
};

export default P5Canvas;
