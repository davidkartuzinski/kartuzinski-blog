import Image from 'next/image';
import styles from './MdxImage.module.css';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure#examples
// https://www.scottohara.me/blog/2019/01/21/how-do-you-figure.html

function MdxImage({ src, alt, width, height, figcaption, position }) {
  const alignment = position ? position : 'center';
  // if there is a figcaption
  if (figcaption) {
    const FigImage = (
      <figure
        style={{ textAlign: alignment }}
        className={styles.figure}
        role='figure'
        aria-label={alt}
      >
        <Image src={src} alt={alt} width={width} height={height} />
        <figcaption className={styles.figcaption}>{figcaption}</figcaption>
      </figure>
    );

    return FigImage;
  }

  // Just an image
  const FigImage = (
    <figure
      style={{ textAlign: alignment }}
      className={styles.figure}
      role='figure'
      aria-label={alt}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </figure>
  );
  return FigImage;
}
export default MdxImage;
