from django.apps import AppConfig

class NotifyConfig(AppConfig):
    name = 'notify'
    verbose_name = "Notifier Microservice"
    
    def service_adress(self):
        pass
    
    def register_microservice(self):
        pass
    
    def ready(self):
        self.register_microservice()
        print("Service ready!")
		
