/*3. Crie três variáveis, uma usando const, duas variáveis usando let. Na
variável const coloque o total de uma compra, por exemplo 149.90.
Na variável let coloque a quantidade de parcelas, por exemplo 2. Na
outra variável let coloque o valor da parcela. Apresente no
documento html as seguintes informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_"
*/

const totalCompra = 147.95
let parcelas = 4 
let prestacoes = (totalCompra/parcelas)


document.write("O valor total da compra foi de R$ ",totalCompra,"")
document.write("<br>Forma de pagamento: ",parcelas," parcelas de R$ ",prestacoes.toFixed(2),"")
