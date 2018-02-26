function HTMLPlugin(option){

}

HTMLPlugin.prototype.apply = function(compiler){
	compiler.plugin('emit',function(compilation,callback){
		compilation.chunks.forEach(function(chunk){
			console.log('chunk.name', chunk.name);
            console.log('=====================================');
            chunk.modules.forEach(function(module){
            	console.log('module', module.resource);
                module.fileDependencies.forEach(function(filepath){
                    console.log('filepath', filepath);
                });
            });
            // chunk.files.forEach(function(filename){
            //     let source = compilation.assets[filename].source();
            //     console.log('file', source);
            // })
		});
		callback();
	});
}

module.exports = HTMLPlugin;