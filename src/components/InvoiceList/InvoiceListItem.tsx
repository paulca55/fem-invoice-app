import React from 'react';
import { Status, StatusType } from '@/components/Status';
import { Card } from '@/components/Card/Card';
import voca from 'voca';
import styled from 'styled-components';

type InvoiceListItemProps = {
  invoice: any;
};

function InvoiceListItem({ invoice }: InvoiceListItemProps) {
  let statusType: StatusType = 'neutral';

  switch (invoice.status) {
    case 'draft':
      statusType = 'neutral';
      break;
    case 'pending':
      statusType = 'warning';
      break;
    case 'paid':
      statusType = 'success';
      break;
  }

  return (
    <Card key={invoice.id}>
      <ItemContent>
        <span>{invoice.clientName}</span>

        <div style={{ marginLeft: 'auto' }}>
          <Status text={voca.titleCase(invoice.status)} variant={statusType} />
        </div>
      </ItemContent>
    </Card>
  );
}

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px 16px 30px;
`;

export default InvoiceListItem;
