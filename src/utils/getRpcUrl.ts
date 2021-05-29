import random from 'lodash/random'

// Array of available nodes to connect to
const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]

/*
 * Split 60/40 between Matic Vigil/Infura to use up entire allotment 
 * of free tiers. 
 * 
 * Free Tiers:
 * ============
 * Matic Vigil  -> 150,000 requests/day (60%)
 * Infura       -> 100,000 requests/day (40%)
 */
const getNodeUrl = () => {
  if (Math.random() < 0.6) {
    return nodes[0]  
  }
  return nodes[1]
}

export default getNodeUrl
