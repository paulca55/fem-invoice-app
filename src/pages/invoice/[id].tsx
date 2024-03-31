import styled from 'styled-components';
import { BackButton } from '@/components/BackButton';
import { useRouter } from 'next/router';
import { InvoiceDetails } from '@/components/InvoiceDetails/InvoiceDetails';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db';

function InvoicePage() {
  const router = useRouter();
  const { id: invoiceId } = router.query;
  const invoice = useLiveQuery(() => db.invoices.get(Number(invoiceId)));

  return (
    <Container>
      <BackButton onClick={() => router.back()}>Go back</BackButton>

      {invoice ? (
        <InvoiceActionsWrapper>
          <InvoiceDetails invoice={invoice} />
        </InvoiceActionsWrapper>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  padding-block-start: 100px;
`;

const InvoiceActionsWrapper = styled.div`
  margin-top: 20px;
`;

export default InvoicePage;
