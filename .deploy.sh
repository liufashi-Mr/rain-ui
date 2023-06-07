#!/bin/bash
echo  "Deploying Aliyun"

function run() {
    scp -r /Users/leo/workspace/private/rain-ui/docs-dist aliyun:/apps/rain-ui
}

run

