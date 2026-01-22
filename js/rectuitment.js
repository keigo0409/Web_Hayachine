// 社員データ
const staffData = [
    {
        img: '../img/recruit-peaple.png',
        year: '2024年入社(1年目)',
        subtitle: '業界未経験で入社',
        name: 'K.T',
        description: '一般住宅からビルまで、さまざまな現場で給排水設備の施工を担当しています。最初は専門用語も多く不安でしたが、先輩方が丁寧に教えてくれたおかげで、今では図面を見ながら自分で段取りを組めるようになりました。水まわりは生活に直結する大切な設備なので、工事完了後にお客様から『助かったよ』と言われると本当にやりがいを感じます。'
    },
    {
        img: '../img/recruit-peaple1.png',
        year: '2023年入社(2年目)',
        subtitle: '異業種から転職',
        name: 'R.S',
        description: '前職は全く違う業界でしたが、手に職をつけたいと思い転職しました。未経験からのスタートでしたが、資格取得のサポートもあり、着実にスキルアップできています。チームワークの良さが当社の魅力です。'
    },
    {
        img: '../img/recruit-peaple2.png',
        year: '2022年入社(3年目)',
        subtitle: '地元で働きたくて入社',
        name: 'S.Y',
        description: '3年目になり、後輩の指導も任されるようになりました。地元のインフラを守る仕事にやりがいを感じています。自分の成長を実感できる職場です。'
    },
    {
        img: '../img/recruit-peaple3.png',
        year: '2020年入社(5年目)',
        subtitle: '専門学校卒業後に入社',
        name: 'H.I',
        description: '現場のリーダーとして責任ある仕事を任されています。地域のインフラを支えているという誇りを持って働いています。若手の育成にも力を入れています。'
    },
    {
        img: '../img/recruit-peaple4.png',
        year: '2017年入社(8年目)',
        subtitle: '資格を活かして入社',
        name: 'N.K',
        description: '技術を磨き続けて8年。今では複雑な工事も担当しています。会社のサポートで様々な資格も取得でき、やりがいのある仕事です。'
    },
    {
        img: '../img/recruit-peaple5.png',
        year: '2015年入社(10年目)',
        subtitle: 'ベテラン技術者',
        name: 'M.O',
        description: '10年間この会社で働いてきました。若手の育成にも力を入れており、会社全体で成長していける環境があります。これからも地域に貢献していきたいです。'
    }
];

let currentIndex = 0;

// モーダル要素の取得
const modal = document.getElementById('modal');
const modalImg = modal.querySelector('.modal-img');
const modalYear = modal.querySelector('.modal-year');
const modalSubtitle = modal.querySelector('.modal-subtitle');
const modalName = modal.querySelector('.modal-name');
const modalDescription = modal.querySelector('.modal-description');
const modalClose = modal.querySelector('.modal-close');
const modalOverlay = modal.querySelector('.modal-overlay');
const modalPrev = modal.querySelector('.modal-prev');
const modalNext = modal.querySelector('.modal-next');

// モーダルの内容を更新
function updateModal(index) {
    const data = staffData[index];
    modalImg.src = data.img;
    modalYear.textContent = data.year;
    modalSubtitle.textContent = data.subtitle;
    modalName.textContent = data.name;
    modalDescription.textContent = data.description;
    currentIndex = index;
}

// カードクリックでモーダル表示
const recruitmentCards = document.querySelectorAll('.recruitment-card');
recruitmentCards.forEach((card, index) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        updateModal(index);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// 前へ
modalPrev.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + staffData.length) % staffData.length;
    updateModal(newIndex);
});

// 次へ
modalNext.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % staffData.length;
    updateModal(newIndex);
});

// 閉じる処理
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// キーボード操作
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') modalPrev.click();
        if (e.key === 'ArrowRight') modalNext.click();
    }
});
