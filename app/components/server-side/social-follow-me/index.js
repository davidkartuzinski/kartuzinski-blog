import socials from './socials.js';
import styles from './social-follow-me.module.css';

function SocialFollowMe() {
  return (
    <div aria-label='Follow Me on Social Media' className={styles.socials}>
      <ul>
        {socials.map(({ id, url, title, icon, css }) => (
          <li key={id}>
            <a
              title={title}
              href={url}
              style={{ color: `var(${css})` }}
              target='_blank'
              rel='noopener noreferrer'
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialFollowMe;
