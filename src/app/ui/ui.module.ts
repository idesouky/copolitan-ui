import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BaseLayoutComponent } from "./base-layout/base-layout.component";

const routes: Routes = [{ path: "", component: BaseLayoutComponent }];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [BaseLayoutComponent]
})
export class UiModule {}
