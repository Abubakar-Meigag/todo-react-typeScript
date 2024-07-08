import React from 'react'

const Edit = () => {

  const fetchData = async () => {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME'
  
    try {
      const res = await fetch(url);
      if ( !res.ok ) {
        throw new Error(`res status = ${res.status}`)
      }
  
      const jsonFile = await res.json();
      console.log(jsonFile);
    } catch (err) {
        console.error(err)
    }
  }
  fetchData();

  return (
    <div>Edit component</div>
  )
}

export default Edit