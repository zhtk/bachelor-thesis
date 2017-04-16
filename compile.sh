#!/usr/bin/env bash

python3 -m virtualenv venv
source venv/bin/activate
pip install -r auth/requirements.txt

(
cd auth/
wget -O compiler.exe http://search.maven.org/remotecontent?filepath=io/grpc/protoc-gen-grpc-java/1.2.0/protoc-gen-grpc-java-1.2.0-linux-x86_64.exe
chmod +x compiler.exe
pwd
python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. auth.proto
pwd
protoc --plugin=protoc-gen-grpc-java="./compiler.exe" \
       --java_out="../integrator/app" \
       --grpc-java_out="../integrator/app" \
       auth.proto
pwd
)