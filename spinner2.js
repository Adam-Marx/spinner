let delay = 100;
                                      //em dash: — instead of -
const spinnerParts = ['\r|   ', '\r/   ', '\r—   ',  '\r\\   ', '\r|   ', '\n']


for (const part of spinnerParts) {
  setTimeout(() => {
    process.stdout.write(part);
  }, delay += 200);
};