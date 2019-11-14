const tmi = require("tmi.js");
const options = require("./options"); //Your options file
const express = require("express"); //requiring express
var fs = require('fs');
var msq = [];
var vsq = [];

var midea = []



const app = express();

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})




// var schema = mongoose.Schema;

// var mSongQueueSchema =  new schema({
//     songTitle: {
//         type: String, 
//         required: false,
//         max: 200}, 
//     songArtist: {
//         type: String,
//         required: false, 
//         max: 200}, 
//     songLink:{
//         type: [String]
//     }
//     })

//     const mSongQueue = mongoose.model('mSongQueue',mSongQueueSchema);
    



//Connect to twitch server
const client1 = new tmi.client(options);
client1.connect();


//on chat
client1.on("chat", (channel, userstate, message, self) => { 
  //channel is which channel it comes from. Not very usable if you are in one channel only.
  //Userstate is an object which contains a lot of information, if the user who wrote is a subscriber, what emotes he used etc.
  //message is the message itself.
  //self is your bot. 
  
    if(self) return; //If your bot wrote something, then ignore it because you dont want to listen to your own messages

  
    if(message === "!help"){
        client1.say(channel, "Commands List is Under Construction -- Blame Viper for being slow.")
    }

    if(message === "!sbig" || message === "!SBIG"){
      client1.say(channel, "So Bad It's Good ...")
    }

    if(message === "!discord"){
      client1.say(channel, "The link to the Sbig discord can be found at https://discord.gg/pd3NFaM")
    }
    if(channel === "viperc46"){
      if(message === "!soc"){
        client1.say(channel,"Viper can be found on twitter, youtube, discord, instagram, and tumblr")
      }
  
      if(message === "!youtube"){
        client1.say(channel, "Viper can be found on youtube at CodeTera for right now because she is too lazy to change it or figure out how to")
      }
  
      if(message === "!songoftheweek" || message === "!sotw"){
          client1.say(channel,"The song of the week is Too Late by Chase Atlantic")
      }
  
        if(message === "!twitter"){
          client1.say("viperc46","Viper can be found on twitter under @V_Coltz")
        }
    }
  

      if(channel === "#maraklovlive") {
        
        if(message === "!twitter"){
          client1.say("maraklovlive","Mara can be found on twitter under @Maraklovgaming ")
          console.log(userstate)
        }
        if(message === "!youtube"){
          client1.say("maraklovlive", "Mara can be found on youtube under Maraklovgaming")
        }
        if(message === "!soc"){
          client1.say("maraklovlive","Maraklov can be found on youtube, twitter, and discord")
        }
        if(message.indexOf("!songrequest")==0 || message.indexOf("!sr")==0){
          // console.log(getData); 
          // if(message.contains("youtube")=false){
          //   client1.say("please use a youtube link");
          // }
        
          cword = message.slice(4); 
          if(cword.includes("youtube")){
            console.log(cword)
            msq.push(cword);
            console.log(msq)
            client1.say("maraklovlive","It added tho");
            var mJSON = JSON.stringify(msq);
          }
          else{
            console.log(cword + " Bet ")
            client1.say("maraklovlive","please use a youtube link");
          }

         
        
          
          //module.exports = mJSON; 

          // var bet = cword + " ";

          // if(!Array.isArray(mSongQueue.songList))
          //  { 
          //    mSongQueue.songList = [];
          // }
            
          // let msqueue = new mSongQueue();
          // msqueue.songList.push(bet);
          // msqueue.save((err)=> {console.log('msq saved');})
           
        }

        if(message=== "!mdisc"){
          client1.say("maraklovlive", "https://discord.gg/xxKrYdC");
        }

        if(message.indexOf("!idea")==0){
          maraidea = message.slice(5)
          console.log(maraidea)
          midea.push(maraidea);
          console.log(midea)
          client1.say("maraklovlive", "Thank you for your suggestion");
        }

        if(message === "!uptime"){

        }

  
          

        if(message === "!mq1" || message === "!maraquote1" || message === "illegalities"){
          client1.say("maraklovlive","Remember guys, 1 kill is illegal more is a statistic. Clip at: https://clips.twitch.tv/ObliviousBigKoalaRiPepperonis")
        }
         
      }
   }
)
// function getData (res){
//   db.collection("msongqueue").find({}).toArray(function(err){
//     if(err) throw err;
//   });}

// function dbupdate(cword){
//   console.log(cword + "1")
//   db.collection("msongqueue").updateOne(
//     { $push: { link: cword } }
//   )
// }
  

