import styled from 'styled-components';
import { breakpoints } from '@/constants';

type AvatarProps = {
  imageSource: string;
};

function Avatar({ imageSource }: AvatarProps) {
  return <Container $imageSource={imageSource} />;
}

const Container = styled.div<{ $imageSource: string }>`
  height: 32px;
  width: 32px;
  background-image: url(${(props) => props.$imageSource});
  background-size: cover;
  background-color: #f4f4f4;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: ${breakpoints.sm}) {
    height: 40px;
    width: 40px;
  }
`;

export { Avatar };
