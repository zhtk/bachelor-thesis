from django.apps import AppConfig
import wnioski.installer as inst

class WnioskiConfig(AppConfig):
    name = 'wnioski'
    verbose_name = "500+ Microservice"

    def service_address(self):
        return "http://localhost:8002"

    def register_microservice(self):
        addr = self.service_address()
        inst.zk.start()
        
        inst.add_view_endpoint_from_file("plus500-wniosek", '500plus.form')
        inst.add_read_endpoint("plus500-lista", "server1", addr + "/lista/", "null")
        inst.add_write_endpoint("plus500-send", "server1", addr + "/wyslij/", "null")
        
        inst.add_menu_element("Moje wnioski 500+", "read/plus500-lista", "/plus500lista")
        inst.add_menu_element("Złóż wniosek 500+", "view/plus500-wniosek", "/plus500nowy")

    def ready(self):
        self.register_microservice()
        print("Service ready!")
