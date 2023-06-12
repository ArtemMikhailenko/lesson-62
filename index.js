import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const PORT = process.env.PORT || 3000;

const app = express();
const text =fs.readFileSync('package.json', 'utf8');
const textFile = fs.readFileSync('text.txt', 'utf8');
app.get('/', (req, res)=>{
    res.send(`<h1>Wellcome</h1><h2>Json text :</h2><div>${textFile.toString()}</div>`);
    
    //res.sendFile(path.join(__dirname + '/index.html'));
    
});
fs.writeFile('text.txt',text, err => {
      if (err) {
        console.error(err);
    } else {
        console.log('Data written to file');
    }
    
});
app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}`);
    if(process.env.NODE_ENV == 'development') {
        console.log('development mode');
    } else {
        console.log('production mode');
    }
})


