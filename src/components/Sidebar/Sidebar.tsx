import styled from 'styled-components';
import { LogoWrapper } from '@/components/LogoWrapper';
import { Avatar } from '@/components/Avatar';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { breakpoints } from '@/constants';

function Sidebar() {
  return (
    <Container>
      <LogoWrapper />
      <Footer>
        <ThemeSwitcherWrapper>
          <ThemeSwitcher />
        </ThemeSwitcherWrapper>
        <AvatarWrapper>
          <Avatar imageSource="/images/image-avatar.jpg" />
        </AvatarWrapper>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.sideBarBgColor};
  border-bottom-right-radius: 0;
  overflow: hidden;

  @media (min-width: ${breakpoints.lg}) {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    flex-direction: column;
  }
`;

const Footer = styled.div`
  display: flex;
  margin-left: auto;

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: column;
    margin-left: 0;
    margin-top: auto;
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid var(--color-14);
  height: var(--sidebar-size);
  width: var(--sidebar-size);

  @media (min-width: ${breakpoints.lg}) {
    border-top: 1px solid var(--color-14);
    border-left: 0;
  }
`;

const ThemeSwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--sidebar-size);
  width: var(--sidebar-size);
`;

export { Sidebar };
