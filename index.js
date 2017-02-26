const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My fave ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', {className: 'brown'}, 'Chocolate'),
        React.createElement('li', {className: 'white'}, 'Vanilla'),
        React.createElement('li', {className: 'pink'}, 'Strawberry')
      ]
    )
  )

ReactDOM.render(
  list,
  document.getElementById('main')
)
