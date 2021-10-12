// This function also acts as a "function factory"
function makeBetweenFunc(x, y) {
    return function (num) {
      return num >= x && num <= y;
    };
  }

  const isNiceWeather = makeBetweenFunc(21, 28);

  console.log(isNiceWeather(25));
  console.log(isNiceWeather(30));