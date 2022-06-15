function invert() {
  var str = "Temos que inverter isso"
  var textoinvertido = '';
  for (var i = str.length - 1; i >= 0; i--) {
    textoinvertido += str[i];
  }
  document.write(textoinvertido);
}
