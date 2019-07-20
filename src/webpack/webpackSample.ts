import testProperty from "./anotherWebpackSample";


const button = document.getElementById('btn');

button!.addEventListener('click', function (e) {
  console.log('[Test property]', testProperty);
  console.log(e);
});
