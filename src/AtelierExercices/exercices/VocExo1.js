import React from "react"
import {render} from "react-dom"
import ReactDOM from "react-dom"

class Exo1 extends React.Component {
	render() {
		return (
			<form>
				<h5>
					1. The client is &ensp;
					<input type="text" placeholder="Réponse" />
					&ensp;from Paris.
				</h5>
			</form>
		)
	}
}

export default Exo1
