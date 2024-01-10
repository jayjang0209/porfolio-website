import React from 'react'
import type { SectionHeadingProps } from '@/types/components/SectionHeadingPropsType'
import { motion } from 'framer-motion'

export default function SectionHeading({
  children
}: SectionHeadingProps) {
  return (
    <motion.div className="flex flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <h1 className="text-4xl font-bold mb-5 text-center indigo_gradient">{children}</h1>
    </motion.div>
  )
}