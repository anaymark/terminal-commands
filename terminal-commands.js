const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err,files)=>{
  	const filesToString = files.reduce((acc,file) => {
  		return `${acc} ${file} `;
  	}, '');

  	console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('examplefile.txt','This is an example file being created', (err) =>{
  	if(err) throw err;
  	console.log("The file was created!");
  });
};

module.exports.mkdir = () => {
  fs.mkdirSync('testDir',0o776, (err)=>{
  	if(err){
  		console.log(err);
  		response.send('Error! Cannot make the directory! \n');
  	};
  	    console.log('Directory added.')
  });
};