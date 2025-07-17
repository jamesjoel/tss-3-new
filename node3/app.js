// public packages in NodeJS
// npm install password-generator
// import helper from './helper.js';
// import pass from 'password-generator';
// import rev from 'reverse-string'

// let a = helper(10, 20);

// let b = pass(15, false);

// let name = "rohit sharma";
// let x = rev(name);

// console.log(x)
import PDF from 'pdfkit';
import fs from 'fs';
let para = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, numquam deleniti, qui odit similique veritatis repellendus dicta eos magnam tenetur nobis nesciunt delectus veniam ipsa, quam voluptatum neque fugiat perferendis!";

const doc = new PDF();

doc.pipe(fs.createWriteStream("demo.pdf"));

doc.fontSize(20).text(para, 20, 20)

doc.end();


