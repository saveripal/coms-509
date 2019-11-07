function display() {

  var dataset = [{
    name: "CBA",
    text: "Conveyor Belt-A started"
  }, {
    name: "mPlaced",
    text: "Medal placed on belt-A"
  }, {
    name: "mDetected",
    text: "Photoelectric sensor detected medal on CB-A"
  }
];
/*var dataset = ["Hola", "Lily"];*/

dataset.forEach((val,i) => {
  setTimeout(() => {
    document.getElementById('messages').style.display = 'block';
    document.getElementById('messages').innerHTML = val.text;
  }, i*2000);
});


/*
var m1="Medal present";
  var m2="Medal absent";
  var fp="Feeder Platform turned on. Motion initiated";
  var sFP="Status of Feeder Platform:"; //high/low
  //var movementFP="Feeder platform movement initiated";
  var l1FP="Feeder platform is at the same level as Conveyer Belt-A";
  var rFP="Rotation for Feeder Platform initiated";
  var rrFP="Rotation degree of Feeder Platform:";
  var rotationDeg=[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,100,120,130,140,150,160,170,180];
  var l2FP="Feeder Platform faces the Conveyor Belt-A";
  var mFP="Blank medal transferred to Feeder Platform";
  var tTR="Transfer robot triggered to rotate";
  var pTR="Rotated angle for Transfer Robot:";
  var posTR="Transfer Robot facing Feeder Platform now";
  var p1TRA1="Transfer robot arm 1 extends";
  var p2TRA1="Transfer robot arm 1 retracts";
  var posTR="Transfer robot rotating. rotation degree:";
  var pTR="Transfer Robot facing press.";
  var pPlate="Plate position:";
  var motionPlate="Plate moves:";
  var pos=["low","high"];
  var mStamp="Medal is stamped";
  var p1TRA2="Transfer robot arm 1 extends";
  var p2TRA2="Transfer robot arm 1 retracts";
 */



}
