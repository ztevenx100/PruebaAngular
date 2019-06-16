import { Component } from "@angular/core";

@Component({
  selector: "app-imagen",
  templateUrl: "./imagen.component.html",
  styleUrls: ["./imagen.component.scss"]
})
export class ImagenComponent {
  title = "Mi pagina";

  ngOnInit() {
    const buttons = document.querySelectorAll(".project");
    const overlay = document.querySelector(".overlay");
    const overlayImage = document.querySelector(".overlay__inner img");

    function open(e) {
      overlay.classList.add("open");
      const src = e.currentTarget.querySelector("img").src;
      overlayImage.src = src;
    }

    function close() {
      overlay.classList.remove("open");
    }

    buttons.forEach(button => button.addEventListener("click", open));
    overlay.addEventListener("click", close);
  }
}
