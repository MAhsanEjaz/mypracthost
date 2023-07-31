const mongoose = require('mongoose');

const data = mongoose.Schema({


    name:({

        type: String,
        required:true

    }),

    
    className:({

        type: String,
        required:true

    }),

})

module.exports =  mongoose.model('datamodel',data);