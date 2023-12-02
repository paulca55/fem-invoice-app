import React from 'react';

export type Icon = (props: IconProps) => React.ReactElement;

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};
