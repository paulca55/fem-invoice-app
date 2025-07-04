import React from 'react';
import { Card } from '@/components/Card';
import styled from 'styled-components';
import { Status } from '@/components/Status';
import { Invoice } from '@/types/invoice';
import voca from 'voca';
import { getStatusType } from '@/helpers/invoice.helpers';
import { Button } from '@/components/Button';
import { Stack } from '@/components/Stack';
import { ThemeMode } from '@/types/themes';
import { useThemeMode } from '@/contexts/ThemeModeProvider';
import { PlusIcon } from '@/components/_svg/icons/PlusIcon';

type InvoiceActionsProps = {
  invoice: Invoice;
};

function InvoiceActions({ invoice }: InvoiceActionsProps) {
  const { themeMode } = useThemeMode();

  return (
    <StyledCard>
      <StatusWrapper>
        <Stack spacing="22px" align={'center'}>
          <Text $mode={themeMode}>Status</Text>
          <Status text={voca.titleCase(invoice.status)} variant={getStatusType(invoice.status)} />
        </Stack>
      </StatusWrapper>

      <Stack spacing="8px">
        <Button variant="variant2" icon={PlusIcon}>
          Edit
        </Button>
        <Button variant="variant4">Delete</Button>
        <Button variant="variant1">Mark as Paid</Button>
      </Stack>
    </StyledCard>
  );
}

// Styled components
const StyledCard = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 20px;
  align-items: center;
  padding-block: 20px;
  padding-inline: 32px;
`;

const Text = styled.p<{ $mode: ThemeMode }>`
  color: var(${(props) => (props.$mode === 'light' ? '--color-07' : '--color-05')});
`;

const StatusWrapper = styled.div`
  margin-inline-end: auto;
`;

export { InvoiceActions };
