import { Component, signal } from "@angular/core";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  toggle = signal(true);
}
