
function App() {
  return (
    <>
      <div align="center">


        <h1>React-js</h1>
        <h4>Lecture-1</h4>
        <p>Installing and basic concept about React-js</p>
        <h3>History of react js</h3>
        <p>React is the most powerful JavaScript library, which is used for building user interfaces. <br></br>It was developed by Meta(Facebook) and is often used for building single-page applications and mobile applications. <br></br>React was released first in 2013, and since then, it has become one of the most popular JavaScript libraries for building user interfaces.<br></br> It was developed by Jordan Walke, a software engineer at Meta(Facebook), and was initially released as an open-source project on GitHub.
        </p>
        <h3>Features of react js</h3>
        <p>1.&nbsp; jsk<br></br><br></br>
          2.&nbsp;&nbsp;perfomance<br></br><br></br>
          3.&nbsp;&nbsp;simplicity  <br></br><br></br>
          4. &nbsp;&nbsp;vitual dom <br></br><br></br>
          5.&nbsp;&nbsp; components <br></br><br></br>
          6.&nbsp;&nbsp; one-way data building
        </p>


        <h4> Fundamentals of React</h4>

        Understand directory structure


      <h4>  node_modules</h4>
        This folder will contain all react js dependencies.

       <h4> .gitignore</h4>
        This file is used by source control tool to identify which files and folders should be included or ignored during code commit.

       <h4> package.json</h4>
        This file contains dependencies and scripts required for the project.

      <h4>  Src folder</h4>
        src is one of the main folder in react project.

        <h4>Index.js</h4>
        index.js is the file that will be called once we will run the project.

      <h4>  App.js</h4>
        App.js is a component that will get loaded under index.js file. If we do any change in app.js file HTML component and save it it will reflect in localhost://3000


      <h3>  Introduction of JSX</h3>


        React JS JSX is a syntax extension of JavaScript for writing React Code in a simple way. Using JSX it is easier to create reusable UI components with fewer lines of code in a template-type language with the power of JavaScript.

        <h4>What is React Jsx?</h4>
        JSX stands for JavaScript XML. JSX is basically a syntax extension of JavaScript. It helps us to write HTML in JavaScript and forms the basis of React Development. Using JSX is not compulsory but it is highly recommended for programming in React as it makes the development process easier as the code becomes easy to write and read.

        Jsx file both code is run by html and javascript

       <h4> Why JSX ?</h4>
        It is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.
        It makes it easier for us to create templates.
        Instead of separating the markup and logic in separate files, React uses components for this purpose. We will learn about components in detail in further articles.
        As JSX is an expression, we can use it inside of if statements and for loops, assign it to variables, accept it as arguments, or return it from functions.


      <h4>  Rendering Elements</h4>
        In order to render any element into the Browser DOM, we need to have a container or root DOM element. It is almost a convention to have a div element with the id=”root” or id=”app” to be used as the root DOM element. Let’s suppose our index.html file has the following statement inside it.

      </div>

    </>
  );
}

export default App;
