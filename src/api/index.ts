import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getBio = async () => {
  const { data } = await axios.get(config.bioUrl);

  return data;
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getAnimechan = async (title?: String, name?: String) => {
  const { data } = await axios.get(`https://animechan.xyz/api/random`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  // const { data } = await axios.get('https://animechan.xyz/api/random/anime?title=naruto');
  // const { data } = await axios.get('https://animechan.xyz/api/random/character?name=naruto');

  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};
