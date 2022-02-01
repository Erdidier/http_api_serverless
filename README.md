## Bienvenido al Repositorio de API con Serverless
**Instalación:**
- Clonar el repositorio.
- Descargar e instalar nodeJS 17.XX en adelante.
- Descargar e instalar serverless con el siguiente comando:
`npm i serverless`
- Descargar e instalar las siguientes librerías:
	- uuid, aws-sdk
	*`npm i uuid aws-sdk`*
	
	- middy core y middy http json parser
	*`npm install @middy/core @middy/http-json-body-parser`*
- Crear una tabla en dynamo db con el nombre *"TodoTable"*
- Obtener el ARN de la tabla y colocarlo debajo de resource:


    Resource:
            - <arn-name>
- Desplegar el proyecto a AWS con el comando:
	`serverless deploy -v`