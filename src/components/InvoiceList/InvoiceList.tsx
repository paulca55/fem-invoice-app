import * as React from 'react';
import InvoiceListItem from './InvoiceListItem';
import styled from 'styled-components';
import { Invoice } from '@/types/invoice';

type InvoiceListProps = {
  invoices: Array<Invoice> | undefined;
};

function InvoiceList({ invoices }: InvoiceListProps) {
  return (
    <Container role="list">
      {invoices?.map((invoice) => {
        return (
          <li key={invoice.id}>
            <InvoiceListItem invoice={invoice} />
          </li>
        );
      })}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
`;

export default InvoiceList;
