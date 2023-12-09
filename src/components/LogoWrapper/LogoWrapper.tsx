import styled from 'styled-components';
import { Logo } from '@/components/svg/Logo';
import { breakpoints } from '@/constants';
import Link from 'next/link';

function LogoWrapper() {
  return (
    <StyledLink href="/">
      <Highlight />
      <LogoContainer>
        <StyledLogo aria-hidden="true" />
      </LogoContainer>
    </StyledLink>
  );
}

const Highlight = styled.div`
  height: 100%;
  transform: translateY(50%);
  background-color: var(--color-02);
  border-top-left-radius: 20px;
  transition: transform 0.2s;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
`;

const StyledLogo = styled(Logo)`
  width: 28px;
  height: auto;
  transition: transform 0.2s;

  @media (min-width: ${breakpoints.sm}) {
    width: 31px;
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 40px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: flex-end;
  position: relative;
  background-color: var(--color-01);
  height: var(--sidebar-size);
  width: var(--sidebar-size);
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;

  &:hover ${Highlight} {
    transform: translateY(100%);
  }

  &:hover ${StyledLogo} {
    transform: scale(0.9);
  }

  @media (min-width: ${breakpoints.lg}) {
    border-bottom-right-radius: 0;
  }
`;

export { LogoWrapper };
