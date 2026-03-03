import styled from 'styled-components';
import { BackButton } from '@/components/BackButton';
import { useRouter } from 'next/router';
import { InvoiceActions } from '@/components/InvoiceActions';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db';
import { Spacer } from '@/components/Spacer';
import { InvoiceDetails } from '@/components/InvoiceDetails';

function InvoicePage() {
  const router = useRouter();
  const { id: invoiceId } = router.query;
  const invoice = useLiveQuery(() => {
    if (!invoiceId) return;

    return db.invoices.get(Number(invoiceId));
  }, [invoiceId]);

  return (
    <Container>
      <BackButton onClick={() => router.back()}>Go back</BackButton>
      {invoice ? (
        <>
          <Spacer $size={20} />
          <InvoiceActions invoice={invoice} />
          <Spacer $size={22} />
          <InvoiceDetails invoice={invoice} />
        </>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  padding-block-start: 100px;
`;

export default InvoicePage;
