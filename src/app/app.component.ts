import { Component } from '@angular/core';
import { Mangas } from './Mangas.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'mymanga';
  mangas : Mangas [] = [
    {
      name: 'One Piece',
      chapters: 1071,
      autor: 'Eichiro Oda',
      image: "./assets/images/OnePiece.jpg"
    },
    {
      name: "Alice in borderland",
      chapters: 64,
      autor: "Haro Aso",
      image: "./assets/images/AliceIB.jpg"
    },
    {
      name: "Ajin",
      chapters: 86,
      autor: "Gamon Sakurai",
      image: "./assets/images/Ajin.jpg"
    },
    {
      name: "Aku no hana",
      chapters: 57,
      autor: "Shizou Oshimi",
      image: "./assets/images/Akunhn.jpg"
    },
    {
      name: "Oyasumi Punpun",
      chapters: 147,
      autor: "Inio Asano",
      image: "./assets/images/OyasumiPunpun.jpg"
    },
    {
      name: "ChainsawMan",
      chapters: 116,
      autor: "Tatsuki Fujimoto",
      image: "./assets/images/Chenso.jpg"
    },
    {
      name: "Fire Punch",
      chapters: 96,
      autor: "Tatsuki Fujimoto",
      image: "./assets/images/firepu.jpg"
    },
    {
      name: "Tomo-Chan is a Girl",
      chapters: 95,
      autor: "Yanaguida Fumita",
      image: "./assets/images/Tomo.jpg"
    },
    {
      name: "Kaguya-Sama: Love is War",
      chapters: 281,
      autor: "Aka Akasaka",
      image: "./assets/images/Loveiswar.jpg"
    },
    {
      name: "My Broken Mariko",
      chapters: 5,
      autor: "Hirako Waka",
      image: "./assets/images/mbm.jpg"
    },
    {
      name: "Three days of hapiness",
      chapters: 18,
      autor: "Sugaro Miaki",
      image: "./assets/images/3days.jpg"
    },
    {
      name: "Nazo no kanojo X",
      chapters: 92,
      autor: "Riichi Ueshiba",
      image: "./assets/images/nnkx.jpg"
    },
    {
      name: "Mob Psycho",
      chapters: 102,
      autor: "One",
      image: "./assets/images/Mob.jpg"
    },
    {
      name: "Soul Eater",
      chapters: 113,
      autor: "Ookubo",
      image: "./assets/images/SoulEater.jpg"
    },
    {
      name: "The Horizon",
      chapters: 21,
      autor: "Desconocido",
      image: "./assets/images/THorizon.jpg"
    },
    {
      name: "A girl on the shore",
      chapters: 20,
      autor: "Inio Asano",
      image: "./assets/images/Agotshore.jpg"
    },
    {
      name: "Wotakoi",
      chapters: 87,
      autor: "Fujita",
      image: "./assets/images/Wotakoi.jpg"
    }]

}
