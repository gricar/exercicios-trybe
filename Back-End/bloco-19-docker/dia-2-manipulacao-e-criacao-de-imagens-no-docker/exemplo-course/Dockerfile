# imagem base, nesse caso ngnix
FROM nginx

#copiando o arquivo index.html da minha máquina para dentro da nossa imagem (conforme site)
COPY ./index.html /usr/share/nginx/html

#qual porta a aplicação vai rodar
EXPOSE 3000

ENV API_URL=http://localhost:8000/api/

#pagina que será redirecionada quando acessarmos a aplicação
WORKDIR /usr/share/nginx/html

RUN ls

ENTRYPOINT [ "/usr/sbin/nginx" ]
CMD [ "-g", "daemon off;" ]
