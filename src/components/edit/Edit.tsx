import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'



export default function Edit() {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="px-4 py-3 text-xl font-semibold text-black bg-yellow-500 rounded-md hover:bg-amber-200 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
      >
        Edit
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 py-14 px-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-3xl font-medium text-white">
                Edit Todo
              </DialogTitle>
              <input className="mt-5 w-11/12 inline-center border-2 border-solid border-zinc-400 text-xl text-white p-2" />

              <div className="mt-4 gap-2">
                <Button
                  className="inline-flex items-center gap-2 mr-2 cursor-pointer rounded-md bg-yellow-500 py-2 px-3 font-semibold text-gray-900 hover:text-red-500 text-xl shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Edit
                </Button>
                <Button
                  className="inline-flex items-center gap-2 cursor-pointer rounded-md bg-red-600 py-2 px-3 font-semibold text-white text-xl hover:text-yellow-400 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
