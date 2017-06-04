from django.apps import AppConfig
import zwolnienia.installer as inst

class ZwolnieniaConfig(AppConfig):
    name = 'zwolnienia'
    verbose_name = "EZLA Microservice"

    def service_address(self):
        return "http://localhost:8004"

    def register_microservice(self):
        addr = self.service_address()
        inst.zk.start()
        
        inst.add_read_endpoint("ezla-lista", "server1", addr + "/lista/")
        inst.add_read_endpoint("ezla-osoby", "server1", addr + "/osoby/")
        inst.add_write_endpoint("ezla-dodaj", "server1", addr + "/dodaj/")

    def ready(self):
        self.register_microservice()
        print("Service ready!")
