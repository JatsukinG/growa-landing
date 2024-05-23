'use client'
import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'

const AnimatedCursor = () => {
  const cursorRef = useRef(null)

  const updateCursorPosition = (x: number, y: number) => {
    // @ts-ignore
    cursorRef.current.style.left = x + 'px'
    // @ts-ignore
    cursorRef.current.style.top = y + 'px'
  }

  useEffect((): any => {
    window.addEventListener('mousemove', function (e) {
      updateCursorPosition(e.clientX, e.clientY)
    })

    return () => window.removeEventListener
  }, [])

  return (
      <span
          ref={cursorRef}
          className={clsx([
            'fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-white/10',
            'w-24 h-24 rounded-full pointer-events-none ease-linear duration-75',
          ])}
      />
  )
}

export default AnimatedCursor