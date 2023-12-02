// import packageJson from '../../../package.json';
import content from './content';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:gaguerreiro@gmail.com');

  return 'Opening mailto:gaguerreiro@gmail.com...';
};

// export const vi = async (args: string[]): Promise<string> => {
//   return `why use vi? try 'emacs'.`;
// };

// export const vim = async (args: string[]): Promise<string> => {
//   return `why use vim? try 'emacs'.`;
// };

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/guerreiro/termfolio', '_blank');
  }, 1000);

  return 'Opening repository...';
};

// export const donate = async (args?: string[]): Promise<string> => {
//   window.open(packageJson.funding.url, '_blank');

//   return 'Opening donation url...';
// };

export const banner = (args?: string[]): string => {
  const randBanner = content.banners[Math.floor(Math.random() * content.banners.length)];
  
  return `
  ${randBanner}

Welcome to my personal website!
Hi! I'm Gabriel, a full stack developer, techleader and now an entrepreneur!

This project is just a mix of portfolio, resumé and sandbox.
Feel free to use this terminal to know something about me, get my contacts and do some others stuffs...

--
Type 'help' to see the available commands.
This project is open-source 🎉 type 'repo' to check out the repository.
--
`;
};
