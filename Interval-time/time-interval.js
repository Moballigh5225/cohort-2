let startTime = performance.now();

setTimeout(function () {
  let endTime = performance.now();
  let elapsedTime = endTime - startTime;

  console.log(`Elapsed time: ${elapsedTime.toFixed(2)} ms`);
}, 1000);
