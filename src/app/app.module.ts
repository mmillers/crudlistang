import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { MatCardModule,
         MatInputModule,
         MatSelectModule, 
         MatIconModule,
         MatListModule,
         MatRadioModule,
         MatDividerModule,
         MatFormFieldModule,
         MatButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EditUsersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
