#!/usr/bin/python3
from kazoo.client import KazooClient

# Klient zookeepera
# Należy tutaj uzupełnić adresy serwera
zk = KazooClient(hosts='127.0.0.1:2181')

# Nakładka na zookeepera

def try_delete(path):
	zk.delete(path, recursive=True)

def add_node(path, content):
	zk.create(path, content.encode('utf-8'))

def add_service_server(basePath, serviceName, serverId, address, port,
                       sslPort="null", payload="null", registrationTimeUTC=0,
                       serviceType="PERMANENT",uriSpec="null"):
	add_node(basePath + serviceName, "")
	
	info = "{"
	info += "\"name\":\"" + serviceName + "\","
	info += "\"id\":\"" + serverId + "\","
	info += "\"address\":\"" + address + "\","
	info += "\"port\":" + str(port) + ","
	info += "\"sslPort\":" + str(sslPort) + ","
	info += "\"payload\":" + payload + ","
	info += "\"registrationTimeUTC\":" + str(registrationTimeUTC) + ","
	info += "\"serviceType\":\"" + serviceType + "\","
	info += "\"uriSpec\":" + uriSpec + ""
	info += "}"	
	
	add_node(basePath + serviceName + "/" + serverId, info)

def add_view_endpoint(name, content):
	add_node("/view/" + name, content)

def add_read_endpoint(name, serverId, address, port):
	add_service_server("/read/", name, serverId, address, port)

def add_write_endpoint(name, serverId, address, port):
	add_service_server("/write/", name, serverId, address, port)

def add_menu_element(name, link, path, nr=0, icon="", perm=""):
	info = "{"
	info += "\"nr\":" + str(nr) + ","
	info += "\"name\":\"" + name + "\","
	info += "\"icon\":\"" + icon + "\","
	info += "\"link\":\"" + link + "\","
	info += "\"perm\":\"" + perm + "\""
	info += "}"
	
	add_node("/menu" + path, info)

# Funkcje przygotowujące bazę

def clean_database():
	try_delete("/view")
	try_delete("/read")
	try_delete("/write")
	try_delete("/start")
	try_delete("/menu")

def prepare_database_layout():
	add_node("/view", "")
	add_node("/read", "")
	add_node("/write", "")
	add_node("/start", "")
	add_node("/menu", "")

def create_endpoints():
	add_view_endpoint("abc", "jakiś przykładowy tekst")
	add_read_endpoint("abc", "server1", "http://example.com", 80)

def set_starting_endpoint(path):
	zk.set("/start", path.encode('utf-8'))

def create_menu():
	# Elementy na najwyższym poziomie menu
	add_menu_element("Kliknij tutaj", "/read/abc", "/elem1")
	add_menu_element("Albo tutaj", "/view/abc", "/elem2")
	
	# Podpięcie czegoś pod elem1
	add_menu_element("To jest w submenu", "/read/abc", "/elem1/a")
	add_menu_element("To też", "/read/abc", "/elem1/b")

if __name__ == "__main__":
	zk.start()
	
	# Przygotowanie czystej bazy danych
	clean_database()
	prepare_database_layout()
	
	# Ustawienie przykładowych elementów
	create_endpoints()
	set_starting_endpoint("/read/abc")
	create_menu()
	
	zk.stop()
