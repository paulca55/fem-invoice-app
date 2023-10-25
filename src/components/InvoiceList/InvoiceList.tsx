import * as React from 'react';
import InvoiceListItem from './InvoiceListItem';
import styled from 'styled-components';

type InvoiceListProps = {
  invoices: Array<any>;
};

function InvoiceList({ invoices }: InvoiceListProps) {
  return (
    <Container>
      {invoices.map((invoice) => {
        return <InvoiceListItem invoice={invoice} key={invoice.id} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default InvoiceList;
