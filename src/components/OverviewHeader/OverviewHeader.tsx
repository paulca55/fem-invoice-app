import styled from 'styled-components';
import { StyledHeadingLg } from '@/components/styled/StyledHeadings';
import { rem } from 'polished';
import { Button } from '@/components/Button';
import { PlusIcon } from '@/components/svg/icons/PlusIcon';
import { db } from '@/db';
import { generateRandomInvoiceId } from '@/utilities';

type OverviewHeaderProps = {
  heading: string;
  subheading: string;
};

async function handleAddInvoice() {
  const id = await db.invoices.add({
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
  return (
    <StyledContainer>
      <div>
        <StyledHeadingLg>{heading}</StyledHeadingLg>
        <StyledSubheading>{subheading}</StyledSubheading>
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
`;

const StyledSubheading = styled.p`
  color: var(--color-06);
  margin-top: ${rem(4)};
`;

const StyledActionsWrapper = styled.div`
  margin-left: auto;
`;

export { OverviewHeader };
