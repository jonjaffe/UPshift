import React from 'react';

class Favorites extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.favorites)}
      </div>
    )
  }
}

export default Favorites
