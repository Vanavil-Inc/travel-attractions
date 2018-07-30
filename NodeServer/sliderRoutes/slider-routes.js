const router = require('express').Router();
// var base64Img = require('base64-img');

const Slider = require('./slider-model');


// var dat = null;

// base64Img.base64('companyLogo.PNG', function(err, data) {
// if(err){
// console.log("err " + err);
// }
// console.log("data " + data)
//  // dat = data;

// base64Img.img(data, '', 'shashi', function(err, filepath) {
// if(err){
// console.log("errr " + err)
// }
// console.log("filepath " + filepath);
// });


// });


const sliderTitle = "penambur";
const sliderImg = "data";
const shortDescription = "Beach view";




Slider.create({sliderTitle : sliderTitle,sliderImg : sliderImg,shortDescription : shortDescription}, function(err,resp){

        if(err){
            console.log("err executed " + err);
        }

            console.log("sliderImg added" + resp);
    });





module.exports = router;