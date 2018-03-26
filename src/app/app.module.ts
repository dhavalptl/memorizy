import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddMemoryComponent } from './add-memory/add-memory.component';
import { MemoryListComponent } from './memory-list/memory-list.component';
import { MemoryComponent } from './memory/memory.component';
import { DropdownModule } from './dropdown/dropdown.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddMemoryComponent,
    MemoryListComponent,
    MemoryComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
