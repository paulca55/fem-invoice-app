import styled from 'styled-components';
import { StyledHeadingLg } from '@/components/styled/StyledHeadings';
import { rem } from 'polished';
import { Button } from '@/components/Button';
import { PlusIcon } from '@/components/svg/icons/PlusIcon';

type OverviewHeaderProps = {
  heading: string;
  subheading: string;
};

function OverviewHeader({ heading, subheading }: OverviewHeaderProps) {
  return (
    <StyledContainer>
      <div>
        <StyledHeadingLg>{heading}</StyledHeadingLg>
        <StyledSubheading>{subheading}</StyledSubheading>
      </div>

      <StyledActionsWrapper>
        <Button icon={PlusIcon}>New invoice</Button>
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
