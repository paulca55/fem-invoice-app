import { ReactNode } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { rem } from 'polished';

type EmptyProps = {
  heading: string;
  text?: ReactNode;
};

function Empty({ heading, text }: EmptyProps) {
  return (
    <StyledContainer>
      <Image
        src="/images/illustration-empty.svg"
        alt="Illustration of a woman popping out of an envelope holding a megaphone."
        width={242}
        height={200}
      />

      <StyledTextLrg>{heading}</StyledTextLrg>

      {text && <StyledTextSml>{text}</StyledTextSml>}
    </StyledContainer>
  );
}

// Styled components
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledTextLrg = styled.p`
  font-size: ${rem(24)};
  font-weight: bold;
  padding-block-start: 60px;
  max-width: 26ch;
  line-height: 1.1;
`;

const StyledTextSml = styled.p`
  font-size: ${rem(13)};
  padding-block-start: 20px;
  color: var(--color-06);
  max-width: 26ch;
`;

export default Empty;
