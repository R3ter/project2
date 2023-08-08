import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-updateperson',
  templateUrl: './updateperson.component.html',
  styleUrls: ['./updateperson.component.css']
})
export class UpdatepersonComponent {

  constructor(private http : HttpClient) {}


  sendData(id: string, name: string, age : number, city : string) {
    this.http.put(`http://localhost:8000/persons/${id}`, {name: name, age: age, city: city}).subscribe(status => {
      alert(status)

    })
  }

}
