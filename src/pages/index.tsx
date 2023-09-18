import styled from 'styled-components';
import { invoiceData } from '@/invoice-data';

function HomePage() {
  return (
    <Container>
      <h1>Invoices</h1>

      {invoiceData.map((invoice) => (
        <p>{invoice.clientName}</p>
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 100px;
`;

export default HomePage;
