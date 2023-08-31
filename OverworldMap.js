class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;

    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;

    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(this.lowerImage, 
    utils.withGrid(10,5) - cameraPerson.x,
    utils.withGrid(6) - cameraPerson.y)
  }

  drawUpperImage(ctx, cameraPerson) {
    ctx.drawImage(this.upperImage,   
    utils.withGrid(10,5) - cameraPerson.x,
    utils.withGrid(6) - cameraPerson.y)
  } 
}

window.OverworldMaps = {
  DemoRoom: {
    lowerSrc: "/images/maps/DemoLower.png",
    upperSrc: "/images/maps/DemoUpper.png",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
    }
  },
  Lab: {
    lowerSrc: "/images/maps/fundo 2.png",
    upperSrc: "/images/maps/fundo 2.png",
    gameObjects: {
      hero: new GameObject({
        x: 3,
        y: 5,
      })
    }
  },
}