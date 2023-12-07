### build docker image

docker build -t **\[your_image_name\]**:**\[your_tag(it can be skipped)\]** --target **\[dev || prod\]** .

### run docker container

docker container run --name **\[your_container_name(it can be skipped)\]** -d -p **\[your_port_num\]**:**\[3000(dev) || 80(prod)\]** **\[your_image_name\]:\[your_tag(it can be skipped)\]**
