import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterFirstProjectSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipsterFirstProjectSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class JhipsterFirstProjectHomeModule {}
