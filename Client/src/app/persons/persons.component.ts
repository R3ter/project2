import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.css"],
})
export class PersonsComponent {
  constructor(private http: HttpClient) {}

  persons: any[] = [];

  deletePerson(id: string) {
    this.http
      .delete(`http://localhost:8000/persons/${id}`)
      .subscribe((status) => {
        location.reload();
      });
  }

  ngOnInit(): void {
    this.http
      .get<{ age: number; city: string; name: string; _id: string }[]>(
        "http://localhost:8000/persons/"
      )
      .subscribe((data) => {
        console.log(data);
        this.persons = data;
      });
  }
}
