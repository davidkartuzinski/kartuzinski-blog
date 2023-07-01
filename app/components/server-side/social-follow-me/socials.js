import {
  DiscordUrl,
  GitHubUrl,
  LinkedInUrl,
  TwitterUrl,
} from '../../../globals/global-data';
import { DiscordIcon, GithubIcon, LinkedInIcon, TwitterIcon } from '../icons';

const socials = [
  {
    id: 1,
    label: 'Twitter',
    url: TwitterUrl,
    title: 'Follow Me on Twitter',
    icon: <TwitterIcon size='30' />,
    css: '--twitter',
  },
  {
    id: 2,
    label: 'GitHub',
    url: GitHubUrl,
    title: 'Follow Me on GitHub',
    icon: <GithubIcon size='30' />,
    css: '--github',
  },
  {
    id: 3,
    label: 'LinkedIn',
    url: LinkedInUrl,
    title: 'Follow Me or Connect on LinkedIn',
    icon: <LinkedInIcon size='30' />,
    css: '--linkedin',
  },
  {
    id: 4,
    label: 'Discord',
    url: DiscordUrl,
    title: 'Connect on Discord',
    icon: <DiscordIcon size='30' />,
    css: '--discord',
  },
];

export default socials;
