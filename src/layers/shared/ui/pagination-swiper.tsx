'use client'

import { cn } from '@/src/layers/shared/lib/utils'
import Image from 'next/image'
import { FunctionComponent, HTMLAttributes } from 'react'
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

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
          type: 'fraction',
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
                    maxWidth: '250px',
                    width: '100%',
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
