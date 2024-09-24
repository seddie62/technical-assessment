import { defineStore } from 'pinia'

export const useRamStore = defineStore('ram', {
  state: () =>
    ({
      rickAndMorties: [],
      meta: {
        pages: 0,
      },
    } as RamState),

  getters: {
  },

  actions: {
    async getData(params: any) {
      if (this.meta.pages && params.page >= this.meta.pages) {
        return
      }

      const response: any = await $rickAndMorty(`character?page=${params.page}&name=${params.search}`)

      if (params.page === 1) {
        this.rickAndMorties = []
      }

      this.rickAndMorties = [...this.rickAndMorties, ...response.results]
      this.meta = response.info
      return response
    },

    addRickAndMorty(payload: RickAndMorty) {
      this.rickAndMorties.push(payload)
    },
  },
})
