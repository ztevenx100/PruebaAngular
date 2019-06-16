import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../components/pages/home.component";
import { ImagenComponent } from "../components/pages/imagen/imagen.component";
import { HistoriaComponent } from "../components/pages/historia/historia.component";
import { CancionComponent } from "../components/pages/cancion/cancion.component";
import { VideoComponent } from "../components/pages/video/video.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "imagenes", component: ImagenComponent },
  { path: "historias", component: HistoriaComponent },
  { path: "canciones", component: CancionComponent },
  { path: "videos", component: VideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule {}
