const quiz = [
{question:'ゲーム市場、最も売れたゲーム機は次のうちどれ？',answers:[
    'スーパーファミコン',
    'プレイステーション２',
    'ニンテンドースイッチ',
    'ニンテンドーDS' ],
 correct:'ニンテンドーDS'
},
{question:'看板ゲームは？',answers:[
    '星のカービィ',
    'ポケモン',
    'MOTHER2',
    'トムとカズゥイの大冒険' ],
 correct:'ポケモン'},
{question:'ファイナルファンタジーの主人公は？',answers:[
    'クラウド',
    'サトシ',
    'ルフィ',
    'ナルト' ],
 correct:'クラウド'}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = ()=>{

    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    const $button = document.getElementsByTagName('button');
    let buttonIndex = 0;
    
    while(buttonIndex<buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e)=>{
    if(quiz[quizIndex].correct===e.target.textContent){
        alert('正解！');
        score++;
    }else{
        alert('不正解！');
    }

    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        alert('終了! あなたの正解数は'　+score+'/'+quizLength);
    }
}

let handlerIndex = 0;

while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}




