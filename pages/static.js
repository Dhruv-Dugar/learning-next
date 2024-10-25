import React from 'react'


export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const output = await res.json()

    return {
        props: {
            apiData: output
        }
    }
}




function StaticPosts({apiData}) {
  console.log(apiData)
  return (
    <div>
      <h1>This page is a Static Ppage with SSG</h1>
      {apiData.map((apiDataItem) => (
        <div key={apiDataItem.id}>
          <h2>{apiDataItem.title}</h2>
          <p>{apiDataItem.completed.toString()}</p>
          </div>
      ))}
    </div>
  )
}

export default StaticPosts
