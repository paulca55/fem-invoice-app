import styled, { css } from 'styled-components';
import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

type CardProps = {
  as?: React.ElementType;
  children: React.ReactNode;
  hasHover?: boolean;
};

function Card({ as, children, hasHover = false, ...props }: CardProps) {
  return (
    <StyledContainer $hasHover={hasHover} {...props}>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div<{ $hasHover?: boolean }>`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: var(--shadow);
  border: 1px solid #fff;
  transition: border-color 0.2s;

  ${(props) => {
    if (props.$hasHover) {
      return css`
        &:hover {
          border-color: var(--color-01);
          cursor: pointer;
        }
      `;
    }
  }}
`;

export { Card };
