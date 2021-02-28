import React from 'react'

const Breweries = (props) =>{

  // const renderBreweries = () => {
  //   //map through all departments, generate data for each in page
  //   return props.breweries.map( department => {
  //     return(
  //       <div className="patron-container">
  //         <div className="patron-content">
  //           <h2>Brewery ID{brewery.id}</h2>
  //           <p>Brewery name: {brewery.name}</p>
  //           <hr className="patronseparator"></hr>
  //         </div>

  //         <a href={`/breweries/${brewery.id}/items`}>Open Brewery</a>
  //         <a href={`/breweries/${brewery.id}/edit`}>Edit Brewery</a>
  //         <a href={`/breweries/${brewery.id}/`} data-method='delete'>Delete Brewery</a>
          
  //       </div>
  //     )

  //   })

  // }

  // return (
  //   <div className='main'>
  //     <h1>All Breweries </h1>
  //     <div className='nav'>
  //       <a href='/'>Home</a>
  //       <a href='/breweries/new'>Create Brewery</a>
  //     </div>

  //     {/*run renderDepartments method to generate list of departments in page*/}
  //     {renderBreweries()}


  //   </div>
  // )

    
  return(
    <div>
      <h1>List of Breweries</h1>
      <h1>Brewery Name: {props.brewery.name}</h1>
      <h2>Here is the number of patrons that visit the brewery: {props.patron.size}</h2>
      <a href='/'>Home</a>
    </div>
  )


}

export default Breweries