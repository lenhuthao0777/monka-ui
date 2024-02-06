'use client'
import { Button, Input } from 'monka-themes'

const Checks = () => {
  return (
    <div className="flex flex-col p-5">
      <div className="flex space-x-5">
        <Button variant="solid" color="success">
          Checks
        </Button>
        <Button variant="solid" color="success">
          Checks
        </Button>
      </div>

      <div>
        <Input />
      </div>
    </div>
  )
}

export default Checks
