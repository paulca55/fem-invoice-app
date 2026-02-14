import styled from 'styled-components';
import { BackButton } from '@/components/BackButton';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function CsrPage() {
  const router = useRouter();

  const [pokemon, setPokemon] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${Math.ceil(Math.random() * 30)}`
      );
      const pokemon = await data.json();

      console.log('CSR: ', pokemon.results);

      setPokemon(pokemon.results);
    })();
  }, []);

  return (
    <Container>
      <BackButton
        onClick={() => {
          setCount((count) => count + 1);
          // router.back()
        }}
      >
        Count {count}
      </BackButton>

      {!!pokemon.length ? (
        <div>
          {pokemon.map((poke: any, index) => (
            <p key={index}>{poke?.name}</p>
          ))}
        </div>
      ) : (
        <p>Loading</p>
      )}

      <div>
        <Link href="/ssg">SSG</Link>
      </div>
      <div>
        <Link href="/ssr">SSR</Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-block-start: 100px;
`;

export default CsrPage;
