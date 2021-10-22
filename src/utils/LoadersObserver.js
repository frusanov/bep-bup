class LoadersObserver {
  constructor() {
    this.loaders = []
    this.onLoad = null
  }

  setOnLoad(onLoad) {
    this.onLoad = onLoad
  }

  addLoader(id) {
    const candidate = this.loaders.find((loader) => loader.id === id)

    if (candidate) return candidate

    const loader = {
      id,
      loaded: false,
      progress: 0
    }
    this.loaders.push(loader)

    return loader
  }

  watchStatus(id) {
    return (xhr) => {
      const loader = this.loaders.find((loader) => loader.id === id)

      console.log(id, 'readyState', xhr.target.readyState)

      if (xhr.target.readyState === 4) {
        loader.loaded = true
        this.checkIsDone()
      }
    }
  }

  checkIsDone() {
    let isDone = true

    this.loaders.forEach((loader) => {
      isDone = isDone && loader.loaded
    })

    console.log('checkIsDone', isDone)

    if (isDone && this.onLoad) this.onLoad()
  }
}

export default LoadersObserver