import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './input/input.component';
import { ResultComponent } from './result/result.component';

@NgModule({
    declarations: [AppComponent, InputComponent, ResultComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
