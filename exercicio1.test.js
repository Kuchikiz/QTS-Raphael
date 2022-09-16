// André Neves e Raphael Miguel :D
import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
    assertNotEquals,
    assertStrictEquals,
    assertObjectMatch,
    assertThrows,
} from "http://deno.land/std/testing/asserts.ts"

let nome = 'Raphael Miguel'
let lista = ['Luis', 'Daniel', 'Davi', 'Diego']
let testestring = 'O dia está lindo!'

Deno.test("Teste 1 - Passou", () => {
    assertEquals(nome, "Raphael Miguel"); 
    assertStringIncludes(nome, "Raphael");    
})

Deno.test("Teste 2 - Passou", ()=> {
    assertArrayIncludes(lista, 
        ["Davi", "Luis", "Diego"],
        "Opa! Algo deu errado!");
})

Deno.test("Teste 3 - Passou ", () =>{

  assertObjectMatch ( 
    {  Silas :  true ,  Siles :  false  } , 
    { 
      Silas :  true , 
    } , 
  ) ;

})



Deno.test("Teste 4 - Falha", () => {
    assertStringIncludes(testestring, "Boa tarde!");    
})

Deno.test("Teste 5 - Falha", () => {
  assertNotEquals("Careca", "Careca");
 
});

Deno.test("Teste 6 - Falha", () => {
    assertStrictEquals("Mono", "Bola");
  });