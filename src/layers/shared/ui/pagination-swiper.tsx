'use client'

import { FunctionComponent, HTMLAttributes } from 'react'
import Image from 'next/image'
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cn } from '@/src/layers/shared/lib/utils'

interface PaginationSwiperProps extends HTMLAttributes<HTMLDivElement> {
  swipeImageData: SwipeImageData
}

const PaginationSwiper: FunctionComponent<PaginationSwiperProps> = ({
  className,
  swipeImageData,
  ...props
}) => {
  return (
    <div className={cn(className)} {...props}>
      <Swiper
        pagination={{
          type: 'fraction'
        }}
        navigation={true}
        className="size-full"
        modules={[Pagination, Navigation]}
      >
        {swipeImageData.map((data) => {
          return (
            <SwiperSlide key={data.imageSrc}>
              <div className="flex size-full items-center justify-center pb-10">
                <Image
                  unoptimized
                  src={data.imageSrc}
                  alt={data.imageAlt}
                  width={0}
                  height={0}
                  style={{
                    height: 'auto',
                    maxWidth: '200px',
                    width: '100%'
                  }}
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export { PaginationSwiper }
