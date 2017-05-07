from kazoo.client import KazooClient
from kazoo.exceptions import NodeExistsError
from itertools import zip_longest
import random

zk = KazooClient(hosts='127.0.0.1:2181')

def try_delete(path):
	zk.delete(path, recursive=True)


def add_node(path, content, temp=False):
	try:
		zk.create(path, content.encode('utf-8'), ephemeral=temp)
	except NodeExistsError as e:
		pass


def add_service_server(basePath, serviceName, serverId, address, port,
                       sslPort="null", payload="null", registrationTimeUTC=0,
                       serviceType="PERMANENT", uriSpec="null", temp=True):
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
	
	add_node(basePath + serviceName + "/" + serverId, info, temp=temp)


def add_view_endpoint(name, content):
	add_node("/view/" + name, content)


def add_view_endpoint_from_file(name, filename):
	with open(filename) as f: content = f.read()
	add_view_endpoint(name, content)


def add_read_endpoint(name, serverId, address, port, temp=True):
	add_service_server("/read/", name, serverId, address, port, temp=temp)


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


def set_starting_endpoint(path):
	zk.set("/start", path.encode('utf-8'))


def get_starting_endpoint():
	return zk.get("/start")[0].decode('utf-8')


def get_view_endpoint(name):
	return zk.get("/view/" + name)[0].decode("utf-8") 


def get_read_endpoint(name):
	servers = zk.get_children("/read/" + name)
	node = random.choice(servers)
	return zk.get("/read/" + name + "/" + node)[0].decode("utf-8")


def get_read_endpoint_permissions(name):
	return zk.get("/read/" + name)[0].decode("utf-8")


def get_write_endpoint(name):
	servers = zk.get_children("/write/" + name)
	node = random.choice(servers)
	return zk.get("/write/" + name + "/" + node)[0].decode("utf-8")


def get_write_endpoint_permissions(name):
	return zk.get("/write/" + name)[0].decode("utf-8")


def get_menu_node(path):
	childs = zk.get_children("/menu" + path)
	item = zk.get("/menu" + path)[0].decode("utf-8")
	return (item, childs)


def check_permissions(required, obtained):
	check = list(zip_longest(required, obtained))
	
	for (r, o) in check:
		if r is None:
			r = '0'
		
		if o is None:
			o = '0'
		
		if r == '1' and o == '0':
			return False
	
	return True


def get_hooks_list(hook, etype, endpoint):
	try:
		path = "/hook/" + hook + "/" + etype + "/" + endpoint
		nodes = zk.get_children(path)
		sort(nodes)
		path = path + "/"
		nodes = list(map(lambda x: zk.get(path + x)[0].decode("utf-8"), nodes))
		return nodes
	except:
		return []

