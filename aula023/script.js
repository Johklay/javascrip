/*
📏 Regras do && e || em JavaScript
🔹 A && B

Avalia da esquerda pra direita

Retorna o primeiro valor falsy

Se nenhum for falsy, retorna o último valor

👉 Exemplo mental:
true && false → para no falso
true && true → devolve o último

🔹 A || B

Avalia da esquerda pra direita

Retorna o primeiro valor truthy

Se nenhum for truthy, retorna o último valor

👉 Exemplo mental:
false || true → para no verdadeiro
false || false → devolve o último
*/



/*
Em JavaScript, só esses valores são avaliados como falso (falsy):

false
0
-0
0n        // BigInt zero
""        // string vazia
null
undefined
NaN
*/