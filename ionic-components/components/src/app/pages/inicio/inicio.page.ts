import { Component, OnInit } from "@angular/core";
interface Elemento {
  icon: string;
  name: string;
  redirectTO: string;
}

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"],
})
export class InicioPage implements OnInit {
  elementos: Elemento[] = [
    {
      icon: "construct-outline",
      name: "Action-sheet",
      redirectTO: "/action-sheet",
    },
    {
      icon: "alert-outline",
      name: "Alert",
      redirectTO: "/alert",
    },
    {
      icon: "person-circle-outline",
      name: "Avatar",
      redirectTO: "/avatar",
    },
    {
      icon: "beer-outline",
      name: "Buttons",
      redirectTO: "/buttons",
    },
    {
      icon: "card-outline",
      name: "Cards",
      redirectTO: "/card",
    },
    {
      icon: "list-circle-outline",
      name: "Listas",
      redirectTO: "/listas",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
