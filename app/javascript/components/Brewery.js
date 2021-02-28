import React from 'react'


const Brewery = () => {
  
    return(
      <div>
        <h1>See the note below</h1>
        {/* <h1>Title: {props.brewery.name}</h1> */}
        {/* <h2>Here is your note:{props.note.description}</h2> */}
        <a href='/'>Home</a>
      </div>
    )
  }
  
  
  
//   //map through all items in specific department, generate data for each in page
//   const renderPatrons = () => {
//     return props.patrons.map( item => {
//       return(
//         <div className="patron-container">
//           <div className="patron-content">
//             {/* <h2>Item {item.id}</h2> */}
//             <p>Quantity {item.quantity}</p>
//             <p>Comment: {item.comment}</p>
//             <hr class="itemSeparator"></hr>
//           </div>

//           <a href={`/departments/${props.department.id}/items/${item.id}`}>Open this item</a>
//           <a href={`/departments/${props.department.id}/items/${item.id}/edit`}>Edit this item</a>
        
        
//         </div>
//       )

//     })

//   }

//   return (
//     <div className='main'>
//       <h1>Department {props.department.id}</h1>
//         <div className='nav'>
//           <a href='/departments'>All Departments</a>  
//           <a href={`/departments/${props.department.id}/items/new`}>Add a New Item to this Department</a>
//           <a href={`/departments/${props.department.id}/edit`}>Edit this Department</a>  
//           <a href={`/departments/${props.department.id}/`} data-method='delete'>Delete this Department</a>      
//         </div>
        
//         <p>Items in current department: </p>

//         {/*run method to generate list of items for specific department in page */}
//         {renderItems()}
        
//     </div>
//   )
// }

export default Brewery