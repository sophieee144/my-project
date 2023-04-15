import React from 'react'
import { useState, useRef } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const ValideModal = () => {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
  return (
    <div>
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Well done!</strong>
          <span className="block sm:inline"> Aww yeah, you successfully add account to your data.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <button
                  type="button"
                  className="text-green-900 hover:text-green-700"
                  onClick={() => setOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
          </span>
        </div>
    </div>
  )
}

export default ValideModal