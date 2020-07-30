const axiom = "F";
let sentence = axiom;
let length = 100;
const rules = [
  {
    input: "F",
    output: "FF+[+F-F-F]-[-F+F+F]"
  },
];


function generate() {
  let nextSentence = "";
  length *= 0.51;
  for (let i = 0; i < sentence.length; i++) {
    const current = sentence.charAt(i);
    let found = false;
    for (let rule of rules) {
      if (current === rule.input) {
        found = true;
        nextSentence += rule.output;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();
}

/**
 * Simulate turtle engine to draw the rules
 */
function turtle () {
  background(51);
  resetMatrix();
  translate(width / 2, height);
  stroke(255, 100);
  for(let i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i);

    if(current == "F") {
      console.log('passed');
      line(0, 0, 0, -length);
      translate(0, -length);
    } else if (current === '+') {
      rotate(PI/6);
    } else if (current === '-') {
      rotate(-PI/6);
    } else if (current === '[') {
      push();
    } else if (current === ']') {
      pop();
    }
  }

}

function setup() {
  createCanvas(400, 400);
  background(51);
  turtle();
  createP(axiom);
  const button = createButton("Generate");
  button.mousePressed(() => generate());
}