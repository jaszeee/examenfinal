export class User {
	constructor(prenom, age, email, photo) {
		this.prenom = prenom;
		this.age = age;
		this.email = email;
		this.photo = photo;

		this.presence = "false";
		this.element = this.generateElement();
	}

	generateElement() {
		const user = document.createElement("div");
		user.classList.add("user");
		const childHTML = `		<div class="user--info">
        <h1>${this.prenom}</h1>
        <p>${this.age + " years Old"}</p>
        <p>Baak, Netherlands</p>
</div>`;
		user.insertAdjacentElement("afterbegin", childHTML);
		return user;
	}
	render = (affichageUsers) => {
		affichageUsers.appendChild(this.element);
	};
}
