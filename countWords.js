function countWords(text) {
    let arrText = text.split(' ');
    return arrText.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
  }

countWords('hola hol aakl kal kal cal caldo')