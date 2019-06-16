import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { RouteModule } from "./route/route.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/pages/home.component";
import { HistoriaComponent } from "./components/pages/historia/historia.component";
import { ImagenComponent } from "./components/pages/imagen/imagen.component";
import { CancionComponent } from "./components/pages/cancion/cancion.component";
import { VideoComponent } from "./components/pages/video/video.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MenuComponent } from "./components/pages/menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HistoriaComponent,
    ImagenComponent,
    CancionComponent,
    VideoComponent,
    MenuComponent
  ],
  imports: [BrowserModule, FormsModule, RouteModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
