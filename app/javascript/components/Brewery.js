import React from 'react'


const Brewery = (props) => {
  
  const renderPatrons = () => {
    //map through all breweries, generate data for each in page
    return props.patrons.map( patron => {
      return(
        <div className="patron-container">
          <div className="patron-content">
            <h2>Patron Name: {patron.name}</h2>
            <h2>Patron Drink: {patron.drink}</h2>
            <hr className="patronSeparator"></hr>
          </div>
           {/* <a href={`/breweries/${brewery.id}/`}>Open Brewery</a> */}
          <a href={`/breweries/${brewery.id}/edit`}>Edit BreweryDepartment</a>
          <a href={`/breweries/${brewery.id}`} data-method='delete'>Delete Brewery</a> */}
        </div>
      )
    })
  }

  return (
    <div className='main'>
      <h1>Patron List at {props.brewery.name} </h1>
      <div className='nav'>
        <a href='/'>Home</a>
        {/* <a href='/breweries/${brewery.id}/patrons/new'>Add a Patron</a> */}
      </div>
      {renderPatrons()}

    </div>
  )
}
export default Brewery