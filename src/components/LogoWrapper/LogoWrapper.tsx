import styled from 'styled-components';
import { Logo } from '@/components/svg/Logo';

function LogoWrapper() {
  return (
    <Container>
      <Highlight />
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background-color: var(--color-01);
  height: 103px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
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
`;

export { LogoWrapper };
