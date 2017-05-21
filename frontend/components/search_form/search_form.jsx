import React from 'react'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: 100000,
      mileage: 100000,
      body_style: ['convertible', 'coupe', 'suv'],
      make: ['Chevrolet', 'Porsche', 'Tesla'],
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
      body_style: ['convertible', 'coupe', 'suv'],
      make: ['Chevrolet', 'Porsche', 'Tesla'],
      transmission: ['automatic', 'manual'],
      drivetrain: ['4wd', 'awd', 'rwd']
    })
  }

  resetField (field, value) {
    this.setState({field: value})
  }

  // <button onClick={this.resetField} value={this.state.body_style}>{this.state.body_style}</button>
  render () {
    const styleTop = this.state.body_style instanceof Array ? undefined : <div>{this.state.body_style.toUpperCase()}</div>;
    const makeTop = this.state.make instanceof Array ? undefined : <div>{this.state.make.toUpperCase()}</div>
    // const arr = [];
    // for (let i = 0; i < this.state.body_style.length; i++) {
    //   let style = this.state.body_style[i];
    //   arr.push(<li className='search-form-button'><button onClick={this.update('body_style')} value={style}>{style.toUpperCase()}</button></li>)
    // }
    return (
      <div className="search-form-container">
        <form className="search-form-box" onSubmit={this.handleSubmit}>
          <div className='search-form-top-text'>
            <p className='search-form-top-text-count'>{this.props.count} matches</p>
            <button onClick={this.resetForm} className='search-reset-button'>Clear</button>
          </div>
          {/*{styleTop}
          {makeTop}*/}
          <div className="search-form-header">
            MAX PRICE
          </div>
          <br/>
          <div className='search-form-current-value'>
            $ {parseInt(this.state.price).toLocaleString()}
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
          <div className='search-form-header'>
            BODY STYLE
          </div>
          <br/>
          <ul className='search-form-list collapsible'>

            <li className='search-form-button'><button onClick={this.update('body_style')} value='convertible'>Convertible</button></li>
            <li className='search-form-button'><button onClick={this.update('body_style')} value='coupe'>Coupe</button></li>
            <li className='search-form-button'><button onClick={this.update('body_style')} value='suv'>SUV</button></li>
          </ul>
          <br/>
          <div className='search-form-header'>
            MAKE
          </div>
          <br/>
          <ul className='search-form-list'>
            <li className='search-form-button'><button onClick={this.update('make')} value='Chevrolet'>Chevrolet</button></li>
            <li className='search-form-button'><button onClick={this.update('make')} value='Porsche'>Porsche</button></li>
            <li className='search-form-button'><button onClick={this.update('make')} value='Tesla'>Tesla</button></li>
          </ul>
          <br/>
          <div className='search-form-header'>
            TRANSMISSION
          </div>
          <br/>
          <ul className='search-form-list'>
            <li className='search-form-button'><button onClick={this.update('transmission')} value='automatic'>Automatic</button></li>
            <li className='search-form-button'><button onClick={this.update('transmission')} value='manual'>Manual</button></li>
          </ul>
          <br/>
          <div className='search-form-header'>
            DRIVETRAIN
          </div>
          <br/>
          <ul className='search-form-list'>
            <li className='search-form-button'><button onClick={this.update('drivetrain')} value='4wd'>4WD</button></li>
            <li className='search-form-button'><button onClick={this.update('drivetrain')} value='awd'>AWD</button></li>
            <li className='search-form-button'><button onClick={this.update('drivetrain')} value='rwd'>RWD</button></li>
          </ul>
          <br/>
        {/*<input type='submit' className='search-form-submit-button' value='Find Cars'></input>*/}
        </form>
      </div>
    )
  }
}

export default SearchForm
