function App() {

  const firstName = "John";
  const middelName = "Alan";
  const sureName = "Smith";
  const age = 23;
  const country = "Srilanka";

  const getFullName = (f,m,s)=> {
    return `${f} ${m} ${s}`
  }

  const arr = ["Apple","Grapes","Orange"];
  const lang = <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>React</li>
        </ul>;

  const pobj = {
    fname : "Smith",
    age : "40"
  }

  return (
    <>
      <div className="cont">
        <h1>Employee details</h1>
        <p>Full name : {firstName} { middelName} {sureName}</p>
        <p>Full Name function : {getFullName("Donato","Shenuka","Randeniya")}</p>
        <p>Age : {pobj.age}</p>
        <p>Country : {country}</p>
        <p>{firstName} like to eate {arr[1]}</p>
        <p>Frontend Language</p>
        {lang}
        <p>{pobj.fname} is {pobj.age} years old</p>
      </div>
    </>
  );
}

export default App;
