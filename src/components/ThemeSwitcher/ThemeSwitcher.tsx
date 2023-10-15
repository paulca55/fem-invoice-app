import styled from 'styled-components';
import { HalfMoonIcon } from '@/components/svg/icons/HalfMoonIcon';
import { useThemeMode } from '@/contexts/ThemeModeProvider';
import { SunIcon } from '@/components/svg/icons/SunIcon';
import { ThemeMode } from '@/types/themes';

type AvatarProps = {
  size?: number;
};

function ThemeSwitcher({ size = 48 }: AvatarProps) {
  const { themeMode, toggleThemeMode } = useThemeMode();

  return (
    <Container onClick={toggleThemeMode} $size={size} $mode={themeMode}>
      {themeMode === 'light' ? <HalfMoonIcon /> : <SunIcon />}
    </Container>
  );
}

const Container = styled.button<{ $size: number; $mode: ThemeMode }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  cursor: pointer;
  color: ${(props) => (props.$mode === 'light' ? 'var(--color-07)' : 'var(--color-15)')};
  transition: color 0.2s;

  &:hover,
  &:focus-visible {
    color: var(--color-05);
  }
`;

export { ThemeSwitcher };
