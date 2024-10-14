import serviceProvider from '@/services';

const ServiceProviderPlugin = {
  install(app) {
    const serviceProviderInstance = serviceProvider;
    app.config.globalProperties.$serviceProvider = serviceProviderInstance;
  }
};

export default ServiceProviderPlugin;
