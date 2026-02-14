import styled, { css } from 'styled-components';
import React from 'react';
import { type ThemeMode } from '@/types/themes';
import { useThemeMode } from '@/contexts/ThemeModeProvider';

type CardProps = {
  children: React.ReactNode;
  hasHover?: boolean;
  className?: string;
};

function Card({ children, hasHover = false, className }: CardProps) {
  const { themeMode } = useThemeMode();

  return (
    <StyledContainer $hasHover={hasHover} $mode={themeMode} className={className}>
            {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div<{ $hasHover?: boolean; $mode: ThemeMode }>`
  background-color: ${(props) => (props.$mode === 'light' ? '#fff' : 'var(--color-03)')};
  border-radius: 8px;
  box-shadow: var(--shadow);
  border: 1px solid ${(props) => (props.$mode === 'light' ? '#fff' : 'var(--color-03)')};
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
