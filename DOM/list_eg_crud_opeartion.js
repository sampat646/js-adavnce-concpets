 // adding langNames function
      function addLanguage(langName) {
        const li = document.createElement("li");
        li.innerHTML = `${langName}`;
        document.querySelector(".language").appendChild(li);
      }
      addLanguage("python");
      addLanguage("typescript");

      //optimised function for adding languages
      function Secondfun(langName) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${langName}`));
        document.querySelector(".language").appendChild(li);
      }
      Secondfun("java");
      Secondfun("c");

      //edit language name
      //First method for adding languages
      const secondlang = document.querySelector("li:nth-child(2)");
      secondlang.innerHTML = "c++";
      //output language name changed typrscript to c++;
      // Javascript
      // c++
      // typescript
      // java
      // c

      //replace language name with new name (1st method)
      const newli = document.createElement("li");
      newli.textContent = "mojo";
      secondlang.replaceWith(newli);
      // ouput language name changed c++ to mojo;
      // Javascript
      // mojo
      // typescript
      // java
      // c

      //replacing language name with new name (2nd method)
      const fisrtlang = document.querySelector("li:first-child");
      fisrtlang.outerHTML = "<li>typescript</li>";
      // output
      // typescript
      // mojo
      // typescript
      // java
      // c

      const remove = document.querySelector("li:last-child");
      remove.remove();
      // output
      // typescript
      // mojo
      // java
