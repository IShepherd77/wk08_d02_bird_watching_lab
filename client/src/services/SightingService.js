const baseURL = 'http://localhost:3000/api/sightings/'

export default {
  getSightings(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postSighting(sighting) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(sighting),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteSighting(sightingId) {
    return fetch(baseURL + sightingId, {
      method: 'DELETE'
    })
  }
}
