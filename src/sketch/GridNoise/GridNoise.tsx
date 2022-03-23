import { DefaultLayout } from 'components/Layouts';
import { P5Canvas } from 'components/P5Canvas';
import { makeNoise3D } from 'fast-simplex-noise';
import { useControls } from 'leva';
import { P5Instance } from 'react-p5-wrapper';

const noise3D = makeNoise3D(Math.random);

const sketch = (p5: P5Instance) => {
  const props = { count: 0, size: 0, amplitude: 0, frequency: 0 };

  p5.updateWithProps = ({ count, size, amplitude, frequency }) => {
    props.count = count;
    props.size = size;
    props.amplitude = amplitude;
    props.frequency = frequency;
  };

  p5.setup = () => {
    // p5.frameRate(30);
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    p5.background(255);
    p5.push();
    p5.noStroke();
    p5.translate(
      p5.windowWidth / props.count / 2,
      p5.windowHeight / props.count / 2
    );

    const width = p5.windowWidth;
    const height = p5.windowHeight;
    const time = p5.millis();

    for (let x = 0; x < props.count; x++) {
      for (let y = 0; y < props.count; y++) {
        const px = (width / props.count) * x;
        const py = (height / props.count) * y;
        const n =
          props.amplitude *
          noise3D(
            props.frequency * (x + time * 0.002),
            props.frequency * (y + time * 0.002),
            props.frequency * (x / y + time * 0.002)
          );
        const size = p5.map(n, -1, 1, 0, props.size);
        p5.ellipse(px, py, size);
        p5.fill(0);
      }
    }

    p5.pop();
  };

  p5.windowResized = () => p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
};

const GridNoise = () => {
  const data = useControls({
    count: { value: 40, min: 1, max: 100, step: 1 },
    size: { value: 3, min: 0.1, max: 10, step: 0.1 },
    amplitude: { value: 1, min: 0, max: 1, step: 0.01 },
    frequency: { value: 0.08, min: 0, max: 1, step: 0.001 },
  });

  return (
    <DefaultLayout>
      <P5Canvas sketch={sketch} {...data} />
    </DefaultLayout>
  );
};

export default GridNoise;
