let delay = 100;
                                      //em dash: â instead of -
const spinnerParts = ['\r|   ', '\r/   ', '\râ   ',  '\r\\   ', '\r|   ', '\n']


for (const part of spinnerParts) {
  setTimeout(() => {
    process.stdout.write(part);
  }, delay += 200);
};