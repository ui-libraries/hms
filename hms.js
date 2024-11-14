const API = {
  async getSiteInfo(endpoint) {
    try {
      const response = await fetch(`${endpoint}site`)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching site info:', error)
    }
  },

  async getItems(endpoint) {
    try {
      const response = await fetch(`${endpoint}items`)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  },

  async getItemsInCollection(collectionEndpoint) {
    try {
      const response = await fetch(collectionEndpoint)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching items in collection:', error)
    }
  },

  hasItems(itemList) {
    return Array.isArray(itemList) && itemList.length > 0
  },

  async getItemMetadata(endpoint, id) {
    if (typeof id !== 'number') throw new Error('The value provided must be an id.')
    try {
      const response = await fetch(`${endpoint}items/${id}`)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching item metadata:', error)
    }
  },

  async getFilesInItem(endpoint, id) {
    try {
      const item = await this.getItemMetadata(endpoint, id)
      const response = await fetch(item.files.url)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching files in item:', error)
    }
  },

  async getCollections(endpoint) {
    try {
      const response = await fetch(`${endpoint}collections`)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching collections:', error)
    }
  },

  hasCollections(collectionList) {
    return Array.isArray(collectionList) && collectionList.length > 0
  },

  async getCollectionMetadataById(endpoint, id) {
    if (typeof id !== 'number') throw new Error('The value provided must be an id.')
    try {
      const response = await fetch(`${endpoint}collections/${id}`)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching collection metadata:', error)
    }
  },

  async getItemsInCollectionById(endpoint, id) {
    try {
      const collection = await this.getCollectionMetadataById(endpoint, id)
      const response = await fetch(collection.items.url)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching items in collection by ID:', error)
    }
  },

  async getExhibits(endpoint) {
    try {
      const response = await fetch(`${endpoint}exhibits`)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching exhibits:', error)
    }
  },

  async getExhibitMetadataById(endpoint, id) {
    if (typeof id !== 'number') throw new Error('The value provided must be an id.')
    try {
      const response = await fetch(`${endpoint}exhibits/${id}`)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching exhibit metadata:', error)
    }
  },

  async getPagesInExhibit(endpoint, id) {
    try {
      const exhibit = await this.getExhibitMetadataById(endpoint, id)
      const response = await fetch(exhibit.pages.url)
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)
      return await response.json()
    } catch (error) {
      console.error('Error fetching pages in exhibit:', error)
    }
  }
}

export default API
