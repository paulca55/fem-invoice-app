import styled, { css } from 'styled-components';
import { type ReactNode } from 'react';

type StackProps = {
  direction?: 'column' | 'row';
  spacing?: string;
  align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'initial'
    | 'inherit';
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | 'initial';
  splitAfter?: number;
  children: ReactNode;
};

function Stack({
  direction = 'row',
  spacing = '24px',
  align = 'stretch',
  justify = 'flex-start',
  wrap = 'nowrap',
  splitAfter,
  children,
}: StackProps) {
  return (
    <StyledStack
      $direction={direction}
      $spacing={spacing}
      $align={align}
      $justify={justify}
      $wrap={wrap}
      $splitAfter={splitAfter}
    >
      {children}
    </StyledStack>
  );
}

const StyledStack = styled.div<{
  $direction?: StackProps['direction'];
  $spacing?: StackProps['spacing'];
  $align?: StackProps['align'];
  $justify?: StackProps['justify'];
  $wrap?: StackProps['wrap'];
  $splitAfter?: StackProps['splitAfter'];
}>`
  display: flex;
  flex-flow: ${({ $direction, $wrap }) => `${$direction} ${$wrap}`};
  gap: ${(props) => props.$spacing};
  align-items: ${(props) => props.$align};
  justify-content: ${(props) => props.$justify};

  ${(props) => {
    return css`
      ${!!props.$splitAfter
        ? css`
            &:only-child {
              ${props.$direction === 'column' ? 'block' : 'inline'}-size: 100%;
            }

            & > :nth-child(${props.$splitAfter}) {
              margin-${props.$direction === 'column' ? 'block' : 'inline'}-end: auto;
            }
          `
        : ``}
    `;
  }}
`;

export { Stack };
