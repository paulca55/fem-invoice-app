import styled from 'styled-components';
import { BackButton } from '@/components/BackButton';
import { useRouter } from 'next/router';

function InvoicePage() {
  const router = useRouter();

  return (
    <Container>
      <BackButton onClick={() => router.back()}>Go back</BackButton>
      <h1>Invoice #1</h1>
    </Container>
  );
}

const Container = styled.div`
  padding-block-start: 100px;
`;

export default InvoicePage;
