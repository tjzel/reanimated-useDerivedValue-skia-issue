import React from 'react';
import {Canvas, Fill} from '@shopify/react-native-skia';
import {runOnUI, useDerivedValue} from 'react-native-reanimated';

function App() {
  const colorFloat32Array = useDerivedValue(() => {
    console.log('_WORKLET:', _WORKLET);
    return new Float32Array([0.3, 0.8, 1, 1]);
  });

  const colorArray = useDerivedValue(() => {
    return new Array(0.3, 0.2, 0.5, 1);
  });

  console.log('hello from JS');

  runOnUI(() => {
    'worklet';
    console.log('colorFloat32Array on UI:', colorFloat32Array);
    console.log('colorArray on UI:', colorArray);
  })();

  console.log('colorFloat32Array on JS:', colorFloat32Array);
  console.log('colorArray on JS:', colorArray);

  return (
    <Canvas style={{flex: 1}} debug>
      {console.log('JSX logging')}
      {console.log('JSX colorFloat32Array:', colorFloat32Array)}
      {console.log('JSX colorArray:', colorArray)}
      {/* <Fill color={colorFloat32Array} /> */}
      {/* <Fill color={colorArray} /> */}
    </Canvas>
  );
}

export default App;
