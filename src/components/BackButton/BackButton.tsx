import React, { type ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { em, rem } from 'polished';
import { ChevronLeftIcon } from '@/components/_svg/icons/ChevronLeftIcon';
import { useThemeMode } from '@/contexts/ThemeModeProvider';
import { type ThemeMode } from '@/types/themes';

type BackButtonProps = {
  as?: React.ElementType;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function BackButton({ as, children, ...props }: BackButtonProps) {
  const { themeMode } = useThemeMode();

  return (
    <StyledButton type="button" as={as} {...props} $mode={themeMode}>
      <StyledChevronIcon />
      <StyledLabel>{children}</StyledLabel>
    </StyledButton>
  );
}

// Styled components
const StyledLabel = styled.label`
  cursor: pointer;
  line-height: 1.1;
  transition:
    color 0.3s,
    transform 0.3s;
`;

const StyledButton = styled.button<{ $mode: ThemeMode }>`
  color: ${(props) => (props.$mode === 'light' ? 'var(--color-08)' : '#fff')};
  display: inline-flex;
  align-items: center;
  gap: ${em(22)};
  font-size: ${rem(15)};
  font-weight: bold;
  padding-block: 8px;
  cursor: pointer;

  &:hover ${StyledLabel}, &:focus ${StyledLabel}, &:active ${StyledLabel} {
    color: var(--color-01);
    transform: translateX(-6px);
  }
`;

const StyledChevronIcon = styled(ChevronLeftIcon)`
  fill: var(--color-01);
  width: ${em(6)};
  height: auto;
  flex-shrink: 0;
  transform: translateY(-1px);
`;

export { BackButton };
