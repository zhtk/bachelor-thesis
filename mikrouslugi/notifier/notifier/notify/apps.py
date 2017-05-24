from django.apps import AppConfig
import notify.installer as inst


class NotifyConfig(AppConfig):
    name = 'notify'
    verbose_name = "Notifier Microservice"

    def service_address(self):
        return "http://localhost:8000"

    def register_microservice(self):
        addr = self.service_address()

        # Start połączenia z zookeeperem
        inst.zk.start()

        # Przygotowanie końcówek
        inst.add_read_endpoint("notify-pending", "server1", addr + "/notify/pending/", "null", categories=["notifiers", "counters"])
        inst.add_read_endpoint("notify-negative", "server1", addr + "/notify/negative/", "null", categories=["notifiers", "counters"])
        inst.add_read_endpoint("notify-positive", "server1", addr + "/notify/positive/", "null", categories=["notifiers", "counters"])
        inst.add_read_endpoint("notify-listing", "server1", addr + "/notify/listing/", "null", categories=["notifiers", "counters"])
        inst.add_read_endpoint("notify-main", "server1", addr + "/notify/main/", "null", categories=["notifiers", "counters"])
        inst.add_write_endpoint("notify-print_to_stdout", "server1", addr + "/notify/print_to_stdout/", "null")
        inst.add_write_endpoint("notify-set_variable", "server1", addr + "/notify/set_variable/", "null")
        inst.add_read_endpoint("notify-get_variable", "server1", addr + "/notify/get_variable/", "null", categories=["counters"])

    def ready(self):
        self.register_microservice()
        print("Service ready!")
