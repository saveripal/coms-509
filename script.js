function display() {

  var dataset = [{
    num: 1,
    text: "Blank medal placed on belt-A"
  }, {
    num: 2,
    text: "Belt-A in motion"
  }, {
    num: 3,
    text: "'Eye' detected medal on belt-A"
  }, {
    num: 4,
    text: "Feeder platform rotation initiated.."
  }, {
    num: 5,
    text: "Feeder platform downward motion initiated.."
  }, {
    num: 6,
    text: "Medal transferred to Feeder platform"
  }, {
    num: 7,
    text: "Feeder platform upward motion initiated.."
  }, {
    num: 8,
    text: "TR rotation initiated.."
  }, {
    num: 9,
    text: "TR Arm-1 extended"
  }, {
    num: 10,
    text: "Blank medal picked-up by TR Arm-1"
  }, {
    num: 11,
    text: "TR Arm-1 retracted"
  }, {
    num: 12,
    text: "TR rotation initiated"
  }, {
    num: 13,
    text: "TR Arm-1 extended to drop medal"
  }, {
    num: 14,
    text: "Blank medal dropped on Press"
  }, {
    num: 15,
    text: "TR Arm-1 retracted"
  }, {
    num: 16,
    text: "Press upward motion initiated.."
  }, {
    num: 17,
    text: "Medal is stamped!"
  }, {
    num: 18,
    text: "Press downward motion initiated.."
  }, {
    num: 19,
    text: "Transfer Robot rotation initiated.."
  }, {
    num: 20,
    text: "TR Arm-2 extended to pick up medal"
  },{
    num: 21,
    text: "Stamped medal picked up by TR Arm-2"
  }, {
    num: 22,
    text: "TR Arm-2 retracted"
  },{
    num: 23,
    text: "TR rotation initiated.."
  }, {
    num: 24,
    text: "TR Arm-2 extended to drop"
  }, {
    num: 25,
    text: "Stamped medal dropped on belt-B"
  }, {
    num: 26,
    text: "'Eye' detected medal on belt-B"
  }, {
    num: 27,
    text: "Medal ready to be colected. Press button to collect medal."
  }


];
document.getElementById('medalDrop').style.color = '#00FF00';
dataset.forEach((val,i) => {
  setTimeout(() => {
    document.getElementById('messages').style.display = 'block';
    document.getElementById('messages').innerHTML = val.text;
    if (val.num ===1) {
      document.getElementById('medalDrop').style.color = 'FFFFFF';
    }
    if (val.num === 27) {
      document.getElementById('medalCollect').style.color = '#00FF00';
    }
  }, i*2000);
});
}

function welcomeMessage() {
  document.getElementById('messages').style.display = 'block';
  document.getElementById('messages').innerHTML = "CS-CMMU Started. Press button to place medal on CB";
  document.getElementById('medalDrop').style.color = '#00FF00';
}
function collectMedal(){
  document.getElementById('messages').style.display = 'block';
  document.getElementById('messages').innerHTML = "Stamped medal collected. Press STOP to stop.";
}
function stop() {
  document.getElementById('messages').style.display = 'none';
}
