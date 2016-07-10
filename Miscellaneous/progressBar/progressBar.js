var updateProgress = function () {
  var input = document.querySelector('.input');
  var progress = document.querySelector('.progress');
  var val = input.value;
  input.value = '';
  if (parseInt(val, 10) <= 100) {
    progress.style.width = val.concat('%');
  } else {
    progress.style.width = '100%';
  }
};
