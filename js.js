/*
-Escreva um programa que leia as notas das duas avaliações
  noramis e a nota da avaliação Optattiva

-Caso o aluno não tenha feiot a optativa deve ser fornecido o valor de -1

-Calcular a média do semestre considerando que a prova optativa
subistitui a nota mais baixa entre as duas primeira avaliações.

-Escrever a média e mensagens que indiquem se o aluno foi aprovado,
reprovado ou se está em exame, de acordo com as informações abaxio:

 Se a média for maior ou igual a 6
 APROVADO

 Se a média for menor que 3 
 REPROVADO

 Se a média for maior ou igual a 3 e menor que 6
 EXAME
*/

console.log('Inicio da aplicação')

function calcularMedia(nota1, nota2, notaOptativa){

   if (notaOptativa == undefined){
      notaOptativa = -1
      console.log(notaOptativa)
   }

   if (nota1 < nota2){
      nota1 = nota1 < notaOptativa ? notaOptativa: nota1
   }else if (nota2 < nota1){
      nota2 = nota2 < notaOptativa ? notaOptativa: nota2
   }

   const media = (nota1 + nota2) / 2
   return media
}

function escreverMensagemMedia(media){
   /*Se a média for maior ou igual a 6
   APROVADO
  
   Se a média for menor que 3 
   REPROVADO
  
   Se a média for maior ou igual a 3 e menor que 6
   EXAME
  */
  
  if(media >= 6){
     console.log(`Aprovado: ${media}`)
  }
  else if(media < 3){
     console.log(`Reprovado: ${media}`)
  }else{
     console.log(`Exame: ${media}`)
  }
   }
                      //MEDIA DE 3 ALUNOS (obs:mandeiras diferentes de serem executadas)
//ALUNO 1
const avaliacao1 = 1
const avaliacao2 = 4
let avaliacaoOptativa    

 const mediaAluno1 = calcularMedia(avaliacao1, avaliacao2, avaliacaoOptativa)
 escreverMensagemMedia(mediaAluno1)

//ALUNO 2
 const mediaAluno2 = calcularMedia(2, 7) //forma diferente de escrever oq está acima
 escreverMensagemMedia(mediaAluno2)

//ALUNO 3
 escreverMensagemMedia(calcularMedia(6,7, 9))