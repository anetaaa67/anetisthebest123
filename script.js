const button = document.getElementById('revealButton');
const tarotButton = document.getElementById('tarotButton');
const futureText = document.getElementById('futureText');
const tarotText = document.getElementById('tarotText');
const futurePoops = document.querySelectorAll('#futureCard .poop');
const tarotPoops = document.querySelectorAll('#tarotCard .poop');
const koalaFace = document.querySelector('.koala-face');
const questionInput = document.getElementById('questionInput');
const answerText = document.getElementById('answerText');
const generateAnswerButton = document.getElementById('generateAnswerButton');
const zodiacInput = document.getElementById('zodiacInput');
const showZodiacButton = document.getElementById('showZodiacButton');
const zodiacDescription = document.getElementById('zodiacDescription');

const zodiacSigns = {
  beran: 'Energie, odvaha a přímé jednání tě teď posunují kupředu.',
  byk: 'Stabilita, smysl pro krásu a trpělivost jsou tvé silné stránky.',
  blizenci: 'Komunikace, zvědavost a přizpůsobivost ti dnes pomáhají najít nové cesty.',
  rak: 'Citlivost, péče a intuice ti umožní vytvořit bezpečné prostředí.',
  lev: 'Sebevědomí, tvořivost a zábava jsou právě teď v centru pozornosti.',
  panna: 'Praktičnost, pořádek a smysl pro detail ti pomohou vyřešit důležité věci.',
  vahy: 'Hledáš rovnováhu, krásu a spravedlnost v každém rozhodnutí.',
  stir: 'Intenzita, hloubka a přemýšlení otevírají nové možnosti transformace.',
  strelec: 'Dobrodružství, volnost a optimismus ti dávají chuť vyrazit dál.',
  kozoroh: 'Cílevědomost, disciplína a zodpovědnost tě posouvají směrem k úspěchu.',
  vodnar: 'Originalita, přátelství a nápady tě spojují s novými vizemi.',
  ryby: 'Empatie, snění a soucit ti pomáhají pochopit životní proud.',
};

const futures = [
  'Vaše budoucnost je plná nových začátků a zajímavých cest.',
  'Za několik let se ve vaší budoucnosti objeví neočekávané změny.',
  'Vaši cestu osvítí nové světlé místa.',
  'Vaše budoucnost má růžové odlesky a velkou radost.',
  'Vaši čekají důvěra, radost a nové začátky.',
  'V krátké době vás čekají veliké změny a štěstí.',
  'Brzy objevíte nové cesty a nekonečné možnosti.',
];

const tarotCards = [
  {
    name: 'Kolo štěstí',
    text: 'Kolo štěstí – vaše budoucnost se změní k lepšímu.',
    emoji: '🎡',
  },
  {
    name: 'Síla',
    text: 'Síla – v tobě vidím odvahu a sílu zvládnout všechny výzvy.',
    emoji: '🦁',
  },
  {
    name: 'Hvězda',
    text: 'Hvězda – naději a světlo v tvoji budoucnosti.',
    emoji: '⭐',
  },
  {
    name: 'Mírnost',
    text: 'Mírnost – najdi si čas na odpočinek a rovnováhu.',
    emoji: '⚖️',
  },
  {
    name: 'Mág',
    text: 'Mág – máš moc tvořit svojí vlastní budoucnost.',
    emoji: '🪄',
  },
];

const animatePoop = (poopElements) => {
  poopElements.forEach((poop, index) => {
    poop.classList.remove('fly');
    void poop.offsetWidth;
    poop.style.animationDelay = `${index * 0.08}s`;
    poop.classList.add('fly');
  });
};

const responsePools = {
  love: [
    'Láska vstupuje do tvého života s jemným a stabilním tempem.',
    'Vztah se může prohloubit, pokud budeš mluvit otevřeně a upřímně.',
    'Buď trpělivý/á — nové city se začnou rozvíjet brzy.',
  ],
  career: [
    'Práce se postupně srovná, když přijmeš nové výzvy s klidem.',
    'Očekávej nabídku, která ti pomůže růst a získat více jistoty.',
    'Důvěřuj svému úsudku ve své kariéře a nenech se rozhodit drobnými změnami.',
  ],
  money: [
    'Finanční situace získá lepší vyhlídky, když zůstaneš rozumný/á.',
    'Brzy najdeš nové způsoby, jak získat více stability.',
    'Drobné úspory se přes čas promění v větší pocit bezpečí.',
  ],
  health: [
    'Pozornost ke zdraví ti přinese lepší energii a klid.',
    'Dobrý režim a odpočinek ti pomohou obnovit sílu.',
    'Zaměř se na malé kroky, které udělají velký rozdíl v pohodě.',
  ],
  travel: [
    'Cesta před tebou bude obohacující, zkus si udělat místo pro nové zážitky.',
    'Možná se objeví příležitost k výletu nebo malé změně prostředí.',
    'Otevři se dobrodružství a dopřej si poznávání nových míst.',
  ],
  default: futures,
};

const getQuestionCategory = (question) => {
  const normalized = question.toLowerCase();
  if (/láska|partner|milovat|srdce|vztah|romance|koukání/.test(normalized)) return 'love';
  if (/práce|kariér|job|zaměstn|projekt|koleg|šéf|odměna/.test(normalized)) return 'career';
  if (/peníze|finance|plat|výplata|dluh|úspora|bohatství/.test(normalized)) return 'money';
  if (/zdraví|nemoc|léčba|energie|síla|odpočinek|fit|fitness/.test(normalized)) return 'health';
  if (/cest|dovolená|výlet|zájezd|spojeni|let|vlak/.test(normalized)) return 'travel';
  return 'default';
};

const chooseResponse = (question) => {
  const category = getQuestionCategory(question);
  const pool = responsePools[category] || responsePools.default;
  return pool[Math.floor(Math.random() * pool.length)];
};

const normalizeSign = (sign) => {
  return sign
    .trim()
    .toLowerCase()
    .replace(/[áàâä]/g, 'a')
    .replace(/[čć]/g, 'c')
    .replace(/[ď]/g, 'd')
    .replace(/[éěè]/g, 'e')
    .replace(/[íîï]/g, 'i')
    .replace(/[ň]/g, 'n')
    .replace(/[óôö]/g, 'o')
    .replace(/[ř]/g, 'r')
    .replace(/[š]/g, 's')
    .replace(/[ť]/g, 't')
    .replace(/[úůù]/g, 'u')
    .replace(/[ý]/g, 'y')
    .replace(/[ž]/g, 'z');
};

const capitalizeFirst = (value) => value.charAt(0).toUpperCase() + value.slice(1);

const showZodiacDescription = () => {
  const sign = zodiacInput.value.trim();
  if (!sign) {
    zodiacDescription.textContent = 'Napiš prosím své znamení.';
    return;
  }

  const normalizedSign = normalizeSign(sign);
  const description = zodiacSigns[normalizedSign];
  zodiacDescription.textContent = description
    ? `${capitalizeFirst(sign)}: ${description}`
    : 'Neznámé znamení. Zkus napsat například Beran, Býk, Blíženci, Rak, Lev, Panna, Váhy, Štír, Střelec, Kozoroh, Vodnář nebo Ryby.';
};

const generateAnswer = () => {
  const question = questionInput.value.trim();
  if (!question) {
    answerText.textContent = 'Napiš prosím otázku, aby se mohla vygenerovat odpověď.';
    return;
  }

  const response = chooseResponse(question);
  answerText.textContent = `Odpověď na otázku "${question}": ${response}`;
};

button.addEventListener('click', () => {
  const index = Math.floor(Math.random() * futures.length);
  let response = futures[index];
  
  const question = questionInput.value.trim();
  if (question) {
    response = `Na tvou otázku "${question}":\n\n${response}`;
  }
  
  futureText.textContent = response;
  koalaFace.textContent = '🐼';
  answerText.textContent = question ? `Odpověď: ${response}` : 'Zadej otázku a klikni na tlačítko.';
  animatePoop(futurePoops);
});

generateAnswerButton.addEventListener('click', generateAnswer);
showZodiacButton.addEventListener('click', showZodiacDescription);

tarotButton.addEventListener('click', () => {
  const index = Math.floor(Math.random() * tarotCards.length);
  const card = tarotCards[index];
  
  const question = questionInput.value.trim();
  let tarotResponse = `Tarot dne: ${card.text}`;
  if (question) {
    tarotResponse = `Na tvou otázku "${question}":\n\n${tarotResponse}`;
  }
  
  tarotText.textContent = tarotResponse;
  const tarotEmoji = document.getElementById('tarotEmoji');
  tarotEmoji.textContent = card.emoji;
  answerText.textContent = question ? `Odpověď: ${tarotResponse}` : 'Zadej otázku a klikni na tlačítko.';
  animatePoop(tarotPoops);
});
