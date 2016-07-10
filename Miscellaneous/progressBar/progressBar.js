var updateProgress = function (e) {
  var input = document.querySelector('.input');
  var val = input.value;
  var progress = document.querySelector('.progress');
  input.value = '';
  document.querySelector('.container').style.width = val + '%';
  progress.style.width = val + 'px';
};