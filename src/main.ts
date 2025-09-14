import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TaskComponent } from './app/app';

bootstrapApplication(TaskComponent, appConfig)
  .catch((err) => console.error(err));
