function count(string) {
    let string1 = string.split("").sort().join("");
    let counter = 1;
    for (let i = 0; i < string.length; i++) {
      if (string1[i] == string1[i + 1]) {
        counter++;
      } else {
        document.writeln(string1[i] + " " + counter,"<br/>");
        counter = 1;
      }
    }
  }
  count("thequickbrownfoxjumpsoverthelazydog");