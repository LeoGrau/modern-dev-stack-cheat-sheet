# Docker Flags

# Docker Container Commands Reference

## �‍♂️ Execution & Management

| Command | Flags        | Description              | Example                                                                 |
| ------- | ------------ | ------------------------ | ----------------------------------------------------------------------- |
| **run** | `-d`         | Run in detached mode     | `docker container run -d nginx`                                         |
|         | `-it`        | Interactive + TTY        | `docker container run -it ubuntu bash`                                  |
|         | `--rm`       | Auto-remove after exit   | `docker container run --rm alpine`                                      |
|         | `--name`     | Assign container name    | `docker container run --name web nginx`                                 |
|         | `--hostname` | Set container hostname   | `docker container run --hostname app1 nginx`                            |
|         | `--network`  | Connect to network       | `docker container run --network mynet app`                              |
|         | `-p`         | Port mapping             | `docker container run -p 8080:80 nginx`                                 |
|         | `-e`         | Set environment variable | `docker container run -e DEBUG=true app`                                |
|         | `--env-file` | Load env from file       | `docker container run --env-file .env app`                              |
|         | `-v`         | Volume mount             | `docker container run -v /data:/app nginx`                              |
|         | `--mount`    | Advanced mount           | `docker container run --mount type=bind,source=/data,target=/app nginx` |
|         | `-w`         | Working directory        | `docker container run -w /app node npm start`                           |
|         | `-u`         | User                     | `docker container run -u 1000 app`                                      |
|         | `--memory`   | Memory limit             | `docker container run --memory 512m app`                                |
|         | `--cpus`     | CPU limit                | `docker container run --cpus 1.5 app`                                   |

## � Listing & Inspection

| Command     | Flags      | Description         | Example                                                                  |
| ----------- | ---------- | ------------------- | ------------------------------------------------------------------------ |
| **ls**      | `-a`       | Show all containers | `docker container ls -a`                                                 |
|             | `--format` | Custom format       | `docker container ls --format "table {{.Names}}\t{{.Status}}"`           |
|             | `--filter` | Filter results      | `docker container ls --filter "status=running"`                          |
|             | `--last`   | Show last N         | `docker container ls --last 5`                                           |
|             | `-q`       | Quiet (only IDs)    | `docker container ls -q`                                                 |
| **inspect** | `--format` | Format output       | `docker container inspect --format='{{.NetworkSettings.IPAddress}}' web` |

## ⚡ Lifecycle Management

| Command     | Flags  | Description         | Example                                |
| ----------- | ------ | ------------------- | -------------------------------------- |
| **start**   | (none) | Start container     | `docker container start web`           |
| **stop**    | `-t`   | Timeout before kill | `docker container stop -t 30 web`      |
| **restart** | `-t`   | Timeout before kill | `docker container restart -t 10 web`   |
| **kill**    | `-s`   | Signal to send      | `docker container kill -s SIGTERM web` |
| **pause**   | (none) | Pause container     | `docker container pause web`           |
| **unpause** | (none) | Unpause container   | `docker container unpause web`         |

## � Debugging & Logs

| Command  | Flags     | Description          | Example                                    |
| -------- | --------- | -------------------- | ------------------------------------------ |
| **logs** | `-f`      | Follow logs          | `docker container logs -f web`             |
|          | `--tail`  | Number of lines      | `docker container logs --tail 100 web`     |
|          | `--since` | Show since timestamp | `docker container logs --since 1h web`     |
|          | `-t`      | Show timestamps      | `docker container logs -t web`             |
| **exec** | `-it`     | Interactive session  | `docker container exec -it web bash`       |
|          | `-u`      | User                 | `docker container exec -u root web whoami` |
|          | `-w`      | Working directory    | `docker container exec -w /app web pwd`    |

## � File Operations

| Command | Flags  | Description     | Example                                 |
| ------- | ------ | --------------- | --------------------------------------- |
| **cp**  | (none) | Copy files      | `docker container cp web:/app/logs .`   |
|         | `-L`   | Follow symlinks | `docker container cp -L web:/symlink .` |

## � Cleanup & Removal

| Command   | Flags | Description    | Example                      |
| --------- | ----- | -------------- | ---------------------------- |
| **rm**    | `-f`  | Force removal  | `docker container rm -f web` |
|           | `-v`  | Remove volumes | `docker container rm -v web` |
| **prune** | `-f`  | Force prune    | `docker container prune -f`  |

## � Monitoring & Stats

| Command    | Flags         | Description            | Example                                                                |
| ---------- | ------------- | ---------------------- | ---------------------------------------------------------------------- |
| **stats**  | `--no-stream` | Single stats snapshot  | `docker container stats --no-stream`                                   |
|            | `--format`    | Custom format          | `docker container stats --format "table {{.Container}}\t{{.CPUPerc}}"` |
| **top**    | (none)        | Show running processes | `docker container top web`                                             |
| **update** | `--memory`    | Update memory limit    | `docker container update --memory 1g web`                              |
|            | `--cpus`      | Update CPU limit       | `docker container update --cpus 2 web`                                 |

## � Utility Commands

| Command    | Flags  | Description              | Example                                     |
| ---------- | ------ | ------------------------ | ------------------------------------------- |
| **rename** | (none) | Rename container         | `docker container rename old-name new-name` |
| **port**   | (none) | List port mappings       | `docker container port web`                 |
| **diff**   | (none) | Inspect changes to files | `docker container diff web`                 |