import NavSide from './components/NavSide/NavSide'

function App() {
  return (
    <div style={styles.body}>
      <NavSide active={"main"}/>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: "#322550",
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'row',
  }
}

export default App;