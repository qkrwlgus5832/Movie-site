const mongoose = require('mongoose');
const Schema = mongoose.Schema

const favoriteSchema = mongoose.Schema({
    userForm: {
        type: Schema.Types.ObjectId,
        ref : 'User'
    },
    movieId: {
        type: String
    },
    movieTitle : {
        type: String
    },
    moviePost : {
        type: String
    },
    movieRunTime :{
        type: String
    }
}, {timestamps: true}) // 생성된 시간을 자동으로 처리해줌

const favorite= mongoose.model('Favorite', favoriteSchema);

module.exports = {favorite}
