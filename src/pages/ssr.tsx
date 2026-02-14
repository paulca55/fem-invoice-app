import styled from 'styled-components';
import { BackButton } from '@/components/BackButton';
import { useRouter } from 'next/router';
import Link from 'next/link';

function SsrPage({ pokemon = [] }) {
  const router = useRouter();

  return (
    <Container>
      <BackButton onClick={() => router.back()}>Go back</BackButton>

      <div>
        {pokemon.map((poke: any, index) => (
          <p key={index}>{poke?.name}</p>
        ))}
      </div>

      <div>
        <Link href="/csr">CSR</Link>
      </div>
      <div>
        <Link href="/ssg">SSG</Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-block-start: 100px;
`;

export const getServerSideProps = async () => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${Math.ceil(Math.random() * 30)}`
  );
  const pokemon = await data.json();

  console.log('SSR: ', pokemon.results);

  return {
    props: {
      pokemon: pokemon.results,
    },
  };
};

export default SsrPage;
