'use client'
import { Button } from 'monka-themes/dist/components'

const Test = () => {
  return (
    <div className="flex flex-col p-5">
      <div className="flex space-x-5">
        <Button
          variant="solid"
          onClick={() => {
            console.log('test')
          }}
        >
          test
        </Button>
      </div>
    </div>
  )
}

export default Test
