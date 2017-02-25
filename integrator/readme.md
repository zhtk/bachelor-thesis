# Integrator

Kompilacja i uruchomienie: sbt run

Domyślnie zakładam, że zookeeper jest dostępny pod 127.0.0.1:2181.
Na serwerze mają być utworzone nody /view /read /write.
Pod /view można podczepiać końcówki z konkretną zawartością, końcówki 
z ścieżkami /read /write składają się z nazwy mikrousługi i danych
serwera w formacie http://curator.apache.org/curator-x-discovery/index.html

UWAGA: wymagana jest wersja co najmniej 3.5.0!!!

## Rejestracja mikrousługi
        ServiceInstance<EndpointService> thisInstance = 
                new ServiceInstance<EndpointService>("abc", "aaa",
                        "http://example.com",
                        80,
                        null,
                        null,
                        0,
                        ServiceType.PERMANENT,
                        null);
        discovery = ServiceDiscoveryBuilder.builder(EndpointService.class)
                .thisInstance(thisInstance).basePath("/read/").client(client).build();

## Polecane linki
 * https://zookeeper.apache.org/doc/r3.4.9/zookeeperStarted.html
 * http://curator.apache.org/getting-started.html
 * http://curator.apache.org/curator-framework/index.html
