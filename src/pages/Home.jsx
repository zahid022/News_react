import React from 'react'
import LazyLoad from '../components/LazyLoadSlider'
import { useGetPagNewsQuery } from '../store/api'
import Loading from '../components/Loading'
import Hotnow from '../components/Hotnow'
import HandleGrid from '../components/HandleGrid'
import Content from '../components/Content'

function Home() {

  const { isLoading } = useGetPagNewsQuery(1)

  return (
    <div>
      {isLoading ? (
        <div className="flex h-[80vh] w-full justify-center items-center">
          <Loading />
        </div>
      ) : (
        <main>
          <section id='heroSection' className='py-10'>
            <div className="container mx-auto px-4 2xl:w-[1300px]">
              <div className='flex flex-wrap'>
                <div className='w-full mb-8 lg:mb-0 lg:w-6/12 lg:order-1'>
                  <div>
                    <LazyLoad />
                  </div>
                </div>
                <div className='w-full lg:w-3/12'>
                  <div>
                    <div className='py-2 border-b flex items-center gap-2 border-[#EFEFEF]'>
                      <span className='block w-2 h-2 bg-[#FFA914]'></span>
                      <h2 className='font-medium text-[18px]'>Hot now</h2>
                    </div>
                    <div className='py-2'>
                      <Hotnow pg={2} />
                    </div>
                  </div>
                </div>
                <div className='hidden lg:block lg:order-2 lg:w-3/12'>
                  <div>
                    <div className='py-2 border-b flex items-center gap-2 border-[#EFEFEF]'>
                      <span className='block w-2 h-2 bg-[#FFA914]'></span>
                      <h2 className='font-medium text-[18px]'>Live now</h2>
                    </div>
                    <div className='py-2'>
                      <Hotnow pg={3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='bg-[#191919] py-10'>
            <div className="container mx-auto px-4 2xl:w-[1300px]">
              <div>
                <div className='flex gap-3 mb-3 items-center text-white'>
                  <span className='block w-2 h-2 bg-[#FFA914]'></span>
                  <h2 className='font-medium text-[18px]'>Hand-picked news</h2>
                </div>
                <HandleGrid />
              </div>
            </div>
          </section>
          <section className='py-10'>
            <div className="container mx-auto px-4 2xl:w-[1300px]">
              <Content />
            </div>
          </section>
        </main >
      )}
    </div>
  )
}

export default Home