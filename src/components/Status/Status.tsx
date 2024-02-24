import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { StyledHideVisually } from '@/components/styled/StyledVisuallyHidden';

export type StatusType = 'success' | 'warning' | 'neutral';

function getStatusType(type: StatusType) {
  switch (type) {
    case 'neutral':
      return NeutralStatus;
    case 'warning':
      return WarningStatus;
    case 'success':
      return SuccessStatus;
  }
}

type StatusProps = {
  variant?: StatusType;
  text: string;
};

// Component
function Status({ variant = 'neutral', text }: StatusProps) {
  const StatusComponent = getStatusType(variant);

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
  min-height: 40px;
  line-height: 1;

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

export { Status };
