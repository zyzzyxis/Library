import React from 'react'

const Patron = (props) => {
  // render (
  //   <div>
      {/* <h1>SINGLE PATRON PAGE</h1>
    </div>
  )
} */}


  
  return (
    <div className='main'>
      <h1>Patron {props.patron.id}</h1>
        <div className='nav'>
          <a href={`/breweries`}>All Breweries</a>
          <a href={`/breweries/${props.brewery.id}/patrons`}>Return to Patrons in Brewery {props.brewery.id}</a>
        </div>
      <div className="item-container">
        <div className="item-content">
          <h1>Patron Name: {props.patron.name}</h1>
          <p>Drink: {props.patron.drink}</p>
        </div>
        
        {/* <a href={`/departments/${props.department.id}/items/${props.item.id}/edit`}>Edit item</a>
        <a href={`/departments/${props.department.id}/items/${props.item.id}`} data-method='delete'>Delete item</a> */}
      </div>
    </div>
  )
}

export default Patron