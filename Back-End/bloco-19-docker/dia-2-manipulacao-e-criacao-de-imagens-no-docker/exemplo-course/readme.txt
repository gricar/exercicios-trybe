#Após criado os arquivos, basta rodar no terminal os comandos:
docker build .

#é possível ver na lista de imagens
docker images

#run
docker container run -d -p 3000:80 <IMAGE_ID>

#ver o status da aplicação
docker ps

#abrir no navegador 
http://localhost:3000/