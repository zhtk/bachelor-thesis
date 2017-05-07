from django.apps import AppConfig
import interceptor.installer as inst

class InterceptorConfig(AppConfig):
    name = 'interceptor'
    verbose_name = "Intercepting Microservice"
    
    def service_address(self):
        return "http://localhost:8001"
    
    def register_microservice(self):
        addr = self.service_address()
        
        # Start połączenia z zookeeperem
        inst.zk.start()
        
        # Przygotowanie końcówek
        inst.add_node('/hook/in/read/google', '', temp=False)
        inst.add_node('/hook/out/read/google', '', temp=False)
        inst.add_node('/hook/in/read/google/h1', addr + "/in/", temp=True)
        inst.add_node('/hook/out/read/google/h1', addr + "/out/", temp=True)
    
    def ready(self):
        self.register_microservice()
        print("Service ready!")
