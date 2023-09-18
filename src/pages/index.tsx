import { Sidebar } from '@/components/Sidebar';
import styled from 'styled-components';

function Home() {
  return (
    <PageWrapper>
      <Sidebar />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 103px 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
`;

export default Home;
