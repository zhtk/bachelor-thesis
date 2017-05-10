# konfigurujemy
ZOOKEEPER_PATH=/home/ks/CodeDownloads/zookeeper-3.5.2-alpha
REPO_PATH=/home/ks/CodeProjects/zpp

# to sie uruchomi jako daemon
$ZOOKEEPER_PATH/bin/zkServer.sh start

# to uruchamiamy jednorazowo (jest to dodawanie node'ów do integratora)
$REPO_PATH/integrator-installer/installer.py

# te wywołania nam zablokuje konsolę, więc uruchamiamy w osobnych terminalach
$REPO_PATH/integrator2/run.sh
$REPO_PATH/mikrouslugi/logger/logger/run.sh
$REPO_PATH/mikrouslugi/notifier/notifier/run.sh


# Czytanie zookeepera:
$ZOOKEEPER_PATH/bin/zkCli.sh
# w otwartej sesji przydają się dwie operacje:
# - ls <ścieżka>, np. ls /, lub ls /read - listuje node'y-dzieci
# - get <ścieżka> - odczytuje zawartość node'a. węzły "katalogi" mogą jej nie mieć
