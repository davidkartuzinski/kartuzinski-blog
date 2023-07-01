export function shortenParagraph(paragraph, char) {
  // https://stackoverflow.com/a/55069154/8867242
  let trmStr = (input, value) => {
    let reg = `^.{${value}}.*?\\b`;
    let regex = new RegExp(reg);
    return input.match(regex);
  };

  return trmStr(paragraph, char).concat('...');
}

// https://www.30secondsofcode.org/js/s/slugify
export function slugify(string) {
  return string
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
