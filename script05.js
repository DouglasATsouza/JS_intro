/*5. Crie cinco variáveis usando const. Na primeira armazene o nome de
um aluno. Na segunda, terceira e quarta coloque 3 notas (valores de
0 à 10). Calcule a média das notas e armazene na quinta variável let
criada. Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_"
*/

const nomeAluno = "João"
const nota1 = 8
const nota2 = 7.5
const nota3 = 8
let media = (nota1+nota2+nota3)/3

document.write("O aluno ",nomeAluno," ficou com média de ",media.toFixed(2),"!")