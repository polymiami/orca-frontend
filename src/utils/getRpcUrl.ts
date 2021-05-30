import random from 'lodash/random'

// Array of available nodes to connect to
const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]

/*
 * Split 88/12 between Matic Vigil/Infura to use up entire allotment 
 * of free & paid tiers. 
 * 
 * Tiers:
 * ============
 * Infura       -> 1,100,000 requests/day (88%)
 * Matic Vigil  -> 150,000 requests/day (12%)
 */
const getNodeUrl = () => {
  if (Math.random() < 0.88) {
    return nodes[0]  
  }
  return nodes[1]
}

export default getNodeUrl
