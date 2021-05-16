import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'messages' },
    {
      path: 'messages',
      loadChildren: () =>
        import('./messages/messages.module').then((m) => m.MessagesModule),
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
            BrowserModule,
            HttpClientModule,
            AppStoreModule,
            RouterModule.forRoot(routes)
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}