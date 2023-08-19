const RED = 0;
const WHITE = 1;
const BLUE = 2;
const reorderColors = (colors = []) => {

  let head = 0;
  let tail = colors.length;
  for (let i = 0; i < colors.length; i++) {
    const current = colors[i];

    const headValue = colors[head];
    const tailValue = colors[tail];

    if (current > tailValue && tailValue !== BLUE) {
      const temp = colors[tail];
      colors[tail] = colors[i];
      colors[i] = temp;

    }


  }

};