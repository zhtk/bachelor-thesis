package managers;

import com.google.inject.AbstractModule;
import com.google.inject.assistedinject.FactoryModuleBuilder;

public class ManagersModule extends AbstractModule {
    @Override
    protected void configure() {
        install(new FactoryModuleBuilder()
                .implement(ViewEndpoint.class, ViewEndpoint.class)
                .build(ViewEndpointFactory.class));
        
        install(new FactoryModuleBuilder()
                .implement(ReadEndpoint.class, ReadEndpoint.class)
                .build(ReadEndpointFactory.class));
    }
}
