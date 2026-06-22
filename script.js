const button = document.getElementById('revealButton');
const tarotButton = document.getElementById('tarotButton');
const futureText = document.getElementById('futureText');
const tarotText = document.getElementById('tarotText');
const poops = document.querySelectorAll('.poop');

const futures = [
  'Budoucnost člověka je plná nových začátků, kreativních snů a radostných setkání.',
  'Za několik let se objeví šance, která změní tvůj život k lepšímu.',
  'Nadcházející dny přinesou světlo, odvahu a nové přátelství.',
  'Tvoje budoucnost má růžové odlesky – bude plná veselí a odhodlání.',
  'V krátké době pocítíš novou jiskru, která tě nasměruje na tvou cestu.',
  'Dnes se otevře nová cesta, která tě povede k větší radosti.',
  'Brzy objevíš tvoje nové oblíbené místo, kde můžeš nabírat energii.',
];

const tarotCards = [
  {
    name: 'Kolo štěstí',
    text: 'Kolo štěstí – změna je na cestě, připrav se na nové možnosti.',
    image: 'https://images.unsplash.com/photo-1519518561-6f7e00b0d2db?auto=format&fit=crop&w=500&q=80',
    alt: 'Tarotová karta Kolo štěstí s mystickým efektem',
  },
  {
    name: 'Síla',
    text: 'Síla – máš v sobě odvahu zvládnout budoucí výzvy.',
    image: 'https://images.unsplash.com/photo-1541459286098-1f83b7a7fa9d?auto=format&fit=crop&w=500&q=80',
    alt: 'Tarotová karta Síla s dramatickým osvětlením',
  },
  {
    name: 'Hvězda',
    text: 'Hvězda – naděje a inspirace se objeví právě teď.',
    image: 'https://images.unsplash.com/photo-1516897982868-9df4352d1f6d?auto=format&fit=crop&w=500&q=80',
    alt: 'Tarotová karta Hvězda s hvězdným pozadím',
  },
  {
    name: 'Mírnost',
    text: 'Mírnost – najdeš rovnováhu a klid mezi tvými plány.',
    image: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=500&q=80',
    alt: 'Tarotová karta Mírnost s jemnou atmosférou',
  },
  {
    name: 'Mág',
    text: 'Mág – máš moc tvořit svou budoucnost s jasným záměrem.',
    image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=500&q=80',
    alt: 'Tarotová karta Mág s mystickou energií',
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
  futureText.textContent = futures[index];
  animatePoop();
});

tarotButton.addEventListener('click', () => {
  const index = Math.floor(Math.random() * tarotCards.length);
  const card = tarotCards[index];
  tarotText.textContent = `Tarot dne: ${card.text}`;
  const tarotImage = document.getElementById('tarotImage');
  tarotImage.src = card.image;
  tarotImage.alt = card.alt;
  animatePoop();
});
