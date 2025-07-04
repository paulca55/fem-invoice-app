import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { StyledHideVisually } from '@/components/styled';

type InvoiceIdProps = {
  id: string;
};

function InvoiceId({ id }: InvoiceIdProps) {
  return (
    <Container>
      <StyledHideVisually>Invoice</StyledHideVisually>
      {id}
    </Container>
  );
}

// Styled components
const Container = styled.div`
  font-size: ${rem(15)};
  font-weight: 700;
  display: flex;

  &::before {
    content: '#';
    color: var(--color-07);
  }
`;

export { InvoiceId };
