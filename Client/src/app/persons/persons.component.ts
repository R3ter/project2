import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {


  constructor(private http : HttpClient) {}


  persons : any[] = []


    deletePerson(id : string) {
      this.http.delete(`http://localhost:8000/persons/${id}`).subscribe(status => {
        alert(status)
      })
    }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.get<any[]>("http://localhost:8000/persons/").subscribe(data => {
      this.persons = data
    })
  }


}
