import React, { useRef } from 'react';
import { Status } from '@/components/Status';
import { Card } from '@/components/Card';
import voca from 'voca';
import styled from 'styled-components';
import { type Invoice } from '@/types/invoice';
import { ChevronRightIcon } from '@/components/_svg/icons/ChevronRightIcon';
import { rem } from 'polished';
import { formattedCurrency } from '@/utilities';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type ThemeMode } from '@/types/themes';
import { useThemeMode } from '@/contexts/ThemeModeProvider';
import { getStatusType } from '@/helpers/invoice.helpers';
import { InvoiceId } from '@/components/InvoiceId';

// Constants
const urlPath = '/invoice/';

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
          <InvoiceId id={invoice.invoiceId} />
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
          <ChevronIcon aria-hidden={true} />
        </ViewLink>
      </ItemWrapper>
    </Card>
  );
}

// Styled Components
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-block-start: 11px;
  padding-block-end: 11px;
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
  overscroll-behavior-x: contain;
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
  margin-inline-start: auto;
  cursor: pointer;
`;

const ChevronIcon = styled(ChevronRightIcon)`
  width: 6px;
  flex-shrink: 0;
  color: var(--color-01);
`;

export { InvoiceListItem };
