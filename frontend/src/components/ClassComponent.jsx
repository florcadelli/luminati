import React, { Component } from 'react'

 class ClassComponent extends Component {

    
render() {
return (
<li>{this.props.nombre} {this.props.estaEnLista ? "esta " : "no esta "}invitado a la fiesta</li>
)
}
}

export default ClassComponent