'use client'
import { Button, Input, Label, Collapsible } from 'monka-themes'
import { ElementRef, useRef, useState } from 'react'

const Checks = () => {
  const ref = useRef<ElementRef<'input'> | null>(null)
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col space-y-5 p-5">
      <div className="flex space-x-5">
        <Button variant="solid" color="success">
          Checks
        </Button>
        <Button variant="solid" color="success" onClick={() => setOpen(!open)}>
          Open
        </Button>
      </div>

      <div>
        <Input ref={ref} />
        <Input />
      </div>

      <Label>test</Label>

      <Collapsible open={open} lazy>
        <div className="flex flex-col space-y-4">
          <Label className="bg-gray-400">List item 1</Label>
          <Label className="bg-gray-400">List item 2</Label>
          <Label className="bg-gray-400">List item 3</Label>
          <Label className="bg-gray-400">List item 4</Label>
          <Label className="bg-gray-400">List item 5</Label>
          <Label className="bg-gray-400">List item 6</Label>
        </div>
      </Collapsible>
    </div>
  )
}

export default Checks
