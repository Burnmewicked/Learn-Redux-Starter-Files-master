// increment
function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add commment
function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    comment
  }
}

// remove comment
function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}