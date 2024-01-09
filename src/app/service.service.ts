import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  URL: string = 'http://localhost:3000/datas';
  cardData: any;

  AllData() {
    return this.http.get(this.URL);
  }

  GetById(id: any) {
    return this.http.get(`${this.URL}/${id}`);
  }

  deleteById(id: any) {
    return this.http.delete(`${this.URL}/${id}`);
  }

  updateById(id: any, data: any) {
    return this.http.put(`${this.URL}/${id}`, data);
  }

  postData(data: any) {
    return this.http.post(`${this.URL}`, data);
  }

  getByName(name:any){
    return this.http.get(`${this.URL}?name=${name}`);
  }

  getData(data: any) {
    this.cardData = data;

    console.log(this.cardData);
  }

  //Team Part

  teamURL = 'http://localhost:3000/team';

  postTeamMember(data: any) {
    return this.http.post(`${this.teamURL}`, data);
  }

  getAllteamMember() {
    return this.http.get(this.teamURL);
  }

  teamGetById(id: any) {
    return this.http.get(`${this.teamURL}/${id}`);
  }

  teamDeleteById(id: any) {
    return this.http.delete(`${this.teamURL}/${id}`);
  }

  teamUpdateById(id: any, data: any) {
    return this.http.put(`${this.teamURL}/${id}`, data);
  }

  // Order Part

  orderURL = 'http://localhost:3000/orders';

  postOrder(data: any) {
    return this.http.post(`${this.orderURL}`, data);
  }

  getOrder(){
    return this.http.get(`${this.orderURL}`);
  }

  getOrderDelete(id:any){
    return this.http.delete(`${this.orderURL}/${id}`);
  }
}
