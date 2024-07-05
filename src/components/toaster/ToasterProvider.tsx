import { Toaster } from 'react-hot-toast';


const ToasterProvider = () => {
  return (
    <Toaster 
      toastOptions={{
            style: {
                  background: '#333',
                  color: '#fff',
                  padding: '20px 10px',
                  fontStyle:'semibold-bold'
            }
      }}
    
    />
  )
}

export default ToasterProvider