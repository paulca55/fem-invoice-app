import styled from 'styled-components';
import { rem } from 'polished';

const StyledHeadingLg = styled.h1`
  font-weight: 700;
  font-size: ${rem(36)};
  line-height: 1.1;
  letter-spacing: 0;
`;

const StyledHeadingMd = styled(StyledHeadingLg)`
  font-size: ${rem(24)};
`;
const StyledHeadingSmVariant = styled(StyledHeadingLg)`
  font-size: ${rem(15)};
`;

const StyledHeadingSm = styled(StyledHeadingSmVariant)`
  line-height: 1.6;
`;

export { StyledHeadingSm, StyledHeadingSmVariant, StyledHeadingMd, StyledHeadingLg };
