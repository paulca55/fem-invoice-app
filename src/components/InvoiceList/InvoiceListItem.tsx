import React, { useRef } from 'react';
import { Status, StatusType } from '@/components/Status';
import { Card } from '@/components/Card';
import voca from 'voca';
import styled from 'styled-components';
import { Invoice, InvoiceStatus } from '@/types/invoice';
import { ChevronRightIcon } from '@/components/svg/icons/ChevronRightIcon';
import { rem } from 'polished';
import { formattedCurrency } from '@/utilities';
import { StyledHideVisually } from '@/components/styled/StyledVisuallyHidden';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeMode } from '@/types/themes';
import { useThemeMode } from '@/contexts/ThemeModeProvider';

// Constants
const urlPath = '/invoice/';

// Helpers
function getStatusType(status: InvoiceStatus): StatusType {
  switch (status) {
    case 'draft':
      return 'neutral';
    case 'pending':
      return 'warning';
    case 'paid':
      return 'success';
    default:
      return 'neutral';
  }
}

// Component
type InvoiceListItemProps = {
  invoice: Invoice;
};

function InvoiceListItem({ invoice }: InvoiceListItemProps) {
  const listItemRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { themeMode } = useThemeMode();

  function handleClick(id: number) {
    void router.push(urlPath + id);
  }

  return (
    <Card key={invoice.id} hasHover={true}>
      <ItemWrapper onClick={() => handleClick(invoice.id as number)}>
        <ItemContent ref={listItemRef}>
          <InvoiceId>
            <span aria-hidden={true}>#</span> <StyledHideVisually>Invoice</StyledHideVisually>
            {invoice.invoiceId}
          </InvoiceId>
          <PaymentDueDate $mode={themeMode}>
            <span>Due</span> <time dateTime="2019-09-11">{invoice.paymentDue}</time>
          </PaymentDueDate>
          <ClientName $mode={themeMode}>{invoice.clientName}</ClientName>
          <InvoiceTotal>{formattedCurrency(invoice.total)}</InvoiceTotal>
          <Status text={voca.titleCase(invoice.status)} variant={getStatusType(invoice.status)} />
        </ItemContent>

        <ViewLink
          href={urlPath + invoice.id}
          aria-label={`View full details for invoice ${invoice.invoiceId}.`}
        >
          <ChevronRightIcon style={{ justifySelf: 'end' }} aria-hidden={true} />
        </ViewLink>
      </ItemWrapper>
    </Card>
  );
}

// Styled Components
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-inline-start: 30px;
  padding-inline-end: 0;
`;

const ItemContent = styled.div`
  display: grid;
  grid-template-columns:
    minmax(12.3ch, 1fr)
    minmax(17.7ch, 1fr)
    minmax(15ch, 3fr)
    2fr
    minmax(13.8ch, 1fr);
  grid-gap: 10px;
  align-items: center;
  overflow-x: auto;
`;

const InvoiceId = styled.div`
  font-size: ${rem(15)};
  font-weight: 700;
  display: flex;

  & span {
    color: var(--color-07);
  }
`;

const PaymentDueDate = styled.div<{ $mode: ThemeMode }>`
  color: ${(props) => (props.$mode === 'light' ? 'var(--color-07)' : '#fff')};

  & span {
    color: ${(props) => (props.$mode === 'light' ? 'var(--color-06)' : '#fff')};
  }
`;

const ClientName = styled.div<{ $mode: ThemeMode }>`
  color: ${(props) => (props.$mode === 'light' ? 'var(--color-06)' : '#fff')};
`;

const InvoiceTotal = styled.div`
  font-size: ${rem(15)};
  font-weight: 700;
  text-align: right;
  padding-inline-end: 30px;
`;

const ViewLink = styled(Link)`
  display: flex;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-01);
`;

export { InvoiceListItem };
