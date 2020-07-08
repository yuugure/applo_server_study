#!/bin/bash

echo "start npm packages installs"

# add packages
yarn add micro microrouter apollo-server-micro graphql graphql-tools

# dev add packages
yarn add -D micro-dev typescript ts-node @types/graphql @types/micro @types/microrouter

echo "end npm packages installs"

touch tsconfig.json

