module.exports = function (dir,ext,callback){
    var fs = require("fs");
    var pathModule = require("path")
    fs.readdir(dir,function(err,list){
        if(err){
            return callback(err);
        }
        var filteredLists = [];
        for(var i=0;i<list.length;i++){
            if('.'+ext===pathModule.extname(list[i])){
                filteredLists.push(list[i]);
            }
        }
        callback(null,filteredLists);
    })
}