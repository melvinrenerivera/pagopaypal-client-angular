FROM nginx:1.21.3-alpine

#configuraando zona horaria
RUN apk add --no-cache tzdata
ENV TZ=America/Lima
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

#creando carpeta en el servidor de trabajo
RUN mkdir -p /var/www/html/tallersbacliente

#removiendo el archico por defecto por cuestiones de seguridad
RUN rm -r /etc/nginx/conf.d/default.conf

#copio el archivoo de configuracion 
COPY tallersbacliente.conf /etc/nginx/conf.d/

#copio todo lo que contiene de dist tallersbacliente hacia la carpeta que esta dentro de la imagen
COPY dist/tallersbacliente /var/www/html/tallersbacliente