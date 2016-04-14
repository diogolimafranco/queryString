# queryString
Uma simples função para captura de dados enviados via URI query string;

## Utilização
Basta incluir a lib no código e executar a function `queryString()`.

> Caso não seja fornecido um parâmetro, a function pegará a query string da URI atual

### Exemplo
```javascript
	var param = queryString('http://example.com/query=value');
	// Object{query:value}
```