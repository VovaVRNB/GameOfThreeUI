 import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
 import { AppRoutingModule } from './app-routing.module';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatIconModule} from '@angular/material/icon';
// import { ChartsModule } from 'ng2-charts';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatCardModule} from '@angular/material/card';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import {MatSliderModule} from '@angular/material/slider';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatTableModule} from '@angular/material/table';
// import {MatButtonModule} from '@angular/material/button';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatSelectModule} from '@angular/material/select';
 import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { GameComponent } from './game/game.component';
import { StatisticComponent } from './statistic/statistic.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    GameComponent,
    StatisticComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    // MatMenuModule,
    // MatIconModule,
    // ChartsModule,
    // MatDialogModule,
    // MatAutocompleteModule,
    // FormsModule,
    // ReactiveFormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSnackBarModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatSliderModule,
    // MatTabsModule,
    // MatTableModule,
    // MatButtonModule,
    // MatGridListModule,
    // MatRadioModule,
    // MatSelectModule,
     HttpClientModule
    // ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
