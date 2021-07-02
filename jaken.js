// get value of input_box
function getCount(){
  var nameField = document.getElementById('amount_box').value;
  return nameField;
}


// hand を捜す


function findHand(){
  var x = Math.random();
  if (x<1/3) {
    return "ぐー";
  }else if (x<2/3) {
    return "パー";
  }else {
    return "ちょうき";
  }
}

// winnerの処理

function getWinner_Hand(){
  const names = [];
  const hands = [];
  for (var i  = 0; i < Number(getCount()); i++ ){
    names.push(i);
  }
  for (var i  = 0; i < Number(getCount()); i++ ){
    hands.push(findHand());
  }
  console.log(names);
  console.log(hands);

  var goo = 0;
  var choki = 0;
  var paa = 0;

  for (var i = 0; i < hands.length ; i ++){
    if(hands[i] =="ぐー" ){
      goo = 1;
    }else if (hands[i] == "パー") {
      paa = 1;
    }else {
      choki =1 ;
    }
  };

  // if there are only 2 types

  if (goo + choki + paa !=2){
    return "";
  }else if (goo == 1) {
    if(choki==1){
      return  "ぐー";
    }else{
      return "パー";
    }
  }else {
    return "ちょうき";
  }

}

// print reslut
function findReslut(){
  var result = getWinner_Hand();
  if (result ==""){
     console.log("ひきわけ<br>");
     document.getElementById('result').innerHTML = "ひきわけ";

  } else {
    document.getElementById('result').innerHTML = result + "を選んだ人  おめでとうございます";
  }
}


// 勝ちの人まで捜す
function findWinner(){
  while (true) {
    var finnal_winner = getWinner_Hand();
    console.log("debug",finnal_winner);
    if (finnal_winner != "") {
      document.getElementById('result').innerHTML = finnal_winner + "を選んだ人  おめでとうございます";
      break;
    }
  }
}

// handle when user input error value

function findWinner_main(){
  var n = null;
  if (Number(getCount()) == 0 || Number(getCount()) == 1 || getCount() == n ) {
      alert("この人数で捜せない");
  }else {
    findWinner();
  }
}
