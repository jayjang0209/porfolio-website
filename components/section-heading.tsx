import React from 'react'
import type { SectionHeadingProps } from '@/types/components/SectionHeadingPropsType'

export default function SectionHeading({
  children
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-5 text-center indigo_gradient">{children}</h1>
    </div>
  )
}