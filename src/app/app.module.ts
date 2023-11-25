import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserInterceptor } from './Shared/user.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { LeadsComponent } from './components/leads/leads.component';
import { TopWidgetComponent } from './components/dashboardComponents/top-widget/top-widget.component';
import { MiddlePartComponent } from './components/dashboardComponents/middle-part/middle-part.component';
import { MiddlePart2Component } from './components/dashboardComponents/middle-part2/middle-part2.component';
import { BottomWidgetComponent } from './components/dashboardComponents/bottom-widget/bottom-widget.component';
import { MiddleWidgetComponent } from './components/dashboardComponents/middle-widget/middle-widget.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    LeadsComponent,
    TopWidgetComponent,
    MiddlePartComponent,
    MiddlePart2Component,
    BottomWidgetComponent,
    MiddleWidgetComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
