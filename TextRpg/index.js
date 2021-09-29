let textElement = document.getElementById('text');
let anotherElement = document.getElementById('another');
let moreElement = document.getElementById('more');

let party = [
	{ nome: "Robisval", level: 1, forca: 2, defesa: 4, exp: 0 },
	{ nome: "Josisley", level: 1, forca: 5, defesa: 7, exp: 1 },
	{ nome: "Pedro", level: 2, forca: 1, defesa: 2, exp: 5 }
];

let moments = [
	{
		texto: "You instinctively go deeper into the cave. You keep walking until you find two paths.",
		escolhas: [
			{	isCerta: true, opcao: "go right" },
			{	isCerta: false, opcao: "go left"	}
		],
    exp: 0
	},
	{
		texto: "Going to the right seems like the right thing to do. You You keep walking until a bat attacks you",
		escolhas: [
			{ isCerta: true, opcao: "fight" },
			{ isCerta: false, opcao: "flee" }
		],
    exp: 0
	},
	{
		texto: "You win the fight with a single blow. Won 1xp",
		escolhas: [
			{ isCerta: true, opcao: "continue" },
			{ isCerta: false, opcao: "return to the entrance. (you know the answer)" }
		],
    exp: 5
	},
	{
		texto: "You move on, almost as if someone is forcing you to. After some walking in an overwhelming darkness, it is broken by a small light, you keep approaching but you start to feel awkward and pass out before you reach your destination.",
		escolhas: [
			{ isCerta: true, opcao: "???" },
			{ isCerta: false, opcao: "???" }
		],
    exp: 0
	}
]
let m = 0
		
function setTextos() {
  textElement.textContent = moments[m].texto
  anotherElement.textContent = moments[m].escolhas[0].opcao + " or " + moments[m].escolhas[1].opcao
  document.getElementById("btn-esq").textContent = moments[m].escolhas[0].opcao
  document.getElementById("btn-dir").textContent = moments[m].escolhas[1].opcao
}

function check(indice) {
  if (moments[m].escolhas[indice].isCerta) {
    m += 1
    setTextos()
    setStats(moments[m].exp)
  }
  else {
    textElement.textContent = "Try again";
  }
  moreElement.textContent = "";
}
		
function status(){
	if (moreElement.textContent === "") {
		for (let i=0; i<party.length; i++) {
      let para = document.createElement("p");
      let node = document.createTextNode(
        party[i].nome + ": Level: " + party[i].level + " Strength: " + party[i].forca + " Defense: " + party[i].defesa + " Experience: " + party[i].exp
      )
      para.appendChild(node);
			moreElement.appendChild(para)
		}
	}
	else
		moreElement.textContent = ""
}

function setStats(exp) {
  for (let i=0; i<party.length; i++) {
    party[i].exp += exp
  }
}

setTextos()
