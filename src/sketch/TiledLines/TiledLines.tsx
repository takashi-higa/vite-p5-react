import { DefaultLayout } from 'components/Layouts';
import { P5Canvas } from 'components/P5Canvas';
import { useControls } from 'leva';
import { P5Instance } from 'react-p5-wrapper';

const sketch = (p5: P5Instance) => {
  const props = { step: 0 };

  p5.updateWithProps = ({ step }) => {
    props.step = step;
    p5.windowResized();
  };

  const drawLines = (x: number, y: number, w: number, h = w) => {
    const leftToRight = Math.random() > 0.5;
    const x1 = leftToRight ? x : x + w;
    const y1 = y;
    const x2 = leftToRight ? x + w : x;
    const y2 = y + h;
    p5.line(x1, y1, x2, y2);
  };

  const init = () => {
    // 何故かsetTimeoutを使わないと描画が止まる
    setTimeout(() => {
      p5.background(255);
      for (let x = 0; x < p5.width; x += props.step) {
        for (let y = 0; y < p5.height; y += props.step) {
          drawLines(x, y, props.step);
        }
      }
    }, 200);
  };

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.strokeCap(p5.SQUARE);
    p5.strokeWeight(2);
    init();
  };

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    init();
  };
};

const TiledLines = () => {
  const data = useControls({
    step: { value: 50, min: 30, max: 500, step: 1 },
  });

  return (
    <DefaultLayout>
      <P5Canvas sketch={sketch} {...data} />
    </DefaultLayout>
  );
};

export default TiledLines;
