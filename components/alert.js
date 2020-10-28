import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-blue-700 bg-opacity-100 text-white' : !preview,
      })}
    >
      <Container >
        <div className="py-4 flex justify-between">

        <div className="flex w-2/4">
        <a href={`https://ciliumgroup.com`}>
        <img className="block w-2/4 mr-8 pr-12 py-1 px-2" 
        src="https://ciliumgroup.com/images/logo.png" >
        </img>
        </a>
        </div>
        
          {preview ? (
            {/* <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </> */}
          ) : (
            <>
              {/* Go back to the main website{' '}  */}
               {/* <a
                href={`https://ciliumgroup.com`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                Ciliumgroup
              </a> */}
              
            </>
          )}
         <div className="flex item-center  ">
         <a href={`https://ciliumgroup.com/contact.html`} className="outline-none">
         <button className="block bg-blue-800 text-yellow-600 font-bold border border-bold 
          border-yellow-600 hover:bg-yellow-700 hover:text-white rounded-full py-2 px-3 mt-10 text-2x1 outline-none">
          Get in touch
          </button>
         </a>
         
          </div>


        </div>
          
      </Container>
    </div>
  )
}
