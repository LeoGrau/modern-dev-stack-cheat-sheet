# Most Used Docker Container Commands

## �‍♂️ Essential Daily Commands

| Command     | Flags    | Description                 | Example                          |
| ----------- | -------- | --------------------------- | -------------------------------- |
| **run**     | `-d`     | Run in detached mode        | `docker run -d nginx`            |
|             | `-it`    | Interactive mode            | `docker run -it ubuntu bash`     |
|             | `--name` | Name container              | `docker run --name my-app nginx` |
|             | `-p`     | Map ports                   | `docker run -p 8080:80 nginx`    |
|             | `-v`     | Mount volumes               | `docker run -v /data:/app nginx` |
|             | `-e`     | Environment variables       | `docker run -e DB_HOST=db app`   |
| **ps**      | `-a`     | List all containers         | `docker ps -a`                   |
|             | `-q`     | Only IDs                    | `docker ps -q`                   |
| **logs**    | `-f`     | Follow logs in real-time    | `docker logs -f my-app`          |
|             | `--tail` | Last N lines                | `docker logs --tail 50 my-app`   |
| **exec**    | `-it`    | Execute interactive command | `docker exec -it my-app bash`    |
| **stop**    | (none)   | Stop container              | `docker stop my-app`             |
| **start**   | (none)   | Start container             | `docker start my-app`            |
| **restart** | (none)   | Restart container           | `docker restart my-app`          |
| **rm**      | `-f`     | Force remove container      | `docker rm -f my-app`            |
|             | `-v`     | Remove with volumes         | `docker rm -v my-app`            |

## � Monitoring & Inspection

| Command     | Flags  | Description          | Example                 |
| ----------- | ------ | -------------------- | ----------------------- |
| **stats**   | (none) | Real-time statistics | `docker stats`          |
| **top**     | (none) | Container processes  | `docker top my-app`     |
| **inspect** | (none) | Detailed information | `docker inspect my-app` |

## � Cleanup & Maintenance

| Command         | Description                | Example                      |
| --------------- | -------------------------- | ---------------------------- |
| **prune**       | Remove stopped containers  | `docker container prune`     |
| **rm** multiple | Remove multiple containers | `docker rm $(docker ps -aq)` |