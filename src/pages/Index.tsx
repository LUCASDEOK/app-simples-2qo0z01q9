import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Minus, Plus, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

const Index = () => {
  const [count, setCount] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const handleIncrement = () => {
    setCount((prev) => prev + 1)
    setAnimationKey((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setCount((prev) => {
      if (prev > 0) {
        setAnimationKey((prevKey) => prevKey + 1)
        return prev - 1
      }
      return 0
    })
  }

  const handleReset = () => {
    setCount(0)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-sm p-8 text-center animate-fade-in-up">
      <h2 className="text-lg font-semibold text-slate-800 mb-6">Valor Atual</h2>

      <div className="bg-sky-100 rounded-md py-6 px-12 mb-8">
        <span
          key={animationKey}
          className="text-4xl md:text-6xl font-extrabold text-blue-600 tracking-tight block animate-in fade-in-0 zoom-in-95 duration-150"
        >
          {count}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center gap-4">
        <Button
          onClick={handleIncrement}
          className="h-12 md:h-12 px-6 md:px-8 text-base font-medium shadow-md hover:shadow-lg hover:bg-blue-600 active:scale-98 transition-all duration-200"
        >
          <Plus className="mr-2 h-5 w-5" />
          Incrementar
        </Button>
        <Button
          onClick={handleDecrement}
          className="h-12 md:h-12 px-6 md:px-8 text-base font-medium shadow-md hover:shadow-lg hover:bg-blue-600 active:scale-98 transition-all duration-200"
        >
          <Minus className="mr-2 h-5 w-5" />
          Decrementar
        </Button>
        <Button
          variant="destructive"
          onClick={handleReset}
          className={cn(
            'h-12 md:h-12 px-6 md:px-8 text-base font-medium shadow-md hover:shadow-lg active:scale-98 transition-all duration-200',
            'bg-orange-500 hover:bg-orange-600 text-white',
          )}
        >
          <RotateCcw className="mr-2 h-5 w-5" />
          Resetar
        </Button>
      </div>
    </div>
  )
}

export default Index
