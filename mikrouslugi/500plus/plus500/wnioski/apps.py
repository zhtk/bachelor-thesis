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

        inst.add_read_endpoint("notify-pending", "server1", addr + "/notify/pending/", "null")
        inst.add_read_endpoint("notify-negative", "server1", addr + "/notify/negative/", "null")
        inst.add_read_endpoint("notify-positive", "server1", addr + "/notify/positive/", "null")
        inst.add_read_endpoint("notify-listing", "server1", addr + "/notify/listing/", "null")
        inst.add_read_endpoint("notify-main", "server1", addr + "/notify/main/", "null")
        inst.add_write_endpoint("notify-print_to_stdout", "server1", addr + "/notify/print_to_stdout/", "null")
        inst.add_write_endpoint("notify-set_variable", "server1", addr + "/notify/set_variable/", "null")
        inst.add_read_endpoint("notify-get_variable", "server1", addr + "/notify/get_variable/", "null")

    def ready(self):
        #self.register_microservice()
        print("Service ready!")
