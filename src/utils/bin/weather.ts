import { getWeather } from '../../api';

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');

  if (!city) {
    return 'Usage: weather [city]. Example: weather sao paulo';
  }

  const weather = await getWeather(city);

  return weather;
};
