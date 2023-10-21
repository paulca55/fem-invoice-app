import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { Icon } from '@/types/Icon';

type ButtonType = 'variant1' | 'variant2' | 'variant3' | 'variant4';

function getButtonType(type: ButtonType) {
  switch (type) {
    case 'variant1':
      return StyledButton1;
    case 'variant2':
      return StyledButton2;
    case 'variant3':
      return StyledButton3;
    case 'variant4':
      return StyledButton4;
  }
}

type ButtonProps = {
  variant?: ButtonType;
  as?: React.ElementType;
  icon?: Icon;
  iconSize?: number;
  children: React.ReactNode;
};

// Component
function Button({ variant = 'variant1', as = 'button', icon: Icon, children }: ButtonProps) {
  const ButtonComponent = getButtonType(variant);

  return (
    <ButtonComponent as={as}>
      {Icon && (
        <StyledIconContainer aria-hidden={'true'}>
          <Icon size={10} />
        </StyledIconContainer>
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
  height: 48px;
  border-radius: 24px;
  font-size: ${rem(15)};
  font-weight: bold;
  padding: 16px 10px;
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
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 4px;
  color: var(--background-color);
`;

export { Button };
