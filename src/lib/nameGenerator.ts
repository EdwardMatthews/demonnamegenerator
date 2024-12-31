// 基础音节组合
const syllables = {
  male: {
    prefixes: ["","","","","b","br","d","dr","g","j","k","m","r","s","t","th","tr","v","x","z"],
    vowels: ["a","e","i","o","u","a","a","o","o"],
    middles: ["g","g'dr","g'th","gdr","gg","gl","gm","gr","gth","k","l'g","lg","lgr","llm","lm","lr","lv","n","ngr","nn","r","r'","r'g","rg","rgr","rk","rn","rr","rthr","rz","str","th't","z","z'g","zg","zr","zz"],
    longVowels: ["a","e","i","o","u","a","a","o","o","iu","uu","au","aa"],
    endings: ["d","k","l","ll","m","n","nn","r","th","x","z"],
    finalConsonants: ["ch","d","g","k","l","n","r","s","th","z"]
  },
  female: {
    prefixes: ["","l","m","n","r","s","v","y","z"],
    vowels: ["a","e","i","y","ae","ei","ia","ie"],
    middles: ["l","ll","lr","ls","lth","ly","m","n","nn","ph","r","rr","s","ss","th","v"],
    longVowels: ["a","e","i","ae","ea","ia","ie","ei"],
    endings: ["a","ah","eth","ia","ith","ra","ya"],
    finalConsonants: ["","h","l","n","s","th"]
  }
};

// 预定义的恶魔名字部分
const demonParts = {
  male: {
    prefixes: [
      'Dark', 'Shadow', 'Blood', 'Night', 'Death', 'Doom', 'Hell', 'Chaos',
      'Void', 'Abyss', 'Demon', 'Devil', 'Evil', 'Grim', 'Nether', 'Sin',
      'Soul', 'Storm', 'Terror', 'Wrath', 'Dread', 'Flame', 'Frost'
    ],
    roots: [
      'bane', 'claw', 'fang', 'gore', 'heart', 'mind', 'rage', 'scream',
      'skull', 'spine', 'stone', 'throne', 'wing', 'blade', 'breath', 'crown',
      'death', 'doom', 'fear', 'fire', 'frost', 'fury', 'grave', 'pain'
    ],
    suffixes: [
      'us', 'or', 'ax', 'ix', 'on', 'ius', 'ion', 'um', 'ex', 'ox',
      'th', 'tor', 'cor', 'nox', 'dor', 'thor', 'mor', 'zor', 'gor'
    ]
  },
  female: {
    prefixes: [
      'Night', 'Shadow', 'Blood', 'Moon', 'Star', 'Soul', 'Spirit', 'Dream',
      'Mist', 'Storm', 'Dark', 'Dusk', 'Twilight', 'Dawn', 'Mystic', 'Witch'
    ],
    roots: [
      'heart', 'song', 'dance', 'dream', 'spell', 'charm', 'wish', 'fate',
      'soul', 'spirit', 'mind', 'moon', 'star', 'flame', 'shadow', 'storm'
    ],
    suffixes: [
      'a', 'ia', 'ra', 'na', 'ella', 'ora', 'ira', 'ara', 'yra', 'ena',
      'ess', 'ix', 'trix', 'rix', 'dra', 'tra', 'nya', 'lya', 'mia'
    ]
  }
};

// 经典恶魔名字作为种子
const seedNames = {
  male: [
    "abaddon", "abigor", "aeshma", "agramon", "allocen", "astaroth", 
    "beelzebub", "belphegor", "demogorgon", "euronymous", "geryon", 
    "leviathan", "malphas", "marbas", "moloch", "orias", "samael", "valafar"
  ],
  female: [
    "agares", "alecto", "arachne", "batibat", "carmilla", "empusa", "ereshkigal",
    "hecate", "lamia", "lilith", "megaera", "mormo", "naamah", "nitocris", "proserpine"
  ]
};

// 恶魔称号
const titles = {
  male: [
    "Lord", "Master", "Prince", "Duke", "Count", "Baron",
    "Sovereign", "Emperor", "King", "Overlord", "Ruler"
  ],
  female: [
    "Lady", "Mistress", "Princess", "Duchess", "Countess", "Baroness",
    "Queen", "Empress", "Sovereign", "Ruler", "Matriarch"
  ]
};

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function generateSyllabicName(gender: 'male' | 'female'): string {
  const parts = syllables[gender];
  const nameLength = Math.random() > 0.7 ? 3 : 2;
  let name = '';

  // 添加前缀
  name += getRandomElement(parts.prefixes);
  
  // 生成主体
  for (let i = 0; i < nameLength; i++) {
    name += getRandomElement(parts.vowels);
    name += getRandomElement(i === nameLength - 1 ? parts.endings : parts.middles);
  }

  // 添加结尾
  if (Math.random() > 0.5) {
    name += getRandomElement(parts.longVowels);
    name += getRandomElement(parts.finalConsonants);
  }

  return capitalizeFirstLetter(name);
}

function generateCompoundName(gender: 'male' | 'female'): string {
  const parts = demonParts[gender];
  const usePrefix = Math.random() > 0.5;
  const useSuffix = Math.random() > 0.3;
  
  let name = '';
  
  if (usePrefix) {
    name += getRandomElement(parts.prefixes) + '';
  }
  
  name += capitalizeFirstLetter(getRandomElement(parts.roots));
  
  if (useSuffix) {
    name += getRandomElement(parts.suffixes);
  }
  
  return name;
}

function mutateName(name: string, gender: 'male' | 'female'): string {
  const parts = syllables[gender];
  const demonPartsList = demonParts[gender];
  const mutations = [
    // 替换元音
    (n: string) => n.replace(/[aeiou]/g, () => getRandomElement(parts.vowels)),
    // 添加后缀
    (n: string) => n + getRandomElement([...parts.finalConsonants, ...demonPartsList.suffixes]),
    // 添加长元音
    (n: string) => n + getRandomElement(parts.longVowels),
    // 添加中间音节
    (n: string) => {
      const mid = Math.floor(n.length / 2);
      return n.slice(0, mid) + getRandomElement(parts.middles) + n.slice(mid);
    },
    // 添加恶魔词根
    (n: string) => n + getRandomElement(demonPartsList.roots)
  ];

  return getRandomElement(mutations)(name.toLowerCase());
}

export type Gender = 'male' | 'female' | 'random';

interface GenerateOptions {
  gender?: Gender;
  count?: number;
}

export function generateDemonName(options: GenerateOptions = {}): string {
  const actualGender: 'male' | 'female' = 
    options.gender === 'random' || !options.gender
      ? (Math.random() > 0.5 ? 'male' : 'female')
      : options.gender;

  // 50% 音节生成，25% 复合词生成，25% 经典名字
  const rand = Math.random();
  let name = '';

  if (rand < 0.5) {
    name = generateSyllabicName(actualGender);
  } else if (rand < 0.75) {
    name = generateCompoundName(actualGender);
  } else {
    name = getRandomElement(seedNames[actualGender]);
    // 50% 概率对经典名字进行变异
    if (Math.random() > 0.5) {
      name = mutateName(name, actualGender);
    }
  }

  // 20% 概率添加称号
  if (Math.random() < 0.2) {
    name = `${getRandomElement(titles[actualGender])} ${name}`;
  }

  return name;
}

export function generateMultipleDemonNames(options: GenerateOptions = {}): string[] {
  const { count = 5, ...rest } = options;
  const names = new Set<string>();
  
  while (names.size < count) {
    names.add(generateDemonName(rest));
  }
  
  return Array.from(names);
}
