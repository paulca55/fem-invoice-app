import styled from 'styled-components';
import { HalfMoonIcon } from '@/components/svg/icons/HalfMoonIcon';
import { useThemeMode } from '@/contexts/ThemeModeProvider';
import { SunIcon } from '@/components/svg/icons/SunIcon';

type AvatarProps = {
  size?: number;
};

function ThemeSwitcher({ size = 48 }: AvatarProps) {
  const { themeMode, toggleThemeMode } = useThemeMode();

  return (
    <Container $size={size} onClick={toggleThemeMode}>
      {themeMode === 'light' ? (
        <HalfMoonIcon color="var(--color-07)" />
      ) : (
        <SunIcon color="var(--color-15)" />
      )}
    </Container>
  );
}

const Container = styled.button<{ $size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  cursor: pointer;
`;

export { ThemeSwitcher };
