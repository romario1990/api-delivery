# API de consulta de receitas

#### configurações de váriaveis de ambiente

Exemplo do arquivo .env

```
API_PORT=5050
API_EXTERNAL_RECIPES=http://www.recipepuppy.com/api/
API_EXTERNAL_GIFS=https://api.giphy.com/v1/gifs/search
# API_EXTERNAL_GIFS_KEY create key at https://api.giphy.com
API_EXTERNAL_GIFS_KEY=pWcZJecOjjKpdmWrxVX66ZC0DkZ8p3ua

```
### configuração docker

####Criar imagem app
- build image docker
```docker build -t "api-delivery" .```
- build docker-compose
```docker-compose up --build -d```
- executar server sem buildar
```docker-compose up -d```
### Execução de teste

- npm test

### Execução projeto

- criar arquivo .env
- npm start 
