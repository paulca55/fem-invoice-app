import styled from 'styled-components';
import { OverviewHeader } from '@/components/OverviewHeader/OverviewHeader';
import InvoiceList from '@/components/InvoiceList';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db';

function HomePage() {
  const invoices = useLiveQuery(() => db.invoices.toArray());

  return (
    <StyledContainer>
      <OverviewHeader
        heading="Invoices"
        subheading={
          invoices?.length ? `There are ${invoices?.length} total invoices` : 'Loading invoices...'
        }
      />

      <StyledInvoiceWrapper>
        <InvoiceList invoices={invoices} />
      </StyledInvoiceWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-top: 100px;
`;

const StyledInvoiceWrapper = styled.div`
  margin-top: 64px;
`;

export default HomePage;
