setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\râ   ');
}, 500);

setTimeout(() => {
  //escape backslash
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   '); 
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   '); 
}, 1100);

setTimeout(() => {
  process.stdout.write('\râ   '); 
}, 1300);

setTimeout(() => {
  process.stdout.write('\r|   '); 
}, 1500);
// ... fill in the rest yourself ...

//em dash: â