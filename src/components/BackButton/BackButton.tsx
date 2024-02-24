import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ChevronLeftIcon } from '@/components/svg/icons/ChevronLeftIcon';
import { themes } from '@/styles/theme';
import { useThemeMode } from '@/contexts/ThemeModeProvider';
import { ThemeMode } from '@/types/themes';
import { IconProps } from '@/types/icon';

type BackButtonProps = {
  as?: React.ElementType;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function BackButton({ as, children, ...props }: BackButtonProps) {
  const { themeMode } = useThemeMode();
  return (
    <StyledButton type="button" as={as} {...props} $mode={themeMode}>
      <StyledIcon size={10} color={themes.light.colors['01']} />
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
  gap: 24px;
  font-size: ${rem(15)};
  font-weight: bold;
  padding-block: 8px;
  cursor: pointer;

  &:hover ${StyledLabel}, &:focus ${StyledLabel}, &:active ${StyledLabel} {
    color: var(--color-01);
    transform: translateX(-6px);
  }
`;

const StyledIcon = styled(ChevronLeftIcon)`
  flex-shrink: 0;
  transform: translateY(-1px);
`;

export { BackButton };
