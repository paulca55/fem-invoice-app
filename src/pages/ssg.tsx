import styled from 'styled-components';
import { BackButton } from '@/components/BackButton';
import { useRouter } from 'next/router';
function SsgPage({ pokemon = [] }) {
  const router = useRouter();

  return (
    <Container>
      <BackButton onClick={() => router.back()}>Go back</BackButton>

      <div>
        {pokemon.map((poke: any, index) => (
          <p key={index}>{poke?.name}</p>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-block-start: 100px;
`;

export const getStaticProps = async () => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${Math.ceil(Math.random() * 30)}`,
  );
  const pokemon = await data.json();

  console.log('SSG: ', pokemon.results);

  return {
    props: {
      pokemon: pokemon.results,
    },
    revalidate: 10,
  };
};

export default SsgPage;
