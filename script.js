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
    if (val.num === 1) {
      document.getElementById('medalDrop').style.color = 'FFFFFF';
    }
    else if (val.num === 2){
      document.getElementById('cb-a-motor').style.backgroundColor = '#00FF00';
    }
    /* eye detected medal on belt a */
    else if (val.num === 3) {
      document.getElementById('cb-a-sensor').style.backgroundColor = '#00FF00';
      document.getElementById('cb-a-motor').style.backgroundColor = '#FFFFFF';
      document.getElementById('fp-sensor').style.backgroundColor = '#00FF00';
      document.getElementById('fp-sensor').style.backgroundColor = '#FFFFFF';
    }
    /* Feeder platform rotation initiated*/
    else if (val.num === 4) {
      document.getElementById('fp-rotor-motor').style.backgroundColor = '#00FF00';
    }
    /* fp downward motion initiated*/
    else if (val.num === 5) {
      document.getElementById('fp-vertical-motor').style.backgroundColor = '#00FF00';
      document.getElementById('fp-rotor-motor').style.backgroundColor = '#FFFFFF';
    }
    /* medal transferred to fp */
    else if (val.num === 6) {
      /* cb-a sensor turns off*/
      document.getElementById('cb-a-sensor').style.backgroundColor = '#FFFFFF';
      /* fp vertical motor at stop*/
      document.getElementById('fp-vertical-motor').style.backgroundColor = '#FFFFFF';
    }
    /* fp upward motion initiated to TR level*/
    else if (val.num === 7) {
      document.getElementById('fp-vertical-motor').style.backgroundColor = '#00FF00';
    }
    /* TR rotation initiated */
    else if (val.num === 8) {
      /* fp vertical motion stops*/
      document.getElementById('fp-vertical-motor').style.backgroundColor = '#FFFFFF';
      /* TR starts to rotate to face fp*/
      document.getElementById('tr-sensor').style.backgroundColor = '#00FF00';
      document.getElementById('tr-sensor').style.backgroundColor = '#FFFFFF';
      document.getElementById('tr-motor').style.backgroundColor = '#00FF00';
    }
    /* TR Arm-1 extended*/
    else if (val.num === 9) {
      document.getElementById('tr-motor').style.backgroundColor = '#FFFFFF';
      document.getElementById('tr-arm1-motor').style.backgroundColor = '#00FF00';
    }
    /* Blank medal picked-up by TR Arm-1 */
    else if (val.num === 10) {
      document.getElementById('tr-arm1-motor').style.backgroundColor = '#FFFFFF';
      document.getElementById('tr-arm1-em').style.backgroundColor = '#00FF00';
    }
    /*  TR Arm-1 retracted */
    else if (val.num === 11) {
      document.getElementById('tr-arm1-motor').style.backgroundColor = '#00FF00';
    }
    /* TR rotation initiated */
    else if (val.num === 12) {
      /* tr arm 1 motion stops, then tr starts to rotate*/
      document.getElementById('tr-arm1-motor').style.backgroundColor = '#FFFFFF';
      document.getElementById('tr-motor').style.backgroundColor = '#00FF00';
    }
    /* TR Arm-1 extended to drop medal */
    else if (val.num === 13) {
      /* TR rotation stops, then arm 1 extension starts */
      document.getElementById('tr-motor').style.backgroundColor = '#FFFFFF';
      document.getElementById('tr-arm1-motor').style.backgroundColor = '#00FF00';
    }
    /* Blank medal dropped on Press */
    else if (val.num === 14) {
      document.getElementById('tr-arm1-em').style.backgroundColor = '#FFFFFF';
    }
    /*  tr arm 1 retracted*/
    else if (val.num === 15) {
      document.getElementById('tr-arm1-motor').style.backgroundColor = '#FFFFFF';
    }
    /* press upward motion initiated */
    else if (val.num === 16) {
      document.getElementById('press-motor').style.backgroundColor = '#00FF00';
    }
    /*  medal is stamped*/
    else if (val.num === 17) {
      document.getElementById('press-motor').style.backgroundColor = '#FFFFFF';
      document.getElementById('press-sensor').style.backgroundColor = '#00FF00';
    }
    /* press downward motion */
    else if (val.num === 18) {
      document.getElementById('press-motor').style.backgroundColor = '#00FF00';
    }
    /* tr rotation initiated */
    else if (val.num === 19) {
      /* press motor stops at 'low', press senses 'low', tr mototr starts rotating*/
      document.getElementById('press-motor').style.backgroundColor = '#FFFFFF';
      document.getElementById('press-sensor').style.backgroundColor = '#FFFFFF';
      document.getElementById('tr-motor').style.backgroundColor = '#00FF00';
    }
    /*  tr arm 2 extended to pick medal*/
    else if (val.num === 20) {
      document.getElementById('tr-motor').style.backgroundColor = '#FFFFFF';
      document.getElementById('tr-arm2-motor').style.backgroundColor = '#00FF00';
    }
    /* stamped medal picked by arm 2 */
    else if (val.num === 21) {
      document.getElementById('tr-arm2-motor').style.backgroundColor = '#FFFFFF';
      document.getElementById('tr-arm2-em').style.backgroundColor = '#00FF00';
    }
    /* tr arm 2 retracted */
    else if (val.num === 22) {
      document.getElementById('tr-arm2-motor').style.backgroundColor = '#00FF00';
    }
    /* tr rotation initiated */
    else if (val.num === 23) {
      document.getElementById('tr-arm2-motor').style.backgroundColor = '#FFFFFF';
      document.getElementById('tr-motor').style.backgroundColor = '#00FF00';
    }
    /* tr arm 2 extended to drop */
    else if (val.num === 24) {
      document.getElementById('tr-motor').style.backgroundColor = '#FFFFFF';
      document.getElementById('tr-arm2-motor').style.backgroundColor = '#00FF00';
    }
    /* stamped medal dropped on cb-b */
    else if (val.num === 25) {
      document.getElementById('tr-arm2-motor').style.backgroundColor = '#FFFFFF';
      document.getElementById('tr-arm2-em').style.backgroundColor = '#FFFFFF';
      document.getElementById('cb-b-motor').style.backgroundColor = '#00FF00';
    }
    /* 'eye' detects medal on cb-b */
    else if (val.num === 26) {
      document.getElementById('cb-b-sensor').style.backgroundColor = '#00FF00';
      document.getElementById('cb-b-motor').style.backgroundColor = '#FFFFFF';
    }
    else if (val.num === 27) {
      document.getElementById('medalCollect').style.color = '#00FF00';
    }
  }, i*3000);
});
}

function welcomeMessage() {
  document.getElementById('messages').style.display = 'block';
  document.getElementById('messages').innerHTML = "CS-CMMU Started. Press button to place medal on belt-A";
  document.getElementById('medalDrop').style.color = '#00FF00';
}
function collectMedal(){
  document.getElementById('messages').style.display = 'block';
  document.getElementById('messages').innerHTML = "Stamped medal collected. Press STOP to stop.";
  /*once medal is collected cb-b sensor turns off*/
  document.getElementById('cb-b-sensor').style.backgroundColor = '#FFFFFF';
}
function stop() {
  document.getElementById('messages').style.display = 'none';
}
