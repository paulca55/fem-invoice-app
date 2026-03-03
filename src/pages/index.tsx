import styled from 'styled-components';
import { OverviewHeader } from '@/components/OverviewHeader';
import { InvoiceList } from '@/components/InvoiceList';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db';
import { Empty } from '@/components/Empty/Empty';

function HomePage() {
  const invoices = useLiveQuery(() => db.invoices.toArray());

  return (
    <StyledContainer>
      <OverviewHeader
        heading="Invoices"
        subheading={
          !!invoices?.length ? `There are ${invoices?.length} total invoices` : 'No invoices'
        }
      />

      <StyledInvoiceWrapper>
        {!!invoices?.length ? (
          <InvoiceList invoices={invoices} />
        ) : (
          <StyledEmptyWrapper>
            <Empty
              heading="There is nothing here"
              text={
                <>
                  Create an invoice by clicking the <strong>New Invoice</strong> button and get
                  started
                </>
              }
            />
          </StyledEmptyWrapper>
        )}
      </StyledInvoiceWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding-block-start: 100px;
`;

const StyledInvoiceWrapper = styled.div`
  padding-block-start: 64px;
`;

const StyledEmptyWrapper = styled.div`
  padding-block: 80px;
`;

export default HomePage;
