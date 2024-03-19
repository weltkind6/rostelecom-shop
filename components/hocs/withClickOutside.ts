import {
  ForwardRefExoticComponent,
  MutableRefObject,
  RefAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'
import { IWrappedComponentProps } from '@/types/hocs'

type WrappedComponentType = ForwardRefExoticComponent<
  IWrappedComponentProps & RefAttributes<HTMLDivElement>
>

export function withClickOutside(WrappedComponent: WrappedComponentType) {
  const Component = () => {
    const [open, setOpen] = useState(false)
    const ref = useRef() as MutableRefObject<HTMLDivElement>

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (!ref.current.contains(e.target as HTMLDivElement)) {
          setOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [ref])

    return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />
  }

  return Component
}
