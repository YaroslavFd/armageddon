import React from 'react';

import styles from './styles.module.scss';

interface SpinnerProps {
  width?: number;
  height?: number;
}

export const Spinner: React.FC<SpinnerProps> = ({ width = 200, height = 200 }) => (
  <svg
    className={styles.spinner}
    height={height}
    preserveAspectRatio='xMidYMid'
    style={{ margin: '0 auto', background: 'none', display: 'block' }}
    viewBox='0 0 100 100'
    width={width}
    xmlns='http://www.w3.org/2000/svg'
  >
    <g transform='translate(80,50)'>
      <g transform='rotate(0)'>
        <circle cx='0' cy='0' fill='#1c4595' fillOpacity='1' r='7'>
          <animateTransform
            attributeName='transform'
            begin='-0.875s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            type='scale'
            values='1.5 1.5;1 1'
           />
          <animate
            attributeName='fillOpacity'
            begin='-0.875s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='1;0'
           />
        </circle>
      </g>
    </g>
    <g transform='translate(71.21320343559643,71.21320343559643)'>
      <g transform='rotate(45)'>
        <circle cx='0' cy='0' fill='#1c4595' fillOpacity='0.875' r='7'>
          <animateTransform
            attributeName='transform'
            begin='-0.75s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            type='scale'
            values='1.5 1.5;1 1'
           />
          <animate
            attributeName='fillOpacity'
            begin='-0.75s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='1;0'
           />
        </circle>
      </g>
    </g>
    <g transform='translate(50,80)'>
      <g transform='rotate(90)'>
        <circle cx='0' cy='0' fill='#1c4595' fillOpacity='0.75' r='7'>
          <animateTransform
            attributeName='transform'
            begin='-0.625s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            type='scale'
            values='1.5 1.5;1 1'
           />
          <animate
            attributeName='fillOpacity'
            begin='-0.625s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='1;0'
           />
        </circle>
      </g>
    </g>
    <g transform='translate(28.786796564403577,71.21320343559643)'>
      <g transform='rotate(135)'>
        <circle cx='0' cy='0' fill='#1c4595' fillOpacity='0.625' r='7'>
          <animateTransform
            attributeName='transform'
            begin='-0.5s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            type='scale'
            values='1.5 1.5;1 1'
           />
          <animate
            attributeName='fillOpacity'
            begin='-0.5s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='1;0'
           />
        </circle>
      </g>
    </g>
    <g transform='translate(20,50.00000000000001)'>
      <g transform='rotate(180)'>
        <circle cx='0' cy='0' fill='#1c4595' fillOpacity='0.5' r='7'>
          <animateTransform
            attributeName='transform'
            begin='-0.375s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            type='scale'
            values='1.5 1.5;1 1'
           />
          <animate
            attributeName='fillOpacity'
            begin='-0.375s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='1;0'
           />
        </circle>
      </g>
    </g>
    <g transform='translate(28.78679656440357,28.786796564403577)'>
      <g transform='rotate(225)'>
        <circle cx='0' cy='0' fill='#1c4595' fillOpacity='0.375' r='7'>
          <animateTransform
            attributeName='transform'
            begin='-0.25s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            type='scale'
            values='1.5 1.5;1 1'
           />
          <animate
            attributeName='fillOpacity'
            begin='-0.25s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='1;0'
           />
        </circle>
      </g>
    </g>
    <g transform='translate(49.99999999999999,20)'>
      <g transform='rotate(270)'>
        <circle cx='0' cy='0' fill='#1c4595' fillOpacity='0.25' r='7'>
          <animateTransform
            attributeName='transform'
            begin='-0.125s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            type='scale'
            values='1.5 1.5;1 1'
           />
          <animate
            attributeName='fillOpacity'
            begin='-0.125s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='1;0'
           />
        </circle>
      </g>
    </g>
    <g transform='translate(71.21320343559643,28.78679656440357)'>
      <g transform='rotate(315)'>
        <circle cx='0' cy='0' fill='#1c4595' fillOpacity='0.125' r='7'>
          <animateTransform
            attributeName='transform'
            begin='0s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            type='scale'
            values='1.5 1.5;1 1'
           />
          <animate
            attributeName='fillOpacity'
            begin='0s'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            values='1;0'
           />
        </circle>
      </g>
    </g>
  </svg>
);
