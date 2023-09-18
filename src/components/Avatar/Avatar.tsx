import styled from 'styled-components';
import Image from 'next/image';

type AvatarProps = {
  size?: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

function Avatar({ size = 40, src, alt, width, height }: AvatarProps) {
  return (
    <Container $size={size}>
      <StyledImage src={src} alt={alt} width={width} height={height} />
    </Container>
  );
}

const Container = styled.div<{ $size: number }>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
`;

export { Avatar };
