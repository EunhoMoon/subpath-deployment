## Deploy SPA to subpath

This is a simple example of deploying a SPA(React app) with a startup path is subpath (ex. **/app**).

I've created a simple **boilerplate**, and you can use it as a reference to develop it in various directions.

### Version

By default, the version of the docker image is **latest**.

- **node**: ^20.8.0(If you want to run it without docker)
- **nginx**: version doesn't seem to matter much

### How to getting started

When running as <u>dev</u>, you can try running the react app using **npm**, and when using <u>prod</u>, it is build and deployed through **nginx**.

#### build docker image

- docker build -t **\[your_image_name\]**:**\[your_tag(it can be skipped)\]** --target **\[dev || prod\]** .

#### run docker container

- docker container run --name **\[your_container_name(it can be skipped)\]** -d -p **\[your_port_num\]**:**\[3000(dev) || 80(prod)\]** **\[your_image_name\]:\[your_tag(it can be skipped)\]**
