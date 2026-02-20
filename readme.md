Running locally
`docker build -t ambulance-ufe -f build/docker/Dockerfile .`
`docker run -p 8000:8080 --name ambulance-ufe-server ambulance-ufe`

Build and push for azure
```
docker login
docker buildx build --platform linux/amd64,linux/arm64 \
  -t meowiky002/ambulance-ufe:latest \
  -f build/docker/Dockerfile \
  --push .
```