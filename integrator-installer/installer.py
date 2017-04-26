#!/usr/bin/python3
import integrator as i


def clean_database():
	i.try_delete("/view")
	i.try_delete("/read")
	i.try_delete("/write")
	i.try_delete("/start")
	i.try_delete("/menu")


def prepare_database_layout():
	i.add_node("/view", "")
	i.add_node("/read", "")
	i.add_node("/write", "")
	i.add_node("/start", "")
	i.add_node("/menu", "")


def create_endpoints():
	i.add_view_endpoint("abc", "jakiś przykładowy tekst")
	i.add_read_endpoint("abc", "server1", "http://example.com", 80, temp=False)
	i.add_read_endpoint("google", "google", "https://google.com", 443, temp=False)



def create_menu():
	# Elementy na najwyższym poziomie menu
	i.add_menu_element("Kliknij tutaj", "/read/abc", "/elem1")
	i.add_menu_element("Albo tutaj", "/view/abc", "/elem2")
	
	# Podpięcie czegoś pod elem1
	i.add_menu_element("To jest w submenu", "/read/abc", "/elem1/a")
	i.add_menu_element("To też", "/read/abc", "/elem1/b")
	
	# Element dla admina
	i.add_menu_element("Panel admina", "/read/abc", "/elem3", perm="111")


if __name__ == "__main__":
	i.zk.start()
	# Przygotowanie czystej bazy danych
	clean_database()
	prepare_database_layout()
	
	# Ustawienie przykładowych elementów
	create_endpoints()
	i.set_starting_endpoint("/read/abc")
	create_menu()
	
	i.zk.stop()
