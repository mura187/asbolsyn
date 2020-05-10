export const getTypographyElement = (variant: string):string => {
  switch (variant) {
    case 'headline': return 'h1';
    case 'h1': return 'h1';
    case 'h2': return 'h2';
    case 'text': return 'p';
    case 'subtext': return 'p';
    case 'subtextunderlined': return 'p';
    case 'subtextmed': return 'p';
    case 'tag': return 'span';
    case 'xsmall': return 'span';
    case 'xsmallunderlined': return 'span';
    case 'xsmallmed': return 'span';
    case 'xsmallunderlined': return 'span';
    case 'xxsmall': return 'span';
    case 'xxsmallmed': return 'span';
  }
  return 'p';
};
