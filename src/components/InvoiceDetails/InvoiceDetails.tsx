import React, { type ReactNode } from 'react';
import { Card } from '@/components/Card';
import styled from 'styled-components';
import { type Invoice } from '@/types/invoice';
import { InvoiceId } from '@/components/InvoiceId';
import { rem } from 'polished';
import { Spacer } from '@/components/Spacer';
import { type ThemeMode } from '@/types/themes';
import { useThemeMode } from '@/contexts/ThemeModeProvider';

const INVOICE_META_ITEM_GAP = 10;

type InvoiceDetailsProps = {
  invoice: Invoice;
};

function InvoiceDetails({ invoice }: InvoiceDetailsProps) {
  return (
    <StyledCard forwardedAs="article">
      <Header>
        <InvoiceIdWrapper>
          <InvoiceId id={invoice.invoiceId} />
          {invoice.description && <SmallText>{invoice.description}</SmallText>}
        </InvoiceIdWrapper>

        <SenderAddressWrapper>
          <SmallText>
            {invoice.senderAddress.street}
            <br />
            {invoice.senderAddress.city}
            <br />
            {invoice.senderAddress.postCode}
            <br />
            {invoice.senderAddress.country}
          </SmallText>
        </SenderAddressWrapper>
      </Header>

      <Spacer $size={32} />

      <MetaContent>
        <DatesColumn>
          <DateWrapper>
            <SmallText>Invoice Date</SmallText>
            <Spacer $size={INVOICE_META_ITEM_GAP} />
            <LargeText>{invoice.createdAt}</LargeText>
          </DateWrapper>

          <DateWrapper>
            <SmallText>Payment Due</SmallText>
            <Spacer $size={INVOICE_META_ITEM_GAP} />
            <LargeText>{invoice.paymentDue}</LargeText>
          </DateWrapper>
        </DatesColumn>

        <BillToColumn>
          <SmallText>Bill To</SmallText>
          <Spacer $size={INVOICE_META_ITEM_GAP} />
          <LargeText>{invoice.clientName}</LargeText>
          <Spacer $size={INVOICE_META_ITEM_GAP} />
          <SmallText>
            {invoice.clientAddress.street}
            <br />
            {invoice.clientAddress.city}
            <br />
            {invoice.clientAddress.postCode}
            <br />
            {invoice.clientAddress.country}
          </SmallText>
        </BillToColumn>

        <SentToColumn>
          <SmallText>Sent To</SmallText>
          <Spacer $size={INVOICE_META_ITEM_GAP} />
          <LargeText>{invoice.clientEmail}</LargeText>
        </SentToColumn>
      </MetaContent>
    </StyledCard>
  );
}

function SmallText({ children }: { children: ReactNode }) {
  const { themeMode } = useThemeMode();

  return <StyledSmallText $mode={themeMode}>{children}</StyledSmallText>;
}

function LargeText({ children }: { children: ReactNode }) {
  const { themeMode } = useThemeMode();

  return <StyledLargeText $mode={themeMode}>{children}</StyledLargeText>;
}

// Styled components
const META_CONTENT_GAP = 32;

const StyledCard = styled(Card)`
  padding: 48px;
`;

const MetaContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: ${META_CONTENT_GAP}px;
`;

const InvoiceIdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${INVOICE_META_ITEM_GAP}px;
`;

const SenderAddressWrapper = styled.div``;

const DatesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${META_CONTENT_GAP}px;
`;

const BillToColumn = styled.div``;

const SentToColumn = styled.div``;

const Header = styled.header`
  display: flex;
  gap: ${META_CONTENT_GAP}px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DateWrapper = styled.div``;

const StyledSmallText = styled.p<{ $mode: ThemeMode }>`
  color: var(${(props) => (props.$mode === 'light' ? '--color-07' : '--color-05')});
  line-height: 1.5;
`;

const StyledLargeText = styled.p<{ $mode: ThemeMode }>`
  color: ${(props) => (props.$mode === 'light' ? 'var(--color-08)' : '#fff')};
  font-size: ${rem(15)};
  font-weight: bold;
`;

export { InvoiceDetails };
