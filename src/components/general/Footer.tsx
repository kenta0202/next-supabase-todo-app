import { BadgeCheckIcon } from '@heroicons/react/solid'

const Footer = () => {
  return (
    <>
      {/* <footer className="px-4 text-gray-600 bg-gray-200">
        <small>&copy; 20xx example</small>
      </footer> */}
      <footer className="flex justify-center items-center w-full h-12 border-t">
        <BadgeCheckIcon className="w-6 h-6 text-blue-500" />
      </footer>
    </>
  )
}

export default Footer
