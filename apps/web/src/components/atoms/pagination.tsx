import { FIRST_PAGE, ITEMS_PER_PAGE } from '@krowdforce/util/constants'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from './button'

interface PaginationProps {
  skip: number
  totalResults: number
  itemsPerPage?: number
  onPageChange: (newPage: number) => void
}

export const Pagination: React.FC<PaginationProps> = ({
  skip,
  totalResults,
  itemsPerPage = ITEMS_PER_PAGE,
  onPageChange,
}) => {
  const currentPage = Math.floor(skip / itemsPerPage) + 1
  const totalPages = Math.ceil(totalResults / itemsPerPage)

  return (
    <div>
      <span>
        <span className="text-lg">{currentPage}</span> / {totalPages}
      </span>
      <div className="flex gap-2">
        <Button
          variant={'ghost'}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === FIRST_PAGE}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant={'ghost'}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}
