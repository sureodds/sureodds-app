import { useState } from 'react'
import heroImg from '/public/dark-project-app-screenshot.png'
import Image from 'next/image';

export default function Hero() {

  return (
    <div className="bg-zinc-100 dark:bg-zinc-950 heroGrid h-auto overflow-scroll sm:overflow-hidden">
      <div className="relative isolate px-6 pt-4 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 sm:py-56 lg:py-25">
          <div className="hidden sm:mb-8 sm:flex sm:justify-start">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 dark:text-zinc-100 text-zinc-950 ring-1 dark:ring-zinc-600 ring-zinc-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight dark:text-zinc-100 text-zinc-950 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
            </p>
            <div className="mt-10 flex items-center justify-start gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-16 sm:pt-40 bg-red sm:-mr-96">
        <Image src={heroImg} alt='HeroImage' sizes="100vw"
        placeholder="blur" priority className="rounded-md heroImg" />
      </div>
    </div>
  )
}
