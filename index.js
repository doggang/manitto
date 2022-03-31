

const selectIndex = (totalIndex, selectingNumber) => {
  let randomIndexArray = [];
  let j=0;
  for (i=0; i<selectingNumber; i++) {
    randomNum = Math.floor(Math.random() * totalIndex+1);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum); 
    } else {
      i--;
    }
  }
  var result = [];
  var real=[];
  for(i=0; i<randomIndexArray.length; i+=2){
    result.push(randomIndexArray.slice(i, i+2));
  }
  for(j=0;j<25;j++){
    for(k=0;k<=1;k++){
      real.push(student[result[j][k]]);
    }
  }
  var qwer = [];
  for(i=0; i<real.length; i+=2){
    qwer.push(real.slice(i, i+2));
  }
  for(q=0; q<25; q++){
    console.log(qwer[q]);
  }
  return qwer;
}

const val = document.getElementById('value');

const student = [0,'김도현', '고다희','권지윤','김선균','김소현','류동연','채성혁','신선진','염민서','일라','정다영','정윤서','윤지호','최동규','최종민','윤수정','가현','희연',
'강설아','강진하','강희수','김가은','김민주','김서연','김세나','김세준','김세륜','김시은','김재민','김준원','김현도','다예','동현','박성휘','박시영','박채윤','변민정','세린',
'손성화','승빈','신지안','연수','연진','오은지','위다은','이다애','이다인','이시온','이찬우','이형민','장준용','정지원','조윤서','준서','최선혜','홍수민',
'아이부케','신동훈','유민호','강혜원','양은서'];

function ck(){
  selectIndex(50, 50);
}
