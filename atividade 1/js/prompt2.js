alert("Hello Word");
 var numero =parseInt (prompt("Digite um número para ver a série de Fibonacci até o enésimo termo"));
 var ante = proxi = 0;
 var atual = 1;

for(var i=1;i<=numero;i++){
    prox = ante+atual;
    ante = atual;
    atual = prox;
    document.write(atual +"<br>");
}

