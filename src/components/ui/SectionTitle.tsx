import React from 'react'

const SectionTitle = ({ text }: {text: string}) => {
  return (
    <h1 className="text-center text-4xl font-bold tracking-tight dark:text-zinc-100 text-zinc-100 sm:text-5xl">
      {text}
    </h1>
  )
}

export default SectionTitle
