import styled from 'styled-components';
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

function Card({ children, style }: CardProps) {
  return <StyledContainer style={style}>{children}</StyledContainer>;
}

const StyledContainer = styled.article`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: hsl(231deg 38% 45% / 10%) 0 10px 10px -10px;
`;

export { Card };
