var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    _id: { 
        type: Number
     },
    subject: { 
        type: String
     },
    status: {
         type: String 
        },
    objective: { 
        type: String 
    },
    courseId: { 
        type: String 
    },
    chapterName: {
         type: String
         }
});

module.exports = mongoose.model('datas', dataSchema);