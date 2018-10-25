const handlebars = require('handlebars');
const helpers = require('handlebars-helpers')({
    handlebars: handlebars
});

helpers.active = (type, str1 = 'Home', str2 = 'Home')=>{
    if(type === 'class' && str1.toLowerCase() === str2.toLowerCase()){
        return 'btn-active'
    }else{
        return 'btn-default'
    }
}

module.exports = helpers;