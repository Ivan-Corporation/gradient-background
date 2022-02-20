import * as React from 'react';
import './style.scss'

export interface GradientBackgroundProps {
  color: string,
}


export const GradientBackground = ({ color = 'primary' }: GradientBackgroundProps) => {
  return <>
    <div className={color} />
  </>
};
