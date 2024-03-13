import { Firebase } from "./firebase/config";

function App() {
  return (
    <div className="App">
      <button onClick={() => {
        Firebase.firestore().collection('products').get().then(
          snapshot => {
            snapshot.forEach(element => {
              console.log(element.data(),element.id);
            });
          })
      }}>Click Me!</button>

<button onClick={() => {
        Firebase.firestore().collection('products').add(
          {
            name : "Redmi" ,
            price : 130
          }
        )
      }}>Add!</button>
    </div>
  );
}

export default App;
