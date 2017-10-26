import React from 'react'
import Collapsible from 'react-collapsible'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 100000,
      mileage: 100000,
      body_style: ['convertible', 'coupe', 'sedan', 'suv'],
      make: ['BMW', 'Chevrolet', 'Ford', 'Lexus', 'Mazda', 'Mercedes-Benz', 'Porsche', 'Tesla'],
      transmission: ['automatic', 'manual'],
      drivetrain: ['4wd', 'awd', 'rwd']
    }
    this.submitSearch = this.submitSearch.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.resetField = this.resetField.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.submitSearch()
  }

  update (field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    }, () => this.submitSearch(e))
  }

  submitSearch () {
    const search = this.state
    this.props.getSearchCars({search})
  }

  resetForm () {
    this.setState({
      price: 100000,
      mileage: 100000,
      body_style: ['convertible', 'coupe', 'sedan', 'suv'],
      make: ['BMW', 'Chevrolet', 'Ford', 'Lexus', 'Mazda', 'Mercedes-Benz', 'Porsche', 'Tesla'],
      transmission: ['automatic', 'manual'],
      drivetrain: ['4wd', 'awd', 'rwd']
    })
  }

  resetField (field, value) {
    this.setState({field: value})
  }

  render () {
    const styleTop = this.state.body_style instanceof Array ? undefined : <div>{this.state.body_style.toUpperCase()}</div>;
    const makeTop = this.state.make instanceof Array ? undefined : <div>{this.state.make.toUpperCase()}</div>
    return (
        <form className="search-form-box" onSubmit={this.handleSubmit}>
          <div className='search-form-top-text-container'>
            <div className='search-form-top-text'>
              <p className='search-form-top-text-count'>{this.props.count} matches</p>
              <button onClick={this.resetForm} className='search-reset-button'>Clear</button>
            </div>
          </div>
          <div className="search-form-header search-form-header-top">
            MAX PRICE
          </div>
          <br/>
          <div className='search-form-current-value'>
            ${parseInt(this.state.price).toLocaleString()}
          </div>
          <br/>
          <input type='range' value={this.state.price} onChange={this.update('price')} className='search-form-slider' min='0' max='100000' step='5000' />
          <br/>
          <div className='search-form-header'>
            MAX MILEAGE
          </div>
          <br/>
          <div className='search-form-current-value'>
            {parseInt(this.state.mileage).toLocaleString()}
          </div>
          <br/>
          <input type='range' value={this.state.mileage} onChange={this.update('mileage')} className='search-form-slider' min='0' max='100000' step='5000' />
          <br/>
            <Collapsible trigger="BODY STYLE" className='search-form-header' openedClassName='search-form-header' transitionTime={250} >
              <ul className='search-form-list'>
                <li className='search-form-button'><button onClick={this.update('body_style')} value='convertible'>Convertible</button></li>
                <li className='search-form-button'><button onClick={this.update('body_style')} value='coupe'>Coupe</button></li>
                <li className='search-form-button'><button onClick={this.update('body_style')} value='sedan'>Sedan</button></li>
                <li className='search-form-button'><button onClick={this.update('body_style')} value='suv'>SUV</button></li>
              </ul>
          </Collapsible>
          <br/>
          <Collapsible trigger="MAKE" className='search-form-header' openedClassName='search-form-header' transitionTime={250} >
            <ul className='search-form-list'>
              <li className='search-form-button'><button onClick={this.update('make')} value='BMW'>BMW</button></li>
              <li className='search-form-button'><button onClick={this.update('make')} value='Chevrolet'>Chevrolet</button></li>
              <li className='search-form-button'><button onClick={this.update('make')} value='Ford'>Ford</button></li>
              <li className='search-form-button'><button onClick={this.update('make')} value='Lexus'>Lexus</button></li>
              <li className='search-form-button'><button onClick={this.update('make')} value='Mazda'>Mazda</button></li>
              <li className='search-form-button'><button onClick={this.update('make')} value='Mercedes-Benz'>Mercedes-Benz</button></li>
              <li className='search-form-button'><button onClick={this.update('make')} value='Porsche'>Porsche</button></li>
              <li className='search-form-button'><button onClick={this.update('make')} value='Tesla'>Tesla</button></li>
            </ul>
          </Collapsible>
          <br/>
          <Collapsible trigger="TRANSMISSION" className='search-form-header' openedClassName='search-form-header' transitionTime={250} >
            <ul className='search-form-list'>
              <li className='search-form-button'><button onClick={this.update('transmission')} value='automatic'>Automatic</button></li>
              <li className='search-form-button'><button onClick={this.update('transmission')} value='manual'>Manual</button></li>
            </ul>
          </Collapsible>
          <br/>
          <Collapsible trigger="DRIVETRAIN" className='search-form-header' openedClassName='search-form-header' transitionTime={250} >
            <ul className='search-form-list'>
              <li className='search-form-button'><button onClick={this.update('drivetrain')} value='4wd'>4WD</button></li>
              <li className='search-form-button'><button onClick={this.update('drivetrain')} value='awd'>AWD</button></li>
              <li className='search-form-button'><button onClick={this.update('drivetrain')} value='rwd'>RWD</button></li>
            </ul>
          </Collapsible>
        {/*<input type='submit' className='search-form-submit-button' value='Find Cars'></input>*/}
        </form>
    )
  }
}

export default SearchForm
