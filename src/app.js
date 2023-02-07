"use strict";
import { User } from "./User.js";
import { users } from "./data.js";

const affichageUsers = document.querySelector("main");

const getUser = () => {
	fetch(`https://randomuser.me/api/?results=20`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});
};

getUser();

const affiche = (users) => {
	affichageUsers.innerHTML = "";
	users.forEach((user) => {
		user.render();
	});
};
