import { platformBrowserDynamic } from
'@angular/platform-browser-dynamic';

// Importing the module from the application module definition file
// located in the same folder.
import { AppModule } from
'./app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);