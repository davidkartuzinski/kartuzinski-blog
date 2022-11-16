export function shortenParagraph(paragraph, char) {
  // https://stackoverflow.com/a/55069154/8867242
  let trmStr = (input, value) => {
    let reg = `^.{${value}}.*?\\b`;
    let regex = new RegExp(reg);
    return input.match(regex);
  };

  return trmStr(paragraph, char).concat('...');
}
