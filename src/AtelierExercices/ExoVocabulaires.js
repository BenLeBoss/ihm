import React from "react"
import ReactDOM from "react-dom"
import "./Styles_Atelier.css"

import Exo1 from "./exercices/VocExo1.js"
import Exo2 from "./exercices/VocExo2.js"

class ExoVocab extends React.Component {
	state = {
		divcontainer1: false,
		divcontainer2: false,
		divcontainer3: false
	}
	compteur = 0

	TabEx = {
		exercices: [
			{id: 1, difficulté: "Facile", type: "Exercice", nom: "For, since, ago"},
			{
				id: 2,
				difficulté: "Facile",
				type: "Exercice",
				nom: "Les auxiliaires en anglais"
			},
			{
				id: 3,
				difficulté: "Facile",
				type: "Exercice",
				nom: "Construire des phrases"
			},
			{
				id: 4,
				difficulté: "Modéré",
				type: "Exercice",
				nom: "Impératif en anglais"
			},
			{
				id: 5,
				difficulté: "Modéré",
				type: "Exercice",
				nom: "Le futur - Will et Going to"
			},
			{
				id: 6,
				difficulté: "Modéré",
				type: "Exercice",
				nom: "Prétérit simple et progressif"
			},
			{
				id: 7,
				difficulté: "Difficile",
				type: "Exercice",
				nom: "Le present perfect"
			},
			{
				id: 8,
				difficulté: "Difficile",
				type: "Exercice",
				nom: "Some, any, no"
			},
			{
				id: 9,
				difficulté: "Difficile",
				type: "Exercice",
				nom: "L'art en anglais"
			}
		]
	}

	displayExoVocab(value) {
		const exo1 = document.getElementById("body")
		console.log(value)
		if (value === 1) {
			ReactDOM.render(<Exo1 />, exo1)
		} else if (value === 2) {
			ReactDOM.render(<Exo2 />, exo1)
		} else if (value === 3) {
			ReactDOM.render(<Exo2 />, exo1)
		}
	}

	render() {
		var HandleChange1 = (e) => {
			this.setState({divcontainer1: !this.state.divcontainer1})
		}
		var HandleChange2 = (e) => {
			this.setState({divcontainer2: !this.state.divcontainer2})
		}
		var HandleChange3 = (e) => {
			this.setState({divcontainer3: !this.state.divcontainer3})
		}

		var countFacile = 0,
			countModéré = 0,
			countDifficile = 0
		const title = "Exercices de Vocabulaire :"
		const elementsFacile = this.TabEx.exercices.map(
			function (exo) {
				if (exo.difficulté == "Facile") {
					return (
						<li>
							<a href="#" onClick={() => this.displayExoVocab(exo.id)}>
								&ensp;{exo.type}
								{exo.id} : {exo.nom}{" "}
							</a>
						</li>
					)
				}
			}.bind(this)
		)
		const elementsModéré = this.TabEx.exercices.map(function (exo) {
			if (exo.difficulté == "Modéré") {
				var countModéré = countModéré + 1
				return (
					<li>
						&ensp;{exo.type}
						{exo.id} : {exo.nom}{" "}
					</li>
				)
			}
		})
		const elementsDifficile = this.TabEx.exercices.map(function (exo) {
			if (exo.difficulté == "Difficile") {
				var countDifficile = countDifficile + 1
				return (
					<li>
						&ensp;{exo.type}
						{exo.id} : {exo.nom}{" "}
					</li>
				)
			}
		})
		const x = this.state.divcontainer1
		const y = this.state.divcontainer2
		const z = this.state.divcontainer3
		return (
			<form>
				<h4>
					<u>{title}</u>
				</h4>
				<h5>
					<button onClick={HandleChange1}>Facile</button>
					{x && <h5>{elementsFacile}</h5>}
				</h5>
				<h5>
					<button onClick={HandleChange2}>Modéré</button>
					{y && (
						<h5>
							<a href="#" onClick={this.displayExo1Vocab}>
								{elementsModéré}
							</a>
						</h5>
					)}
				</h5>
				<h5>
					<button onClick={HandleChange3}>Difficile</button>
					{z && (
						<h5>
							<a href="#" onClick={this.displayExo1Vocab}>
								{elementsDifficile}
							</a>
						</h5>
					)}
				</h5>
			</form>
		)
	}
}

export default ExoVocab
