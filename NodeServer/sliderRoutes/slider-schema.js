const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

module.exports = new mongoose.Schema({
    sliderTitle : {
    	type: String
    },
    sliderImg: { 
        data: Buffer, 
        contentType: String 
    },
    shortDescription : {
    	type: String
    },
    sliderId : {
		type : ObjectID
	}
});