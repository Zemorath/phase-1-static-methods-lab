class Formatter {
  //add static methods here
    static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize(string) {
      return string.replace(/[^A-Za-z0-9-' -]+/g, "");
    }

    static titleize(string) {
      // return string.replace(
      //   /\w\S*/g,
      //   function(txt) {
      //   return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      //   }
      // );

      const words = string.split(" ");
      const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    
      let newString =  words.map((word) => {
        if (!exceptions.includes(word)) {
          return word[0].toUpperCase() + word.substring(1);
        } else {
          return word.toLowerCase()
        }
      }).join(" ");

      return newString.charAt(0).toUpperCase() + newString.slice(1);
    }
}