import React, { useRef, useEffect } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import Canvas from 'react-native-canvas';

export const CanvasScreen = () => {
  const ref = useRef(null);


  useEffect(() => {
    const drawCanvas = () => {
      if (ref.current) {
        const ctx = ref.current.getContext('2d');
        if (ctx) {
          ctx.lineWidth = 1;
          ctx.moveTo(10, 10); // X, Y
          ctx.lineTo(10, 10); // X, Y
          ctx.stroke();
        }
      }
    };

    drawCanvas();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Canvas
        ref={ref}
        style={{ flex: 1, width: '100%', height: '100%', paddingTop:60, backgroundColor: '#fff' }}
      />
    </SafeAreaView>
  );
};
