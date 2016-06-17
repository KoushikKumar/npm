var filterFiles = require('./filterFiles');
filterFiles(process.argv[2],process.argv[3],function(err,data){
    if(err){
        console.log('error occured while filtering files'+err)
    }
    for(var i=0;i<data.length;i++){
        console.log(data[i]);
    }
    
})