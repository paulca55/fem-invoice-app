import React, { type ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { type Icon } from '@/types/icon';

type ButtonType = 'variant1' | 'variant2' | 'variant3' | 'variant4';
type ButtonComponent =
  | typeof StyledButton1
  | typeof StyledButton2
  | typeof StyledButton3
  | typeof StyledButton4;

type ButtonProps = {
  variant?: ButtonType;
  as?: React.ElementType;
  icon?: Icon;
  iconSize?: number;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Component
function Button({
  variant = 'variant1',
  as = 'button',
  icon: Icon,
  children,
  ...props
}: ButtonProps) {
  const ButtonComponent = buttonComponents[variant];

  return (
    <ButtonComponent type="button" as={as} {...props}>
      {Icon && (
        <StyledIconWrapper aria-hidden={'true'}>
          <Icon />
        </StyledIconWrapper>
      )}
      <StyledLabel>{children}</StyledLabel>
    </ButtonComponent>
  );
}

// Styled components
const buttonBaseStyles = css`
  --background-color: var(--color-01);
  --background-color-hover: var(--color-02);
  --color: #fff;

  background-color: var(--background-color);
  color: var(--color);
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  height: 48px;
  border-radius: 24px;
  font-size: ${rem(15)};
  font-weight: bold;
  padding-block: 16px;
  padding-inline: 10px;
  cursor: pointer;
  overflow: hidden;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--background-color-hover);
  }
`;

const StyledButton1 = styled.button`
  ${buttonBaseStyles};
`;

const StyledButton2 = styled.button`
  ${buttonBaseStyles};
  --background-color: var(--color-16);
  --color: var(--color-07);
  --background-color-hover: var(--color-05);
`;

const StyledButton3 = styled.button`
  ${buttonBaseStyles};
  --background-color: var(--color-17);
  --color: var(--color-06);
  --background-color-hover: var(--color-08);
`;

const StyledButton4 = styled.button`
  ${buttonBaseStyles};
  --background-color: var(--color-09);
  --background-color-hover: var(--color-10);
`;

const StyledLabel = styled.label`
  padding-inline: 14px;
  cursor: pointer;
  line-height: 1.1;
  transform: translateY(1px);
  text-align: center;
  flex: 1;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background-color: var(--color);
  color: var(--background-color);
  border-radius: 50%;

  & svg {
    width: 10px;
  }
`;

// Mapping of button types to their corresponding styled components
const buttonComponents: Record<ButtonType, ButtonComponent> = {
  variant1: StyledButton1,
  variant2: StyledButton2,
  variant3: StyledButton3,
  variant4: StyledButton4,
};

export { Button };
