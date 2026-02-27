class Cloak {
  static hourFromSeconds(seconds) {
    return Math.floor(seconds / 3600);
  }

  static minutesFromSeconds(seconds) {
    const remainingSeconds = seconds % 3600;
    return Math.floor(remainingSeconds / 60);
  }
}

console.log(Cloak.minutesFromSeconds(120)); 
console.log(Cloak.hourFromSeconds(3600));   