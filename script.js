document.addEventListener('DOMContentLoaded', function () {

 const aumentaFonteBotao = document.getElementById('aumentar-fonte');
 const diminuiFonteBotao = document.getElementById('diminuir-fonte');

 let tamanhoAtualFonte = 1;

                          aumentaFonteBotao.addEventListener('click', function () {
 tamanhoAtualFonte += 0.1;
 document.body.style.fontSize = \${tamanhoAtualFonte}rem``
11
 })
13
14 diminuiFonteBotao.addEventListener('click', function () {
15 tamanhoAtualFonte -= 0.1;
16 document.body.style.fontSize = \${tamanhoAtualFonte}rem``
17
18 })
19
20 })
