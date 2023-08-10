import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-createperson",
  templateUrl: "./createperson.component.html",
  styleUrls: ["./createperson.component.css"],
})
export class CreatepersonComponent {
  constructor(private http: HttpClient) {}

  // per : any = {}

  sendData(name: string, age: number, city: string) {
    console.log(name, age, city);
    this.http
      .post("http://localhost:8000/persons/", {
        name: name,
        age: age,
        city: city,
      })
      .subscribe((status) => {
        location.reload();
      });
  }
}
