import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>HOME.</h1>
      <style jsx>{`
      h1 {
        color: darkgrey;
      }`}</style>
    </div>
  )
}

