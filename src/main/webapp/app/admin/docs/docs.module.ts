import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterFirstProjectSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [JhipsterFirstProjectSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent],
})
export class DocsModule {}
