/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import Header from '../src/components/header.tsx/header'


// import { skills, connectToDB } from '../db'

export default function Home(){
  return (
    <>

      <Header />
    </>
  )
}

// export async function getStaticProps() {
//   const { db } = await connectToDB()
//   const allSkills = await skills.getAllSkills(db)

//   return {
//     props: {
//       skills: JSON.parse(JSON.stringify(allSkills)),
//     },
//   }
// }
