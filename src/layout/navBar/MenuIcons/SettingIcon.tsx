import React from 'react';
import { UilCog } from '@iconscout/react-unicons';
type SVGProp = {
  svgColor?: string;
};

export default function SettingIcon({ svgColor }: SVGProp) {
  return <UilCog />;
}
