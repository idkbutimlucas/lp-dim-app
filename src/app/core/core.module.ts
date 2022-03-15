import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StudentModule } from '../student/student.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  imports: [CommonModule, SharedModule, StudentModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
