import  { useState, useEffect } from 'react';
import { Homework24Wrapper,  JokeCard,  JokeCardStyle } from './styles';
import styled from '@emotion/styled';
import Button from 'components/Button/Button';


const Homework24: React.FC = () => {
  const [joke, setJoke] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      if (!response.ok) {
        throw new Error('Ошибка при получении данных');
      }
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
      setError(null);
      alert('Вы получили новую шутку');
    } catch (error) {
      setError('Ошибка при получении данных');
      setJoke(null);
      alert('Ошибка при получении данных');
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Homework24Wrapper>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {joke && (
        <JokeCardStyle>
          <JokeCard>{joke}</JokeCard>
        </JokeCardStyle>
      )}
      <Button name="Получить новую шутку" onClick={fetchJoke} />
    </Homework24Wrapper>
  );
};

export default Homework24;