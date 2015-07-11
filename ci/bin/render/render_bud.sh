#!/bin/bash

###
# Render bud fils.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

npm run render -- docs/**/.*.bud
npm run render -- docs/.*.bud
npm run render -- lib/.*.bud
npm run render -- .*.bud
