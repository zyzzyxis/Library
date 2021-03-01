import React from 'react'

const Breweries = (props) =>{
        
  const renderBrewery = () => {
    //map through all breweries, generate data for each in page
    return props.breweries.map( brewery => {
      return(
        <div className="patron-container">
          <div className="patron-content">
            <h1>Brewery Name: {brewery.name}</h1>
            <p>Brewery ID: {brewery.id}</p>
            <hr className="patronSeparator"></hr>
          </div>
          <a href={`/breweries/${brewery.id}/`}>Open Brewery</a>
          <a href={`/breweries/${brewery.id}/edit`}>Edit BreweryDepartment</a>
          <a href={`/breweries/${brewery.id}`} data-method='delete'>Delete Brewery</a>
        </div>
      )
    })
  }

  return (
    <div className='main'>
      <h1>All Breweries </h1>
      <div className='nav'>
        <a href='/'>Home</a>
        <a href='/breweries/new'>Create Brewery</a>
      </div>
      {renderBrewery()}

    </div>
  )

}

export default Breweries