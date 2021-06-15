# Microservicos com NodeJS e Kfka

- Utilizando Node
- Utiliando Kafka

# Aplicações

- API principal (Station);
- Greação de certificados;

# Fluxo

- Api principal envia uma mensagem pro serviço de certificado pra gerar o certificado;
- Microserviços de certificado devolve uma resposta(sincrona/assincrona)

Se conseguir sincrona/assincrona

- Receber uma resposta assincrona de quando o e-mail com o certficado foi enviado;

# O que sabemos?

- Rest (latência);
- Redis / RabbitMQ / **Kafka**;

- Nubank, Uber, Paypal, Netflix;
