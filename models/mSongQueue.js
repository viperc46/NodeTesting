var mongoose = require('mongoose');
const app = require('D:/TwitchChatBot/app');





var schema = mongoose.Schema;

var mSongQueueSchema =  new schema({
    songTitle: {
        type: String, 
        required: false,
        max: 200}, 
    songArtist: {
        type: String,
        required: false, 
        max: 200}, 
    songLink:{
        type: String 
    }
})


/* mSongQueueSchema
.virtual('songTitle')
.get(function(){
    return this.songTitle;
})

mSongQueueSchema
.virtual('songArtist')
.get(function(){
    return this.songArtist;
})

mSongQueueSchema
.virtual('songLink')
.get(function(){
    return this.songLink;
}) */

const mSongQueue = mongoose.model('mSongQueue',mSongQueueSchema);

module.exports = mSongQueueSchema;