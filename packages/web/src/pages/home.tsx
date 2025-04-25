import { useEffect, useRef } from 'react'
import PageWrapper from '../layout/page'
import Button from '~/components/button'

export default function Home() {

  const ws = useRef<WebSocket|null>(null)
  useEffect(()=>{
    if(!ws.current){
      ws.current = new WebSocket('')
      ws.current.addEventListener('open',()=>{
        console.log('open')
      })
    }
    return ()=>{
      if(ws.current){
        ws.current?.close()
        ws.current = null
      }
    }
  },[])
  
  function handlePrint(){
    console.log('print')
  }

  return (
    <PageWrapper className="flex justify-center flex-col items-center">
      <Button type='button' onClick={handlePrint}>
        打印
      </Button>
      {/* <Link to="/reference" className="text-lg font-bold">reference</Link> */}
    </PageWrapper>
  )
}
