export const INDEX_SCENE = 'INDEX_SCENE'

const index = (url) => ({
  type: INDEX_SCENE,
  payload: url,
})

export default { index }
