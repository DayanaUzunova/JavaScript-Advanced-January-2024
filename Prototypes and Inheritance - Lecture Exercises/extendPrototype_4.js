function extendClassWithSpeciesAndToString(classToExtend) {
    // Attach species property to the prototype
    classToExtend.prototype.species = 'Human';
  
    // Attach toSpeciesString function to the prototype
    classToExtend.prototype.toSpeciesString = function () {
      // Call toString() from the current instance (using this)
      const instanceToString = this.toString();
  
      // Return the formatted string
      return `I am a ${this.species}. ${instanceToString}`;
    };
  }