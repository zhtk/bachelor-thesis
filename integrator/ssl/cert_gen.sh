#!/bin/bash

rm localhost.* pueca.* localhost.*

export PW=`cat password`

# Create a self signed key pair root CA certificate.
keytool -genkeypair -v \
  -alias pueca \
  -dname "CN=PUE2 CA, OU=ZPP team, O=ZUS beta PUE, L=Warsaw, ST=Mazowieckie, C=PL" \
  -keystore pueca.jks \
  -keypass:env PW \
  -storepass:env PW \
  -keyalg RSA \
  -keysize 4096 \
  -ext KeyUsage:critical="keyCertSign" \
  -ext BasicConstraints:critical="ca:true" \
  -validity 3650

# Export the exampleCA public certificate as exampleca.crt so that it can be used in trust stores.
keytool -export -v \
  -alias pueca \
  -file pueca.crt \
  -keypass:env PW \
  -storepass:env PW \
  -keystore pueca.jks \
  -rfc

# Create a server certificate, tied to example.com
keytool -genkeypair -v \
  -alias localhost \
  -dname "CN=localhost, OU=ZPP team, O=ZUS beta PUE, L=Warsaw, ST=Mazowieckie, C=PL" \
  -keystore localhost.jks \
  -keypass:env PW \
  -storepass:env PW \
  -keyalg RSA \
  -keysize 2048 \
  -validity 385

# Create a certificate signing request for example.com
keytool -certreq -v \
  -alias localhost \
  -keypass:env PW \
  -storepass:env PW \
  -keystore localhost.jks \
  -file localhost.csr

# Tell exampleCA to sign the example.com certificate. Note the extension is on the request, not the
# original certificate.
# Technically, keyUsage should be digitalSignature for DHE or ECDHE, keyEncipherment for RSA.
keytool -gencert -v \
  -alias pueca \
  -keypass:env PW \
  -storepass:env PW \
  -keystore pueca.jks \
  -infile localhost.csr \
  -outfile localhost.crt \
  -ext KeyUsage:critical="digitalSignature,keyEncipherment" \
  -ext EKU="serverAuth" \
  -ext SAN="DNS:localhost" \
  -rfc

# Tell example.com.jks it can trust exampleca as a signer.
keytool -import -v \
  -alias pueca \
  -file pueca.crt \
  -keystore localhost.jks \
  -storetype JKS \
  -storepass:env PW << EOF
yes
EOF

# Import the signed certificate back into example.com.jks
keytool -import -v \
  -alias localhost \
  -file localhost.crt \
  -keystore localhost.jks \
  -storetype JKS \
  -storepass:env PW

# List out the contents of example.com.jks just to confirm it.
# If you are using Play as a TLS termination point, this is the key store you should present as the server.
keytool -list -v \
  -keystore localhost.jks \
  -storepass:env PW
