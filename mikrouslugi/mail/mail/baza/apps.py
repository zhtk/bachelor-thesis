from django.apps import AppConfig
import baza.installer as inst


class BazaConfig(AppConfig):
    name = 'baza'
    verbose_name = "Mail Microservice"

    def service_address(self):
        return "http://localhost:8003"

    def register_microservice(self):
        addr = self.service_address()
        inst.zk.start()
        
        #inst.add_view_endpoint_from_file("mail-form", 'mail.form')
        inst.add_read_endpoint("mail-sent", "server1", addr + "/sent/", "null")
        inst.add_read_endpoint("mail-rec", "server1", addr + "/rec/", "null")
        inst.add_write_endpoint("mail-send", "server1", addr + "/send/", "null")

    def ready(self):
        self.register_microservice()
        print("Service ready!")
