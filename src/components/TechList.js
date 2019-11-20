import React, { Component } from 'react'
import TechItem from './TechItem'

class TechList extends Component {

  state = {
    newTech: '',
    techs: []
  }

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs')

    if (techs) {
      this.setState({ techs: JSON.parse(techs) })
    }
  }

  // Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(prevProps, prevState) {
    // this.props, this.state
    if (prevState !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // quando o componente deixa de existir
  componentWillUnmount() {

  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.newTech)
    this.setState({ techs: [...this.state.techs, this.state.newTech], newTech: '' })
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
    console.log(tech)
  }

  render() {
    console.log(this.state)
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.newTech}</h1>
          <ul>
            {this.state.techs.map(tech => <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)} />)}
            {/* <TechItem /> */}
          </ul>
          <input type="text" onChange={this.handleInputChange} value={this.state.newTech} />
          <button type="submit">Enviar</button>
        </form>
      </>
    )
  }
}

export default TechList