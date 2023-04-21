const recursiveResolver = (input) => {
  const result = typeof input === 'function' ? input() : input
  return typeof result === 'function' ? recursiveResolver(result) : result
}

export default recursiveResolver
