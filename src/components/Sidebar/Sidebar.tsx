import styled from 'styled-components';
import { LogoWrapper } from '@/components/LogoWrapper';
import { Avatar } from '@/components/Avatar';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

function Sidebar() {
  return (
    <Container>
      <LogoWrapper />
      <Footer>
        <ThemeSwitcherWrapper>
          <ThemeSwitcher />
        </ThemeSwitcherWrapper>
        <AvatarWrapper>
          <Avatar
            src="/images/image-avatar.jpg"
            alt="Your profile photo."
            width={80}
            height={80}
          />
        </AvatarWrapper>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.sideBarBgColor};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`;

const Footer = styled.div`
  margin-top: auto;
`;

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  padding: 24px;
  border-top: 1px solid var(--color-14);
`;

const ThemeSwitcherWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  padding-bottom: 20px;
`;

export { Sidebar };
