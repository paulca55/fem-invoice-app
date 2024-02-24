import styled from 'styled-components';
import { BackButton } from '@/components/BackButton';
import { useRouter } from 'next/router';
import { InvoiceActions } from '@/components/InvoiceActions/InvoiceActions';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db';
import { ChevronRightIcon } from '@/components/_svg/icons/ChevronRightIcon';

function InvoicePage() {
  const router = useRouter();
  const { id: invoiceId } = router.query;
  const invoice = useLiveQuery(() => db.invoices.get(Number(invoiceId)));

  console.log('invoiceId: ', invoiceId);
  console.log('invoice: ', invoice);

  return (
    <Container>
      <BackButton onClick={() => router.back()}>Go back</BackButton>

      {invoice ? (
        <InvoiceActionsWrapper>
          <InvoiceActions invoice={invoice} />
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
