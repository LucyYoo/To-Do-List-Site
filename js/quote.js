const quotes = [
    {
        quote: "한 번 만난 인연은 잊혀지는 것이 아니라 잊고 있을 뿐이다.",
        work: "센과 치히로의 행방불명"
    },
    {
        quote: "키키, 그렇게 겉모습에 신경쓰지 말거라. 중요한 건 마음이야.",
        work: "마녀 배달부 키키"
    },
    {
        quote: "난 충분히 도망쳐왔어. 이제 지켜야 할 게 생겼어. 바로 너야.",
        work: "하울의 움직이는 성"
    },
    {
        quote: "마은은 원래 무거운거야.",
        work: "하울의 움직이는 성"
    },
    {
        quote: "흐림없는 눈으로 세상을 바라보겠습니다.",
        work: "원령공주"
    },
    {
        quote: "그럴 땐 그냥 포기해. 그러다가 갑자기 그리고 싶어지지.",
        work: "마녀 배달부 키키"
    },
    {
        quote: "너무 겉모습에만 신경 쓰지마. 중요한 건 마음 가짐이야.",
        work: "마녀 배달부 키키"
    },
    {
        quote: "정말로 좋아하는 것은 좋아하는 이유가 발견되지 않는다.",
        work: "이웃집 토토로"
    },
    {
        quote: "어린시절에만 당신을 찾아오는 신기한 만남.",
        work: "이웃집 토토로"
    },
    {
        quote: "영원히 어리고 순수했으면.",
        work: "벼랑 위에 포뇨"
    },
    {
        quote: "넌 너의 시간을 살아가야 해.",
        work: "고양이의 보은"
    }
]

const $quote = document.querySelector('#quote span:first-child');
const $work = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

$quote.innerHTML = todayQuote.quote;
$work.innerHTML = todayQuote.work;

