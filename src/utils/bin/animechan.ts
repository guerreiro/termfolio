import { getAnimechan } from '../../api';

export const animechan = async (args: string[]): Promise<string> => {
  // console.log('args', args)
  const name = args.find(i => {
    return i.split('=')[0] == '--name'
  })?.split('=')[0] || '';

  const title = args.find(i => {
    return i.split('=')[0] == '--title'
  })?.split('=')[0] || '';

  const quote = await getAnimechan(title, name);

  return `"${quote.quote}" - ${quote.character} (${quote.anime})`;
};
