import Card from '@/components/common/card'
import Footer from '@/components/footer/footer'
import React from 'react'

const Page = () => {
    return (
        <div className=' w-[100%] p-5'>
            <p className=' font-medium text-2xl mb-3 text-center '>Courses</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    [...Array(4)].map((item, index) => {
                        return (
                            <div key={ index }>
                                <Card />
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}

export default Page