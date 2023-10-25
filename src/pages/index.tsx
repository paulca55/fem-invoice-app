import styled from 'styled-components';
import { OverviewHeader } from '@/components/OverviewHeader/OverviewHeader';
import { invoiceData } from '@/invoice-data';
import InvoiceList from '@/components/InvoiceList';

function HomePage() {
  return (
    <StyledContainer>
      <OverviewHeader
        heading="Invoices"
        subheading={`There are ${invoiceData.length} total invoices`}
      />

      <InvoiceList invoices={invoiceData} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-top: 100px;
`;

export default HomePage;
