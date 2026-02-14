import styled from 'styled-components';
import { rem } from 'polished';
import { Button } from '@/components/Button';
import { PlusIcon } from '@/components/_svg/icons/PlusIcon';
import { addInvoice } from '@/db';
import { generateRandomInvoiceId } from '@/utilities';
import { StyledHeadingLg } from '@/components/styled';
import { type ThemeMode } from '@/types/themes';
import { useThemeMode } from '@/contexts/ThemeModeProvider';

type OverviewHeaderProps = {
  heading: string;
  subheading: string;
};

async function handleAddInvoice() {
  await addInvoice({
    invoiceId: generateRandomInvoiceId(),
    createdAt: '05-11-2021',
    paymentDue: '12-11-2021',
    description: 'Website development',
    paymentTerms: 30,
    clientName: 'Paul Cass',
    clientEmail: '',
    status: 'paid',
    senderAddress: {
      street: '176 High Hope Street',
      city: 'Crook',
      postCode: 'DL15 9JA',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
    },
    items: [
      {
        name: 'Website development',
        quantity: 1,
        price: 50050,
        total: 50050,
      },
    ],
    total: 60012,
  });
}

function OverviewHeader({ heading, subheading }: OverviewHeaderProps) {
  const { themeMode } = useThemeMode();

  return (
    <StyledContainer>
      <div>
        <StyledHeadingLg>{heading}</StyledHeadingLg>
        <StyledSubheading $mode={themeMode}>{subheading}</StyledSubheading>
      </div>

      <StyledActionsWrapper>
        <Button icon={PlusIcon} onClick={handleAddInvoice}>
          New invoice
        </Button>
      </StyledActionsWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const StyledSubheading = styled.p<{ $mode: ThemeMode }>`
  color: var(${(props) => (props.$mode === 'light' ? '--color-06' : '--color-05')});
  padding-block-start: ${rem(4)};
`;

const StyledActionsWrapper = styled.div`
  margin-inline-start: auto;
`;

export { OverviewHeader };
