'use client'
import { IconCopy } from '@tabler/icons-react'
import React from 'react'
import { useToast } from '../atoms/use-toast'

interface CopyToClipboardProps {
  text: string
}

export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const { toast } = useToast()
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text)
      toast({ title: `Text ${text} copied.` })
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="flex items-center space-x-2 border p-2 shadow-inner rounded justify-between bg-gray-300">
      <span>{text}</span>
      <button
        onClick={handleCopyClick}
        className="text-blue-500 hover:underline"
      >
        <IconCopy />
      </button>
    </div>
  )
}
