function arrayToString(arr: []) {
  return arr.join(' ')
}

export default {
  global: {
    form: 'flex flex-col gap-4 items-start',
    // help: 'text-sm text-gray-500 order-3',
    input:
      'appearance-none bg-white/10 border border-white/20 text-white text-base rounded-md outline-none block w-full py-2 px-4 focus:bg-purple-500/25 focus:border-purple-500',
    label: 'text-white text-base italic',
    message:
      'text-xs mt-2 text-red-500 transition-all duration-300 bg-red-400/10 rounded-md px-3 order-2',
    outer: 'relative w-full'
  }
}
