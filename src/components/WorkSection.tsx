import React from 'react'
import SectionTitle from './ui/SectionTitle'

const WorkSection = () => {
  return (
    <section className="py-45 bg-zinc-950">
        <div className="container mx-auto max-w-7xl py-20 px-2 sm:px-6 lg:px-8">
            <SectionTitle text="How it works" />
            <div className='mx-auto max-w-2xl mt-6 text-center'>
                <p className='text-zinc-100'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque veniam inventore minus ad expedita quod aliquam! Magni, id.</p>
            </div>
        </div>
    </section>
  )
}

export default WorkSection
