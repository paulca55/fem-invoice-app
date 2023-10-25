import styled from 'styled-components';
import { Logo } from '@/components/svg/Logo';
import { breakpoints } from '@/constants';

function LogoWrapper() {
  return (
    <Container>
      <Highlight />
      <LogoContainer>
        <Logo aria-hidden="true" />
      </LogoContainer>
    </Container>
  );
}

const Container = styled.div`
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

  @media (min-width: ${breakpoints.lg}) {
    border-bottom-right-radius: 0;
  }
`;

const Highlight = styled.div`
  height: 50%;
  background-color: var(--color-02);
  border-top-left-radius: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;

  & svg {
    width: 28px;
    height: auto;

    @media (min-width: ${breakpoints.sm}) {
      width: 31px;
    }

    @media (min-width: ${breakpoints.lg}) {
      width: 40px;
    }
  }
`;

export { LogoWrapper };
