
APP_NAME="gittrend"
APP_VERSION=1.0.26

# Docker build
docker build -t $APP_NAME:$APP_VERSION .

# Docker tag
docker tag $APP_NAME:$APP_VERSION chrwalte/$APP_NAME:$APP_VERSION

# Docker push
docker push chrwalte/$APP_NAME:$APP_VERSION

