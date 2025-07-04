import styled from 'styled-components';
import { HalfMoonIcon } from '@/components/_svg/icons/HalfMoonIcon';
import { useThemeMode } from '@/contexts/ThemeModeProvider';
import { SunIcon } from '@/components/_svg/icons/SunIcon';
import { ThemeMode } from '@/types/themes';
import { StyledHideVisually } from '@/components/styled';

type AvatarProps = {
  size?: number;
};

function ThemeSwitcher({ size = 48 }: AvatarProps) {
  const { themeMode, toggleThemeMode } = useThemeMode();
  const isLightMode = themeMode === 'light';

  return (
    <StyledButton
      onClick={toggleThemeMode}
      $size={size}
      $mode={themeMode}
      // aria-label={`Switch to ${isLightMode ? 'dark mode' : 'light mode'}.`}
    >
      <StyledHideVisually>
        {`Switch to ${isLightMode ? 'dark mode' : 'light mode'}.`}
      </StyledHideVisually>
      <IconWrapper aria-hidden={true}>{isLightMode ? <HalfMoonIcon /> : <SunIcon />}</IconWrapper>
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $size: number; $mode: ThemeMode }>`
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

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
`;

export { ThemeSwitcher };
