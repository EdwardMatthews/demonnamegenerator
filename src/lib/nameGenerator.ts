const prefixes = [
  'Dark', 'Shadow', 'Blood', 'Night', 'Death', 'Doom', 'Hell', 'Chaos',
  'Void', 'Abyss', 'Demon', 'Devil', 'Evil', 'Grim', 'Nether', 'Sin',
  'Soul', 'Spirit', 'Storm', 'Terror', 'Wrath', 'Dread', 'Flame', 'Frost'
];

const roots = [
  'bane', 'claw', 'fang', 'gore', 'heart', 'mind', 'rage', 'scream',
  'skull', 'spine', 'stone', 'throne', 'wing', 'blade', 'breath', 'crown',
  'death', 'doom', 'fear', 'fire', 'frost', 'fury', 'grave', 'pain'
];

const suffixes = [
  'us', 'or', 'ax', 'ix', 'on', 'ius', 'ion', 'um', 'ex', 'ox',
  'th', 'tor', 'trix', 'cor', 'nox', 'dor', 'thor', 'mor', 'zor', 'gor'
];

function getRandomElement(array: string[]): string {
  return array[Math.floor(Math.random() * array.length)];
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function generateDemonName(): string {
  const usePrefix = Math.random() > 0.5;
  const useSuffix = Math.random() > 0.3;
  
  let name = '';
  
  if (usePrefix) {
    name += getRandomElement(prefixes) + '';
  }
  
  name += capitalizeFirstLetter(getRandomElement(roots));
  
  if (useSuffix) {
    name += getRandomElement(suffixes);
  }
  
  return name;
}

export function generateMultipleDemonNames(count: number): string[] {
  const names = new Set<string>();
  
  while (names.size < count) {
    names.add(generateDemonName());
  }
  
  return Array.from(names);
}
