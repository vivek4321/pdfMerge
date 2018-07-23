var merge = require('easy-pdf-merge');
merge(['1.pdf','2.pdf','3.pdf','4.pdf','5.pdf','6.pdf'],'new.pdf',function(err){

        if(err)
        return console.log(err);

        console.log('Successfully merged!');

});
