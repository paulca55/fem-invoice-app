import styled from 'styled-components';
import { invoiceData } from '@/invoice-data';
import { OverviewHeader } from '@/components/OverviewHeader/OverviewHeader';
import { Card } from '@/components/Card/Card';

function HomePage() {
  return (
    <StyledContainer>
      <OverviewHeader
        heading="Invoices"
        subheading={`There are ${invoiceData.length} total invoices`}
      />

      {invoiceData.map((invoice) => (
        <Card key={invoice.id} style={{ marginTop: 20 }}>
          <p style={{ padding: 20 }}>{invoice.clientName}</p>
        </Card>
      ))}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-top: 100px;
`;

export default HomePage;
