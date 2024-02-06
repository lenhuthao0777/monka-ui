'use client'
import { Button, Input } from 'monka-themes'
import { ElementRef, useRef } from 'react'

const Checks = () => {
  const ref = useRef<ElementRef<'input'> | null>(null)

  return (
    <div className="flex flex-col space-y-5 p-5">
      <div className="flex space-x-5">
        <Button variant="solid" color="success">
          Checks
        </Button>
        <Button variant="solid" color="success">
          Checks
        </Button>
      </div>

      <div>
        <Input ref={ref} />
      </div>
    </div>
  )
}

export default Checks
