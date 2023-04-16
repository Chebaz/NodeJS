function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}
async function getResult() {
  try {
    const joeResult = await luckyDraw("Joe");
    console.log(joeResult);
  } catch (error) {
    console.error(error);
  }
  try {
    const carolineResult = await luckyDraw("Caroline");
    console.log(carolineResult);
  } catch (error) {
    console.error(error);
  }
  try {
    const sabrinaResult = await luckyDraw("Sabrina");
    console.log(sabrinaResult);
  } catch (error) {
    console.error(error);
  }
}
getResult();
