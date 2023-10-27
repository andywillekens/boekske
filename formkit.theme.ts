function arrayToString(arr: []) {
  return arr.join(' ')
}

export default {
  global: {
    form: 'flex flex-col gap-4 items-start',
    // help: 'text-sm text-gray-500 order-3',
    input: 'appearance-none bg-purple-500',
    label: 'text-white text-base',
    message:
      'text-xs mt-2 text-red-500 transition-all duration-300 bg-red-400/10 rounded-md px-3 order-2',
    outer: 'relative w-full'
  }
}
