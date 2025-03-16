const quotes = [
  {
    quote: '중요한 것은 꺾이지 않는 마음',
    author: 'Deft',
  },
  {
    quote: '느리구나, 쓰러지는 것조차.',
    author: '쿠치키 뱌쿠야',
  },
  {
    quote: '동경은, 이해로부터 가장 먼 감정이야.',
    author: '아이젠 소스케',
  },
  {
    quote: '내가 하늘에 서겠다.',
    author: '아이젠 소스케',
  },
  {
    quote: '너무 강한 말은 쓰지마... 약해 보인다구.',
    author: '아이젠 소스케',
  },
  {
    quote: '도대체 언제부터- 경화수월을 안 쓰고 있다고 착각한 거지?',
    author: '아이젠 소스케',
  },
  {
    quote: '언성을, 그렇게 언성을 높이지 마라.',
    author: '아이젠 소스케',
  },
  {
    quote: '란기쿠. 네가, 울지 않아도 되게 해줄게.',
    author: '이치마루 긴',
  },
  {
    quote: '엎드려 살지 마라. 일어나 죽는 거다.',
    author: '야마모토 겐류사이 시게쿠니',
  },
  {
    quote:
      '검을 잡지 않으면 너를 지킬 수 없어 검을 잡을 채로는 너를 끌어안을 수 없어.',
    author: '이치마루 긴',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
