import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  fecha = "29-05-2019";
  autor = "Zteven";
  nombre = "Pedro Castiblanco";
  anoCreacion = 2019;

  constructor() {}

  ngOnInit() {}
}
