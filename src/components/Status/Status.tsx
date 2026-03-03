import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { StyledHideVisually } from '@/components/styled';

export type StatusType = 'success' | 'warning' | 'neutral';
type StatusComponent = typeof NeutralStatus | typeof WarningStatus | typeof SuccessStatus;

type StatusProps = {
  variant?: StatusType;
  text: string;
};

// Component
function Status({ variant = 'neutral', text }: StatusProps) {
  const StatusComponent = statusComponents[variant];

  return (
    <StatusComponent>
      <StyledHideVisually>Status is </StyledHideVisually>
      {text}
    </StatusComponent>
  );
}

// Styled components
const statusBaseStyles = css`
  --background-color: #f4f4f5;
  --color: #373b53;

  background-color: var(--background-color);
  color: var(--color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: ${rem(15)};
  line-height: 1;
  padding-inline: 1.3em;
  padding-block: 0.8em;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: var(--color);
    margin-inline-end: 8px;
    border-radius: 50%;
  }
`;

const NeutralStatus = styled.div`
  ${statusBaseStyles};
`;

const WarningStatus = styled.div`
  ${statusBaseStyles};
  --background-color: #fff9f0;
  --color: #ff8f00;
`;

const SuccessStatus = styled.div`
  ${statusBaseStyles};
  --background-color: #f3fdfa;
  --color: #33d69f;
`;

// Mapping of status types to their corresponding styled components
const statusComponents: Record<StatusType, StatusComponent> = {
  neutral: NeutralStatus,
  warning: WarningStatus,
  success: SuccessStatus,
};

export { Status };
