# Calculadora de propinas

# Creado con React + TypeScript & Vite

Para los estilos se utilizó Tailwind
uso de useMemo, useCallback, creación de custom hooks, calculamos subtotal a pagar y total a pagar con propinas, reseteo de la información.

### useMemo

Memoriza el resultado de una función de cálculo para evitar que se vuelva a calcular en cada render, a menos que cambien sus dependencias, para este caso cuando cambia el valor de la propina seleccionada o la orden en sí.

### useCallback

Memoriza una función para que no se recree en cada render, a menos que cambien sus dependencias (order, tip).
