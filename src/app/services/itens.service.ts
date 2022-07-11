import { Itens } from './../models/itens';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  private objetos: Itens[] = [];
  
  constructor(private http: HttpClient) { 
    
  }

  criaObjetos(){
    this.objetos = [
      new Itens(
      1, 
      "Pratinha", "./assets/gazinho/modelo2.png", 
      "Instalação composta com 2 Skids de vasos P-2000 com grupo de regulagem mais 1 Skid de Pit-stop padrão Nacional Gás",
      "ra","583c7973-dc1a-4a36-860c-d28c45ad0163",
      "./assets/qrcode/1.png", 
      "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/2_skidsp2000_1_pitstop_rev02___1639170037340.usdz"
      ),
      new Itens(
        2, 
        "Pratinha Beijo", "./assets/gazinho/modelo9.png", 
        "Instalação composta com 1 Skid de vasos P-2000 com grupo de regulagem",
        "ra","9598fbe4-4e96-4780-910c-fc74c3f39c70",
        "./assets/qrcode/2.png", 
        "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_skidsp2000_rev06___1639169862024.usdz"
        ),

      new Itens(
        3, 
        "Pratinha Sério", "./assets/gazinho/modelo4.png", 
        "Instalação composta com 1 Skid de vasos P-2000 com grupo de regulagem",
        "ra","c4236d7b-a893-4870-bfe5-9ab7c9348709",
        "./assets/qrcode/3.png", 
        "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_skidsp2000_rev06___1639169862024.usdz"
        ),
        new Itens(
      4, 
      "Pratinha Feliz", "./assets/gazinho/modelo5.png", 
      "Instalação composta com 2 Skids de vasos P-2000 com grupo de regulagem mais 1 Skid de Pit-stop padrão Nacional Gás",
      "ra","d97960c4-adda-47e6-a977-a0726aefe6cc",
      "./assets/qrcode/4.png", 
      "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/2_skidsp2000_1_pitstop_rev02___1639170037340.usdz"
      ),
      new Itens(
      5, 
        "Pratinha Sorridente", "./assets/gazinho/modelo6.png", 
        "Instalação composta com 2 Skids de vasos P-2000 com grupo de regulagem mais 1 Skid de vaporizador elétrico (100 a 250kg/h)",
        "ra","105f3819-df71-45d3-8147-039858728dbc",
        "./assets/qrcode/5.png", 
        "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_2_skidsp2000_1_vaporizadoreletrico_rev02___1639170106924.usdz"
        ),
      new Itens(
      6, 
      "Pratinha Coração nos Olhos", "./assets/gazinho/modelo7.png", 
      "Instalação composta com 2 Skids de vasos P-4000 com grupo de regulagem mais 1 Skid de vaporizador elétrico (100 a 250kg/h)",

      "ra","d957ef60-a4b5-4829-9792-f72736afebbb",
      "./assets/qrcode/6.png",
      "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_2_skidsp4000_1_vaporizadoreletrico_rev02___1639170175987.usdz"
      ),
      new Itens(
        7, 
        "Pratinha na Balança", "./assets/gazinho/modelo8.png", 
        "Instalação composta com 1 Skid de vasos P-2000 com grupo de regulagem",
        "ra","dc1af935-91b4-4a9c-bcb5-d37171280709",
        "./assets/qrcode/7.png", 
        "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_skidsp2000_rev06___1639169862024.usdz"
        ),
        new Itens(
          8, 
          "Pratinha Beijo", "./assets/gazinho/modelo9.png", 
          "Instalação composta com 1 Skid de vasos P-2000 com grupo de regulagem",
          "3d","9598fbe4-4e96-4780-910c-fc74c3f39c70",
          "./assets/qrcode/2.png", 
          "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_skidsp2000_rev06___1639169862024.usdz"
          ),
  
        new Itens(
          9, 
          "Pratinha Sério", "./assets/gazinho/modelo4.png", 
          "Instalação composta com 1 Skid de vasos P-2000 com grupo de regulagem",
          "3d","c4236d7b-a893-4870-bfe5-9ab7c9348709",
          "./assets/qrcode/3.png", 
          "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_skidsp2000_rev06___1639169862024.usdz"
          ),
          new Itens(
        10, 
        "Pratinha Feliz", "./assets/gazinho/modelo5.png", 
        "Instalação composta com 2 Skids de vasos P-2000 com grupo de regulagem mais 1 Skid de Pit-stop padrão Nacional Gás",
        "3d","d97960c4-adda-47e6-a977-a0726aefe6cc",
        "./assets/qrcode/4.png", 
        "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/2_skidsp2000_1_pitstop_rev02___1639170037340.usdz"
        ),
        new Itens(
       11, 
          "Pratinha Sorridente", "./assets/gazinho/modelo6.png", 
          "Instalação composta com 2 Skids de vasos P-2000 com grupo de regulagem mais 1 Skid de vaporizador elétrico (100 a 250kg/h)",
          "3d","105f3819-df71-45d3-8147-039858728dbc",
          "./assets/qrcode/5.png", 
          "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_2_skidsp2000_1_vaporizadoreletrico_rev02___1639170106924.usdz"
          ),
        new Itens(
        12, 
        "Pratinha Coração nos Olhos", "./assets/gazinho/modelo7.png", 
        "Instalação composta com 2 Skids de vasos P-4000 com grupo de regulagem mais 1 Skid de vaporizador elétrico (100 a 250kg/h)",
  
        "3d","d957ef60-a4b5-4829-9792-f72736afebbb",
        "./assets/qrcode/6.png",
        "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_2_skidsp4000_1_vaporizadoreletrico_rev02___1639170175987.usdz"
        ),
        new Itens(
          13, 
          "Pratinha na Balança", "./assets/gazinho/modelo8.png", 
          "Instalação composta com 1 Skid de vasos P-2000 com grupo de regulagem",
          "3d","dc1af935-91b4-4a9c-bcb5-d37171280709",
          "./assets/qrcode/7.png", 
          "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_skidsp2000_rev06___1639169862024.usdz"
          ),
        new Itens(
          14, 
          "Pratinha", "./assets/gazinho/modelo10.png", 
          "Instalação composta com 1 Skid de vasos P-2000 com grupo de regulagem",
          "3d","dc1af935-91b4-4a9c-bcb5-d37171280709",
          "./assets/qrcode/7.png", 
          "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_skidsp2000_rev06___1639169862024.usdz"
          ),
        new Itens(
          15, 
          "Pratinha", "./assets/gazinho/modelo11.png", 
          "Instalação composta com 1 Skid de vasos P-2000 com grupo de regulagem",
          "3d","dc1af935-91b4-4a9c-bcb5-d37171280709",
          "./assets/qrcode/7.png", 
          "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_skidsp2000_rev06___1639169862024.usdz"
          ),
        new Itens(
          16, 
          "Pratinha", "./assets/gazinho/modelo12.png", 
          "Instalação composta com 1 Skid de vasos P-2000 com grupo de regulagem",
          "3d","dc1af935-91b4-4a9c-bcb5-d37171280709",
          "./assets/qrcode/7.png", 
          "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_skidsp2000_rev06___1639169862024.usdz"
          ),
        new Itens(
          17, 
          "Pratinha", "./assets/gazinho/modelo13.png", 
          "Instalação composta com 1 Skid de vasos P-2000 com grupo de regulagem",
          "3d","dc1af935-91b4-4a9c-bcb5-d37171280709",
          "./assets/qrcode/7.png", 
          "https://simple-xr-dashboard.s3.sa-east-1.amazonaws.com/nacionalgas/usdz_skidsp2000_rev06___1639169862024.usdz"
          ),
      
    ]
  }

  getObjetos(){
    return this.objetos;
  }
  getObjetosId(id: number){
    this.criaObjetos();
    
    for (let i = 0; i < this.objetos.length; i++) {
      if (this.objetos[i].Id == id){
        return this.objetos[i]
      }
      
    }
    return false;
  }

  getUrl(id: any){
    
    
    const result = this.http.post<any>(`https://39q8x2sgp7.execute-api.us-east-1.amazonaws.com/dev/augmented-reality/get`, id);
    return result;
  }
}
