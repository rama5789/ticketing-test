# Docker :

- DockerHub Account Name - rama89

```sh
--------------------------------------
# Build all MS Images (Manually):

$ docker build -t rama89/ticketing_auth_service .

--------------------------------------
# Run Container (in Interactive Mode):

$ docker run -it rama89/ticketing_auth_service sh

# Run Container (in Detached Mode):

$ docker run -d -p 3000:3000 --name ticketing_auth_service rama89/ticketing_auth_service

--------------------------------------
# Push all MS Images to Docker Hub (Manually):

$ docker push rama89/ticketing_auth_service

```

# Docker Compose :

```sh
--------------------------------------
# Build all MS Images:

$ docker-compose build

--------------------------------------
# Push all MS Images to Docker Hub:

$ docker-compose push

```

# Kubernetes with Skaffold :

- https://www.katacoda.com/lizrice/courses/containers-and-go/skaffold

```sh
--------------------------------------
# Create Secrets:

$ kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
secret/jwt-secret created

# Get Key => https://dashboard.stripe.com/test/apikeys => Standard keys => Secret key

$ kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=sk_test_XXX
secret/stripe-secret created

# Get all Secrets:

$ kubectl get secrets
NAME            TYPE    DATA
::::::::::
jwt-secret      Opaque   1
stripe-secret   Opaque   1

--------------------------------------
# Create|Update all Deployments:

$ skaffold dev
```

# Kubernetes with Skaffold using Google Cloud :

```sh
--------------------------------------
# Create GCloud Project:

- Goto https://console.cloud.google.com
- Create a new Project "ticketing-dev" with auto-created ProjectID "pacific-destiny-272719"

# Create 3 Node k8s Cluster:

- Goto GCloud Menu > Kuberenetes Engine > Clusters
- Create a new k8s Cluster "ticketing-dev" with 3 Nodes

# Install GCloud SDK Locally:

- Goto https://cloud.google.com/sdk/docs/quickstart
- Download and Install GCloud SDK in Local Computer

$ gcloud auth login

$ gcloud init

$ gcloud container clusters get-credentials ticketing-dev

# Enable Cloud Build API:

- Goto GCloud Menu > Cloud Build to continuously build, test and deploy
- Hit Enable Button

# Run the Code in GCloud Cluster:

- Replace existing "skaffold.yaml" file with that of inside ".gcloud" dir
- Replace or Add existing ".infra" dir with that of inside ".gcloud" dir
```

# Publish NPM Packages :

- Npm Registry - https://www.npmjs.com

```sh
--------------------------------------
# Create a new Organisation in Npm Registry:

Org Name - rama89tickets

--------------------------------------
# Login to Npm Registry (via Npm):

$ npm login
Username: rama89
Password:
Email: (this IS public)
Email: (this IS public) xxx@yyy.com
Logged in as rama89 on https://registry.npmjs.org/.

# Publish the module to Npm Registry:

$ npm publish --access public
npm notice
npm notice 📦  @rama89tickets/common@1.0.0
npm notice === Tarball Contents ===
npm notice 235B package.json
npm notice === Tarball Details ===
npm notice name:          @rama89tickets/common
npm notice version:       1.0.0
npm notice package size:  266 B
npm notice unpacked size: 235 B
npm notice shasum:        62f9b60fa77ab4ec920307a2d533151dc8eeb02b
npm notice integrity:     sha512-GRVDgR+v2vNc6[...]XEZKK/ntjpGOw==
npm notice total files:   1
npm notice
+ @rama89tickets/common@1.0.0

# Published Npm Package Url:

- https://www.npmjs.com/package/@rama89tickets/common

--------------------------------------
# Login to Npm Registry (via Yarn):

$ yarn login
yarn login v1.22.4
question npm username: rama89
question npm email: xxx@yyy.com
Done in 15.46s.

# Increment Patch Version and Publish the module to Npm Registry:

$ yarn pub
yarn run v1.22.4
$ yarn version --patch && yarn build && yarn publish
info Current version: 1.0.0
info New version: 1.0.1
$ yarn clean && tsc
$ del ./build/*
[1/4] Bumping version...
info Current version: 1.0.1
question New version:
[2/4] Logging in...
[3/4] Publishing...
success Published.
[4/4] Revoking token...
info Not revoking login token, specified via config file.
Done in 42.58s.

# Remove the latest yarn auto commit if not needed:

$ git reset --soft HEAD~1

# Upgrade the package in Microservices:

$ yarn upgrade @rama89tickets/common --latest   # latest version
$ yarn upgrade @rama89tickets/common@[version]  # specific version

```
