const button = document.getElementById('revealButton');
const tarotButton = document.getElementById('tarotButton');
const futureText = document.getElementById('futureText');
const tarotText = document.getElementById('tarotText');
const poops = document.querySelectorAll('.poop');
const koalaFace = document.querySelector('.koala-face');
const questionInput = document.getElementById('questionInput');

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

const animatePoop = () => {
  poops.forEach((poop, index) => {
    poop.classList.remove('fly');
    void poop.offsetWidth;
    poop.style.animationDelay = `${index * 0.08}s`;
    poop.classList.add('fly');
  });
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
  animatePoop();
});

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
  animatePoop();
});
